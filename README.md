# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Build (support Windows7+)
1. download webview2 runtime

> https://github.com/westinyang/WebView2RuntimeArchive/releases/tag/109.0.1518.78

2. expand to the project root

```bash
Expand .\Microsoft.WebView2.FixedVersionRuntime.109.0.1518.78.x64.cab -F:* ./src-tauri
```

3. Modify build config

> modify the notificatio config(if you use)

```toml
[dependencies]
tauri-plugin-notification = { version = "2.0.0", features = [ "windows7-compat" ] }
```

> modify build config

```json
{
  "bundle": {
    "windows": {
      "webviewInstallMode": {
        "type": "fixedRuntime",
        "path": "./Microsoft.WebView2.FixedVersionRuntime.109.0.1518.78.x64/"
      }
    }
  }
}
```


4. Downgrade rust to 1.77.2 (the last version which supports windows7)

```bash
rustup install 1.77.2
rustup default 1.77.2
rustc --version
```

5. build deps

> this step is to solve deps problems

```bash
cd src-tauri
cargo build
```

> You need to downgrade some deps due to the following reason:
> 1. Dep uses high version rustc, such as `1.83` => find a older version that uses `1.77.2` or lower

6. build app

```bash
pnpm tauri build
```