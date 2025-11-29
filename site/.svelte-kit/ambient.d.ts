
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const USER_ZDOTDIR: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_cache: string;
	export const NIX_BUILD_CORES: string;
	export const TERM_PROGRAM_VERSION: string;
	export const configureFlags: string;
	export const mesonFlags: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const npm_config_ignore_scripts: string;
	export const DIRENV_DIR: string;
	export const STRINGS: string;
	export const depsTargetTarget: string;
	export const XCURSOR_PATH: string;
	export const stdenv: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const builder: string;
	export const shellHook: string;
	export const NO_AT_BRIDGE: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_aarch64_unknown_linux_gnu: string;
	export const npm_config_globalconfig: string;
	export const DIRENV_FILE: string;
	export const EDITOR: string;
	export const phases: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const SOURCE_DATE_EPOCH: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const NIX_PATH: string;
	export const npm_config_init_module: string;
	export const NIXPKGS_CONFIG: string;
	export const CXX: string;
	export const _: string;
	export const system: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const ENABLE_IDE_INTEGRATION: string;
	export const HOST_PATH: string;
	export const VSCODE_INJECTION: string;
	export const IN_NIX_SHELL: string;
	export const doInstallCheck: string;
	export const HOME: string;
	export const NIX_BINTOOLS: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE: string;
	export const LS_COLORS: string;
	export const FZF_CTRL_R_OPTS: string;
	export const depsTargetTargetPropagated: string;
	export const npm_package_version: string;
	export const cmakeFlags: string;
	export const SSL_CERT_DIR: string;
	export const outputs: string;
	export const NIX_STORE: string;
	export const GIT_ASKPASS: string;
	export const LD: string;
	export const buildPhase: string;
	export const SSH_CONNECTION: string;
	export const DIRENV_DIFF: string;
	export const DIRENV_CONFIG: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const GTK_A11Y: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const doCheck: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const CLAUDE_CODE_SSE_PORT: string;
	export const npm_config_npm_version: string;
	export const depsBuildBuild: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const GTK_PATH: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const npm_config_prefix: string;
	export const ZDOTDIR: string;
	export const strictDeps: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TZDIR: string;
	export const AR: string;
	export const AS: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NM: string;
	export const PAGER: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const patches: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const buildInputs: string;
	export const XDG_SESSION_ID: string;
	export const preferLocalBuild: string;
	export const LOCALE_ARCHIVE: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const TERMINFO_DIRS: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const SSL_CERT_FILE: string;
	export const NODE_PATH: string;
	export const SSH_CLIENT: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const out: string;
	export const npm_package_json: string;
	export const CLIPBOARD_COPY: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const STRIP: string;
	export const XDG_DATA_DIRS: string;
	export const LIBEXEC_PATH: string;
	export const OBJDUMP: string;
	export const npm_config_noproxy: string;
	export const BROWSER: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const npm_config_node_gyp: string;
	export const dontAddDisableDepTrack: string;
	export const CC: string;
	export const NIX_CC: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_aarch64_unknown_linux_gnu: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const depsBuildTargetPropagated: string;
	export const depsBuildBuildPropagated: string;
	export const DIRENV_WATCHES: string;
	export const npm_config_global_prefix: string;
	export const CONFIG_SHELL: string;
	export const __structuredAttrs: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const NIX_HARDENING_ENABLE: string;
	export const OLDPWD: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const TERM_PROGRAM: string;
	export const depsHostHostPropagated: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		USER_ZDOTDIR: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		npm_config_cache: string;
		NIX_BUILD_CORES: string;
		TERM_PROGRAM_VERSION: string;
		configureFlags: string;
		mesonFlags: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		npm_config_ignore_scripts: string;
		DIRENV_DIR: string;
		STRINGS: string;
		depsTargetTarget: string;
		XCURSOR_PATH: string;
		stdenv: string;
		COLOR: string;
		npm_config_local_prefix: string;
		builder: string;
		shellHook: string;
		NO_AT_BRIDGE: string;
		NIX_CC_WRAPPER_TARGET_HOST_aarch64_unknown_linux_gnu: string;
		npm_config_globalconfig: string;
		DIRENV_FILE: string;
		EDITOR: string;
		phases: string;
		PWD: string;
		NIX_PROFILES: string;
		SOURCE_DATE_EPOCH: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		NIX_PATH: string;
		npm_config_init_module: string;
		NIXPKGS_CONFIG: string;
		CXX: string;
		_: string;
		system: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		ENABLE_IDE_INTEGRATION: string;
		HOST_PATH: string;
		VSCODE_INJECTION: string;
		IN_NIX_SHELL: string;
		doInstallCheck: string;
		HOME: string;
		NIX_BINTOOLS: string;
		SSH_ASKPASS: string;
		LANG: string;
		ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE: string;
		LS_COLORS: string;
		FZF_CTRL_R_OPTS: string;
		depsTargetTargetPropagated: string;
		npm_package_version: string;
		cmakeFlags: string;
		SSL_CERT_DIR: string;
		outputs: string;
		NIX_STORE: string;
		GIT_ASKPASS: string;
		LD: string;
		buildPhase: string;
		SSH_CONNECTION: string;
		DIRENV_DIFF: string;
		DIRENV_CONFIG: string;
		INIT_CWD: string;
		READELF: string;
		GTK_A11Y: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		doCheck: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		CLAUDE_CODE_SSE_PORT: string;
		npm_config_npm_version: string;
		depsBuildBuild: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		GTK_PATH: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		npm_config_prefix: string;
		ZDOTDIR: string;
		strictDeps: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TZDIR: string;
		AR: string;
		AS: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NM: string;
		PAGER: string;
		NIX_CFLAGS_COMPILE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		patches: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		buildInputs: string;
		XDG_SESSION_ID: string;
		preferLocalBuild: string;
		LOCALE_ARCHIVE: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		TERMINFO_DIRS: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		SSL_CERT_FILE: string;
		NODE_PATH: string;
		SSH_CLIENT: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		out: string;
		npm_package_json: string;
		CLIPBOARD_COPY: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		STRIP: string;
		XDG_DATA_DIRS: string;
		LIBEXEC_PATH: string;
		OBJDUMP: string;
		npm_config_noproxy: string;
		BROWSER: string;
		PATH: string;
		propagatedBuildInputs: string;
		npm_config_node_gyp: string;
		dontAddDisableDepTrack: string;
		CC: string;
		NIX_CC: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_aarch64_unknown_linux_gnu: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		depsBuildTargetPropagated: string;
		depsBuildBuildPropagated: string;
		DIRENV_WATCHES: string;
		npm_config_global_prefix: string;
		CONFIG_SHELL: string;
		__structuredAttrs: string;
		npm_node_execpath: string;
		RANLIB: string;
		NIX_HARDENING_ENABLE: string;
		OLDPWD: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		TERM_PROGRAM: string;
		depsHostHostPropagated: string;
		VSCODE_IPC_HOOK_CLI: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
