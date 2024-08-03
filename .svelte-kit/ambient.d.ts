
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
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
	export const ELECTRON_RUN_AS_NODE: string;
	export const COMMAND_MODE: string;
	export const DOCKER_DEFAULT_PLATFORM: string;
	export const ELECTRON_NO_ATTACH_CONSOLE: string;
	export const HOME: string;
	export const HOMEBREW_CELLAR: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_REPOSITORY: string;
	export const INFOPATH: string;
	export const JAVA_HOME: string;
	export const LANG: string;
	export const LC_CTYPE: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const LSCOLORS: string;
	export const LS_COLORS: string;
	export const MANPATH: string;
	export const MallocNanoZone: string;
	export const NODE_PATH: string;
	export const NVM_BIN: string;
	export const NVM_CD_FLAGS: string;
	export const NVM_DIR: string;
	export const NVM_INC: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const PAGER: string;
	export const PATH: string;
	export const PNPM_HOME: string;
	export const PWD: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SSH_AUTH_SOCK: string;
	export const TERM: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TERM_SESSION_ID: string;
	export const TMPDIR: string;
	export const USER: string;
	export const VSCODE_AMD_ENTRYPOINT: string;
	export const VSCODE_CLI: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const VSCODE_CWD: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_PID: string;
	export const XPC_FLAGS: string;
	export const XPC_SERVICE_NAME: string;
	export const ZSH: string;
	export const __CFBundleIdentifier: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const NX_WORKSPACE_ROOT_PATH: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const VSCEXT_STACK_ANALYSIS_COMMAND: string;
	export const VSCEXT_TRACK_RECOMMENDATION_ACCEPTANCE_COMMAND: string;
	export const VSCEXT_UTM_SOURCE: string;
	export const VSCEXT_MATCH_MANIFEST_VERSIONS: string;
	export const VSCEXT_USE_PYTHON_VIRTUAL_ENVIRONMENT: string;
	export const VSCEXT_USE_GO_MVS: string;
	export const VSCEXT_ENABLE_PYTHON_BEST_EFFORTS_INSTALLATION: string;
	export const VSCEXT_USE_PIP_DEP_TREE: string;
	export const VSCEXT_VULNERABILITY_ALERT_SEVERITY: string;
	export const VSCEXT_EXHORT_MVN_PATH: string;
	export const VSCEXT_EXHORT_GRADLE_PATH: string;
	export const VSCEXT_EXHORT_NPM_PATH: string;
	export const VSCEXT_EXHORT_GO_PATH: string;
	export const VSCEXT_EXHORT_PYTHON3_PATH: string;
	export const VSCEXT_EXHORT_PIP3_PATH: string;
	export const VSCEXT_EXHORT_PYTHON_PATH: string;
	export const VSCEXT_EXHORT_PIP_PATH: string;
	export const VSCEXT_TELEMETRY_ID: string;
	export const VSCEXT_EXHORT_SYFT_PATH: string;
	export const VSCEXT_EXHORT_SYFT_CONFIG_PATH: string;
	export const VSCEXT_EXHORT_SKOPEO_PATH: string;
	export const VSCEXT_EXHORT_SKOPEO_CONFIG_PATH: string;
	export const VSCEXT_EXHORT_DOCKER_PATH: string;
	export const VSCEXT_EXHORT_PODMAN_PATH: string;
	export const VSCEXT_EXHORT_IMAGE_PLATFORM: string;
	export const APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
	export const npm_config_legacy_peer_deps: string;
	export const ELECTRON_NO_ASAR: string;
	export const CI: string;
	export const NX_PROJECT_GLOB_CACHE: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
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
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
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
		ELECTRON_RUN_AS_NODE: string;
		COMMAND_MODE: string;
		DOCKER_DEFAULT_PLATFORM: string;
		ELECTRON_NO_ATTACH_CONSOLE: string;
		HOME: string;
		HOMEBREW_CELLAR: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_REPOSITORY: string;
		INFOPATH: string;
		JAVA_HOME: string;
		LANG: string;
		LC_CTYPE: string;
		LESS: string;
		LOGNAME: string;
		LSCOLORS: string;
		LS_COLORS: string;
		MANPATH: string;
		MallocNanoZone: string;
		NODE_PATH: string;
		NVM_BIN: string;
		NVM_CD_FLAGS: string;
		NVM_DIR: string;
		NVM_INC: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		PAGER: string;
		PATH: string;
		PNPM_HOME: string;
		PWD: string;
		SHELL: string;
		SHLVL: string;
		SSH_AUTH_SOCK: string;
		TERM: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TERM_SESSION_ID: string;
		TMPDIR: string;
		USER: string;
		VSCODE_AMD_ENTRYPOINT: string;
		VSCODE_CLI: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		VSCODE_CWD: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_PID: string;
		XPC_FLAGS: string;
		XPC_SERVICE_NAME: string;
		ZSH: string;
		__CFBundleIdentifier: string;
		__CF_USER_TEXT_ENCODING: string;
		NX_WORKSPACE_ROOT_PATH: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		VSCEXT_STACK_ANALYSIS_COMMAND: string;
		VSCEXT_TRACK_RECOMMENDATION_ACCEPTANCE_COMMAND: string;
		VSCEXT_UTM_SOURCE: string;
		VSCEXT_MATCH_MANIFEST_VERSIONS: string;
		VSCEXT_USE_PYTHON_VIRTUAL_ENVIRONMENT: string;
		VSCEXT_USE_GO_MVS: string;
		VSCEXT_ENABLE_PYTHON_BEST_EFFORTS_INSTALLATION: string;
		VSCEXT_USE_PIP_DEP_TREE: string;
		VSCEXT_VULNERABILITY_ALERT_SEVERITY: string;
		VSCEXT_EXHORT_MVN_PATH: string;
		VSCEXT_EXHORT_GRADLE_PATH: string;
		VSCEXT_EXHORT_NPM_PATH: string;
		VSCEXT_EXHORT_GO_PATH: string;
		VSCEXT_EXHORT_PYTHON3_PATH: string;
		VSCEXT_EXHORT_PIP3_PATH: string;
		VSCEXT_EXHORT_PYTHON_PATH: string;
		VSCEXT_EXHORT_PIP_PATH: string;
		VSCEXT_TELEMETRY_ID: string;
		VSCEXT_EXHORT_SYFT_PATH: string;
		VSCEXT_EXHORT_SYFT_CONFIG_PATH: string;
		VSCEXT_EXHORT_SKOPEO_PATH: string;
		VSCEXT_EXHORT_SKOPEO_CONFIG_PATH: string;
		VSCEXT_EXHORT_DOCKER_PATH: string;
		VSCEXT_EXHORT_PODMAN_PATH: string;
		VSCEXT_EXHORT_IMAGE_PLATFORM: string;
		APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
		npm_config_legacy_peer_deps: string;
		ELECTRON_NO_ASAR: string;
		CI: string;
		NX_PROJECT_GLOB_CACHE: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
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
