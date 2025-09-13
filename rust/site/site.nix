{ pkgs, craneLib, rustToolchain }:

let
  src = pkgs.lib.fileset.toSource {
    root = ./.;
    fileset = pkgs.lib.fileset.unions [
      (craneLib.fileset.commonCargoSources ./.)
      (pkgs.lib.fileset.fileFilter (
        file: pkgs.lib.any file.hasExt [ "html" "scss" "css" "js" "json" "txt" "png" "btrl" ]
      ) ./.)
      (pkgs.lib.fileset.maybeMissing ./assets)
    ];
  };

  commonArgs = {
    inherit src;
    strictDeps = true;
    buildInputs = pkgs.lib.optionals pkgs.stdenv.isDarwin [
      pkgs.libiconv
    ];
    # Copy peter dependency into the build
    prePatch = ''
      cp -r ${../peter} ../peter
      chmod -R +w ../peter
    '';
  };

  wasmArgs = commonArgs // {
    pname = "trunk-workspace-wasm";
    version = "0.1.0";
    cargoExtraArgs = "--package=bible";
    CARGO_BUILD_TARGET = "wasm32-unknown-unknown";
  };

  cargoArtifactsWasm = craneLib.buildDepsOnly (wasmArgs // {
    doCheck = false;
  });

in craneLib.buildTrunkPackage (
  wasmArgs // {
    pname = "trunk-workspace-client";
    cargoArtifacts = cargoArtifactsWasm;

    nativeBuildInputs = (wasmArgs.nativeBuildInputs or []) ++ [ 
      pkgs.tailwindcss
    ];

    preBuild = ''
      mkdir -p target/trunk-cache
      
      echo "Building Tailwind CSS..."
      ${pkgs.tailwindcss}/bin/tailwindcss \
        -i ./style/tailwind.css \
        -o ./style/output.css \
        --config ./tailwind.config.js
    '';
    
    TRUNK_CACHE_DIR = "./target/trunk-cache";
    HOME = "./target/home";

    postBuild = ''
      cp ./dist/index.html ./dist/404.html
    '';

    wasm-bindgen-cli = pkgs.wasm-bindgen-cli;
  }
)