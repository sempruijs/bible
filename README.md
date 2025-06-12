# Cardano Svelte Effect Nix Template

Don’t waste time setting up your development environment.  
Start building your Cardano dApp right away.

This template automatically deployes your dApp on merge with main.
You can visit [the website](https://sempruijs.github.io/cardano-svelte-effect-nix-template/) to see the working template in action.

---

### Motivation

I came across [Cor's Svelte Effect Nix Template](https://github.com/cor/svelte-effect-nix-template), which helped me get started with Svelte.  
However, when I wanted to start building dApps with MeshJS, I ran into a lot of issues setting up a working environment.

After spending too much time fixing bugs I didn’t want to deal with, I decided to create a template to help other Cardano developers get started faster.

---

## What's in the template?

- **Svelte** – Frontend framework  
- **MeshJS** – Easy interaction with Cardano wallets  
- **Tailwind CSS** – Utility-first styling  
- **TypeScript + Effect** – Robust and type-safe programming  
- **Nix Flakes** – Reproducible dev environment and build system  
- **GitHub Actions** – Deploys the Nix build as a static site via GitHub Pages

---

## Getting Started

### With Nix (recommended)

The best way to use this template is with Nix flakes.

1. Enter the development shell:

   ```bash
   nix develop
   ```

2. Run the development server:

   ```bash
   nix run .#dev
   ```

3. Build the app as a static site:

   ```bash
   nix build
   ```

4. Preview the build locally:

   ```bash
   nix run
   ```

---

### Without Nix

> ⚠️ **Note:** Do not delete `flake.nix` or `flake.lock` — they are required for deploying to GitHub Pages.

While using Nix is highly recommended for a robust setup, you can still use this template with just `npm`:

1. Run the development server:

   ```bash
   cd site
   npm install
   npm run dev
   ```

2. Build the static website:

   ```bash
   cd site
   npm run build
   ```

---

## Contributing

Contributions are very welcome!  
Feel free to open an issue or submit a pull request.

---

## License

[MIT License](./LICENSE)
