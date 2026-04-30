# AI

In the examples below, `> ` indicates a command entered inside the AI application itself.

## Cherry Studio: LLM Desktop Client

Cherry Studio is a desktop client that supports multiple large language model providers.

![](https://docs.cherry-ai.com/~gitbook/image?url=https%3A%2F%2F3562065924-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0Ut5BptC3t8CtSU1UWpM%252Fuploads%252Fgit-blob-1d8f30028704ce0a78a9e2bcff6d1dd0326e41f9%252Fimage.png%3Falt%3Dmedia&width=400&dpr=3&quality=100&sign=536c0510&sv=2)

[Download Client | Cherry Studio](https://docs.cherry-ai.com/cherry-studio/download)

```shell
paru -S cherry-studio-bin
```

## Chatbox

Chatbox AI is an AI client and assistant that supports a wide range of advanced AI models and APIs on Windows, macOS, Android, iOS, Linux, and the web.

![](https://chatboxai.app/_next/image?url=https%3A%2F%2Fdownload.chatboxai.app%2Fstatic%2Fsnapshot_file.gif&w=1920&q=75)

[Chatbox AI](https://chatboxai.app/zh/#download)

```shell
paru -S chatbox-bin
```

## CC Switch

CC Switch provides a desktop app for managing all five CLI tools in one place. Instead of editing config files manually, you get a visual interface with one-click vendor import, one-click switching between vendors, 50+ built-in vendor presets, unified MCP and SKILLS management, and instant system tray switching. Everything is backed by SQLite and atomic writes to avoid corrupting your configuration.

![](https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/screenshots/main-zh.png)

[Releases · farion1231/cc-switch](https://github.com/farion1231/cc-switch/releases)

```shell
paru -S cc-switch-bin
```

After launching the app, add a provider under the target CLI, enter the API base URL and key, add the model, then switch providers. All CLI tools except Claude Code need to be restarted before the changes take effect.

If you want to adjust the reasoning effort for OpenAI models while adding a provider, edit the JSON config. Supported values are `off`, `minimal`, `low`, `medium`, `high`, and `xhigh`:

```json
{
  "models": {
    "gpt-5.4": {
      "name": "GPT-5.4",
      "options": {
        "reasoning": {
          "effort": "xhigh"
        }
      }
    },
    "gpt-5.3-codex": {
      "name": "GPT-5.3 Codex",
      "options": {
        "reasoning": {
          "effort": "xhigh"
        }
      }
    }
  },
  "npm": "@ai-sdk/openai-compatible",
  "options": {
    "apiKey": "sk-xxx",
    "baseURL": "https://example.com/v1"
  }
}
```

## OpenCode

OpenCode is an open-source AI coding agent. It provides a terminal interface, desktop app, and IDE extensions.

![](https://opencode.ai/docs/_astro/screenshot.CQjBbRyJ_1dLadc.webp)

[OpenCode | Download](https://opencode.ai/zh/download)

```shell
# install with script
curl -fsSL https://opencode.ai/install | bash
# install with Node
npm i -g opencode-ai
# install from AUR
paru -S opencode

# create the config directory
mkdir -p ~/.config/opencode

# enable LSP
echo 'export OPENCODE_EXPERIMENTAL_LSP_TOOL=true' >> ~/.zshrc
echo 'export OPENCODE_ENABLE_EXA=1' >> ~/.zshrc
source ~/.zshrc
```

To configure a third-party API, edit `~/.config/opencode/opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "openai": {
      "options": {
        "baseURL": "https://example.com/v1",
        "apiKey": "sk-xxx"
      },
      "models": {
        "gpt-5.4": {
          "name": "GPT-5.4",
          "limit": {
            "context": 1050000,
            "output": 128000
          },
          "options": {
            "store": false,
            "reasoningEffort": "medium",
            "textVerbosity": "low",
            "reasoningSummary": "auto"
          },
          "variants": {
            "low": {
              "reasoningEffort": "low",
              "textVerbosity": "low"
            },
            "medium": {
              "reasoningEffort": "medium",
              "textVerbosity": "low"
            },
            "high": {
              "reasoningEffort": "high",
              "textVerbosity": "low"
            },
            "xhigh": {
              "reasoningEffort": "xhigh",
              "textVerbosity": "low"
            }
          }
        },
        "gpt-5.3-codex": {
          "name": "GPT-5.3 Codex",
          "limit": {
            "context": 400000,
            "output": 128000
          },
          "options": {
            "store": false,
            "reasoningEffort": "medium",
            "textVerbosity": "low",
            "reasoningSummary": "auto"
          },
          "variants": {
            "low": {
              "reasoningEffort": "low",
              "textVerbosity": "low"
            },
            "medium": {
              "reasoningEffort": "medium",
              "textVerbosity": "low"
            },
            "high": {
              "reasoningEffort": "high",
              "textVerbosity": "low"
            },
            "xhigh": {
              "reasoningEffort": "xhigh",
              "textVerbosity": "low"
            }
          }
        }
      }
    }
  },
  "model": "openai/gpt-5.4",
  "small_model": "openai/gpt-5.3-codex",
  "permission": {
    "*": "allow",
    "external_directory": {
      "*": "ask"
    },
    "doom_loop": "ask",
    "bash": {
      "*": "allow",
      "git push*": "ask",
      "git commit*": "ask",
      "rm*": "ask",
      "sudo*": "ask"
    },
    "edit": {
      "*": "allow"
    }
  },
  "agent": {
    "build": {
      "options": {
        "store": false
      }
    },
    "plan": {
      "options": {
        "store": false
      }
    }
  }
}
```

```shell
# open a new terminal
$ opencode

# select the model
> /models
```

## Claude Code

Collaborate with Claude directly inside your codebase. You can build, debug, and ship from the terminal, IDE, Slack, or the web. Describe what you need, and let Claude handle the rest.

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/69b844bc7b091916ff1ffc13_claude_code_in_terminal-img.webp)

[Download Claude | Claude by Anthropic](https://claude.com/download)

```shell
# install with script
curl -fsSL https://claude.ai/install.sh | bash
# install with Node
npm i -g @anthropic-ai/claude-code
# install from AUR
paru -S claude-code
```

Configure a third-party API:

```shell
# open a new terminal

# set a third-party base URL and key temporarily
$ export ANTHROPIC_BASE_URL="https://example.com/v1"
$ export ANTHROPIC_AUTH_TOKEN="sk-xxx"

# set a third-party base URL and key permanently
$ echo 'export ANTHROPIC_BASE_URL="https://example.com/v1"' >> ~/.zshrc
$ echo 'export ANTHROPIC_AUTH_TOKEN="sk-xxx"' >> ~/.zshrc
$ source ~/.zshrc

$ claude

Security guide

❯ 1. Yes, I trust this folder
  2. No, exit
```

## Codex CLI

Codex CLI is a coding assistant released by OpenAI.

![](https://raw.githubusercontent.com/openai/codex/main/.github/codex-cli-splash.png)

[CLI - Codex | OpenAI Developers](https://developers.openai.com/codex/cli)

```shell
$ npm i -g @openai/codex
```

Configure a third-party API:

```shell
$ mkdir -p ~/.codex

# configure the third-party key
$ nano ~/.codex/auth.json

{
  "OPENAI_API_KEY": "sk-xxx"
}

# configure the third-party base URL and related settings
$ nano ~/.codex/config.toml

model_provider = "OpenAI"
model = "gpt-5.4"
review_model = "gpt-5.4"
model_reasoning_effort = "xhigh"
disable_response_storage = true
network_access = "enabled"
windows_wsl_setup_acknowledged = true
model_context_window = 1000000
model_auto_compact_token_limit = 900000

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://example.com/v1"
wire_api = "responses"
requires_openai_auth = true

# run
$ codex
```

## OpenAI Codex Desktop

Codex Desktop is a desktop experience focused on handling Codex threads in parallel, with built-in worktree support, automations, and Git features.

![](https://developers.openai.com/images/codex/app/app-screenshot-light.webp)

[App - Codex | OpenAI Developers](https://developers.openai.com/codex/app/)

```shell
# install the desktop app
$ paru -S openai-codex-desktop

# install or update Codex CLI
$ npm i -g @openai/codex

# check the Codex version in your terminal
$ codex -V
```

When it starts, the desktop app calls the `codex` available in the system environment. If you installed a newer `codex` through `nvm`, `npm`, or another method in your terminal, but your graphical session `PATH` does not include that directory, the desktop app may still pick an older version.

If the app shows:

```text
Codex on this environment is out of date. Update to 0.121.0 or newer. Current version: 0.114.0
```

If `codex -V` in your terminal already shows `0.121.0` or newer but the desktop app still fails, the usual cause is that the graphical session `PATH` differs from the terminal `PATH`. Check the `PATH` used by the graphical session:

```shell
$ systemctl --user show-environment | rg '^PATH='
```

If the output does not include the directory where your `codex` binary lives, such as `~/.nvm/versions/node/.../bin`, you can point the desktop app to that `codex` explicitly:

```shell
$ mkdir -p ~/.local/bin
$ nano ~/.local/bin/codex-desktop
```

Add:

```shell
#!/bin/sh

export CODEX_CLI_PATH="/home/your-name/.nvm/versions/node/v24.11.1/bin/codex"
exec /usr/bin/codex-desktop "$@"
```

Then make it executable:

```shell
$ chmod +x ~/.local/bin/codex-desktop
```

Reopen Codex Desktop.

## Cline CLI

Cline CLI runs an AI coding agent directly in your terminal. You can pipe `git diff` into it for automated code review in CI/CD, run multiple instances for parallel development, or integrate it into your existing shell workflows.

[Install - Cline Docs](https://docs.cline.net.cn/cline-cli/installation)

```shell
$ npm i -g cline
```

Configure a third-party API:

```shell
$ cline

How would you like to get started?
> Use your own API key

Select a provider
> OpenAI Compatible

OpenAI Compatible API Key
> sk-xxx

Model ID
> gpt-5.4

Base URL (optional)
> https://example.com/v1
```

## rtk: Filter and Compact LLM Context

rtk filters and compacts command output before it reaches the LLM context. It is a single Rust binary with zero dependencies and typically adds less than 10 ms of overhead.

![](https://www.rtk-ai.app/assets/screenshots/rtkgain02.png)

[rtk - Make your AI coding agent smarter | CLI proxy](https://www.rtk-ai.app/#)

```shell
# install with script
curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh
# install from AUR
paru -S rtk
```

Commands: [rtk/README_zh.md at master · rtk-ai/rtk](https://github.com/rtk-ai/rtk/blob/master/README_zh.md#%E5%91%BD%E4%BB%A4)

Initialize:

```shell
# This installs a PreToolUse hook that transparently rewrites Bash commands
# into their rtk equivalents.
$ rtk init --global 

RTK hook installed/updated (global).

  Hook:      /home/duanluan/.claude/hooks/rtk-rewrite.sh
  RTK.md:    /home/duanluan/.claude/RTK.md (10 lines)
  CLAUDE.md: @RTK.md reference added

Patch existing /home/duanluan/.claude/settings.json? [y/N] 
y

  settings.json: hook added
  Restart Claude Code. Test with: git status
  filters:   /home/duanluan/.config/rtk/filters.toml (template, edit to add user-global filters)


  [info] Anonymous telemetry is enabled (opt-out: RTK_TELEMETRY_DISABLED=1)
  [info] See: https://github.com/rtk-ai/rtk#privacy--telemetry
```

Initialize for a specific tool:

```shell
rtk init -g --opencode
rtk init -g --codex

rtk init -g --agent cursor
rtk init -g --agent windsurf
rtk init -g --agent cline
```

Show the current setup:

```shell
rtk init --show 
rtk Configuration:

[ok] Hook: /home/njcm/.claude/hooks/rtk-rewrite.sh (thin delegator, version 3)
[ok] RTK.md: /home/njcm/.claude/RTK.md (slim mode)
[ok] Integrity: hook hash verified
[ok] Global (~/.claude/CLAUDE.md): @RTK.md reference
[--] Local (./CLAUDE.md): not found
[ok] settings.json: RTK hook configured
[ok] OpenCode: plugin installed (/home/njcm/.config/opencode/plugins/rtk.ts)
[--] Cursor hook: not found
[--] Cursor hooks.json: not found

Usage:
  rtk init              # Full injection into local CLAUDE.md
  rtk init -g           # Hook + RTK.md + @RTK.md + settings.json (recommended)
  rtk init -g --auto-patch    # Same as above but no prompt
  rtk init -g --no-patch      # Skip settings.json (manual setup)
  rtk init -g --uninstall     # Remove all RTK artifacts
  rtk init -g --claude-md     # Legacy: full injection into ~/.claude/CLAUDE.md
  rtk init -g --hook-only     # Hook only, no RTK.md
  rtk init --codex            # Configure local AGENTS.md + RTK.md
  rtk init -g --codex         # Configure ~/.codex/AGENTS.md + ~/.codex/RTK.md
  rtk init -g --opencode      # OpenCode plugin only
  rtk init -g --agent cursor  # Install Cursor Agent hooks
```

Inspect savings:

```shell
rtk gain                        # summary
rtk gain --graph                # ASCII graph (30 days)
rtk discover                    # find missed savings opportunities
```

If it does not work with Codex or Claude Code, adjust `~/.codex/AGENTS.md` or `~/.claude/CLAUDE.md`:

```shell
$ nano ~/.codex/AGENTS.md

NO_BUILTINS. 
SIMPLE_CMD: rtk <cmd>
COMPLEX_PIPELINE: rtk proxy sh -c "<cmd>"
@/home/xxx/.codex/RTK.md
```

## Cockpit Tools

An AI IDE account manager that currently supports Antigravity, Codex, GitHub Copilot, Windsurf, Kiro, Cursor, Gemini CLI, CodeBuddy, CodeBuddy CN, Qoder, Trae, and Zed. It also supports multi-account, multi-instance parallel runs.

![](https://raw.githubusercontent.com/jlcodes99/cockpit-tools/main/docs/images/dashboard_overview.png)

[jlcodes99/cockpit-tools - GitHub](https://github.com/jlcodes99/cockpit-tools)

```shell
paru -S cockpit-tools-bin
```

## Cursor

Cursor is built to make you dramatically more productive and is one of the strongest ways to code with AI.

![](https://cursor.com/docs-static/_next/image?url=%2Fdocs-static%2Fimages%2Fagent%2Freview.jpg&w=1024&q=75&dpl=dpl_3BLcT9FRejoM2QpppgiP1dNtQ42k)

[Cursor · Download](https://cursor.com/cn/download)

```shell
paru -S cursor-bin
```

## Windsurf

Windsurf is an intuitive AI coding tool designed to keep you and your team productive.

[Download Windsurf Editor and Plugins | Windsurf](https://windsurf.com/download)

```shell
paru -S windsurf
```

## Antigravity

Google Antigravity AI IDE is an agent-first development environment that combines code editing, terminal access, and browser-level automation, allowing AI to participate directly in writing, debugging, and validating software.

![](https://antigravity.google/assets/image/docs/editor-open-agent-manager.png)

[Google Antigravity Download](https://antigravity.google/download)

```shell
paru -S antigravity
```

## Kiro

Kiro provides a structured framework for AI coding through specification-driven development.

![](https://kiro.dev/images/home/secondary-specs-requirements.png?h=865ca945)

[Downloads - Kiro](https://kiro.dev/downloads/)

```shell
paru -S kiro-ide
```

## Trae

TRAE (/treɪ/) deeply integrates AI capabilities and acts like an AI software engineer that can understand requirements, use tools, and complete development tasks independently.

![](https://p16-arcosite-sg.ibyteimg.com/tos-alisg-i-k9wyc2ijk0-sg/bed61a992e3a446585554ed3144db28c~tplv-k9wyc2ijk0-image.image)

[Download | TRAE - Collaborate with Intelligence](https://www.trae.ai/download)

```shell
paru -S trae-bin
```

## Qoder

Qoder is an agentic programming platform built for real software projects.

![](https://img.alicdn.com/imgextra/i2/O1CN01rJsQ0Y1izj4k0jCl3_!!6000000004484-2-tps-2760-1864.png)

[Download | Qoder](https://qoder.com/download)

```shell
paru -S qoder-bin
```
