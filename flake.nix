{
  description = "Fast open source bible app";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    naersk.url = "github:nix-community/naersk";
  };

  outputs = inputs@{ self, nixpkgs, flake-parts, treefmt-nix, naersk, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin" ];
      imports = [
        treefmt-nix.flakeModule
      ];

      perSystem = { config, self', inputs', pkgs, lib, system, ... }: {
        packages =
          let
            packageJSON = lib.importJSON ./site/package.json;

            naersk' = pkgs.callPackage naersk {};
          in
          rec {
            wasm = naersk'.buildPackage {
              src = ./site/rust;
              buildInputs = with pkgs; [ tree lld ];
              WASM32_UNKNOWN_UNKNOWN = 1;
              CARGO_BUILD_TARGET = "wasm32-unknown-unknown"; 
              buildPhase = ''
                cargo build --release --target wasm32-unknown-unknown
              '';
              installPhase = ''
                mkdir -p $out
                cp -r target/wasm32-unknown-unknown/release/ $out/.
              '';
            };

            wasm-pkg = pkgs.stdenv.mkDerivation {
              src = ./.;
              name = "wasm-pkg";
              buildInputs = [ pkgs.tree wasm pkgs.wasm-bindgen-cli ];

              buildPhase = ''
                wasm-bindgen \
                --target web \
                --out-dir $out \
                ${wasm}/release/rust.wasm

                 cat > $out/package.json <<EOF
{
  "name": "rust",
  "type": "module",
  "version": "0.1.0",
  "files": [
    "rust_bg.wasm",
    "rust.js",
    "rust.d.ts"
  ],
  "main": "rust.js",
  "types": "rust.d.ts",
  "sideEffects": [
    "./snippets/*"
  ]
}
EOF
              '';
            };

            app = pkgs.buildNpmPackage {
              npmDepsHash = "sha256-Eu8LaE2JJnD4PiaiR2rh9tYCk88zseinQFb0Ng/vonY=";
              NODE_OPTIONS = "--openssl-legacy-provider";
              src = ./site;
              pname = packageJSON.name;
              inherit (packageJSON) version;

              preBuild = ''
                mkdir -p ./rust/pkg
                cp -r --no-preserve=mode,ownership ${wasm-pkg}/* ./rust/pkg/
                chmod -R u+w ./rust/pkg
                ls -l ./rust/pkg
              '';

              installPhase = ''
                mkdir -p $out
                cp -r ./build/* $out
              '';
              doCheck = false;
              # checkPhase = ''
              #   npm run test
              # '';
              doDist = false;
            };
            default = self'.packages.app;
          };

        apps = {
          dev = {
            type = "app";
            program = pkgs.writeShellApplication {
              name = "app-dev-server";
              runtimeInputs = [ pkgs.nodejs ];
              text = ''
                cd site
                npm install
                npm run dev
              '';
            };
          };
          preview = {
            type = "app";
            program = pkgs.writeShellApplication {
              name = "preview-app";
              runtimeInputs = [ pkgs.miniserve ];
              text = ''
                miniserve \
                --spa \
                --index index.html \
                --port 8080 \
                --media-type wasm=application/wasm \
                ${self'.packages.app}
              '';
            };
          };
          default = self'.apps.preview;
        };

        devShells.default = pkgs.mkShell {
          name = "app-devshell";
          buildInputs = with pkgs; [
            nodejs
            cargo
            rustc
            lld
            wasm-pack
            nodePackages_latest.nodejs
            nodePackages_latest.graphqurl
            nodePackages_latest.svelte-language-server
            nodePackages_latest."@tailwindcss/language-server"
            nodePackages_latest.typescript-language-server
            nodePackages_latest.vscode-langservers-extracted
            config.treefmt.build.wrapper
          ];
        };

        treefmt = {
          projectRootFile = "flake.nix";
          programs = {
            prettier = {
              enable = true;
              package = pkgs.nodePackages.prettier;
              includes = [
                "*.ts"
                "*.js"
                "*.json"
                "*.md"
                "*.svelte"
                "*.html"
                "*.css"
              ];
            };
            nixpkgs-fmt = {
              enable = true;
              includes = [ "*.nix" ];
            };
          };
        };
      };

      flake.templates.default = {
        path = ./.;
        description = "Reproducible Svelte app with Effect integration";
      };
    };
}
