# AI 类

下文中`> `代表为 AI 应用内命令。

## OpenCode

OpenCode 是一个开源的 AI 编码代理。它提供终端界面、桌面应用和 IDE 扩展等多种使用方式。

![](https://opencode.ai/docs/_astro/screenshot.CQjBbRyJ_1dLadc.webp)

[OpenCode | 下载](https://opencode.ai/zh/download)

```shell
# 脚本安装
curl -fsSL https://opencode.ai/install | bash
# Node 方式安装
npm i -g opencode-ai
# AUR 安装
paru -S opencode

# 创建配置目录
mkdir -p ~/.config/opencode

# 启用 LSP
echo 'export OPENCODE_EXPERIMENTAL_LSP_TOOL=true' >> ~/.zshrc
echo 'export OPENCODE_ENABLE_EXA=1' >> ~/.zshrc
source ~/.zshrc
```

配置第三方 API，`nano ~/.config/opencode/opencode.json`修改配置文件：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "openai": {
      "options": {
        "baseURL": "https://example.com",
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
    "*": "ask",
    "read": "allow",
    "grep": "allow",
    "glob": "allow",
    "list": "allow",
    "lsp": "allow",
    "webfetch": "allow",
    "websearch": "allow",
    "skill": "allow",
    "todoread": "allow",
    "todowrite": "allow",
    "bash": {
      "*": "ask",
      "git status*": "allow",
      "git diff*": "allow",
      "git log*": "allow",
      "rg *": "allow",
      "grep *": "allow",
      "cat *": "allow",
      "ls *": "allow",
      "find *": "allow",
      "pnpm test*": "allow",
      "npm test*": "allow",
      "pytest*": "allow",
      "go test*": "allow",
      "cargo test*": "allow",
      "git push*": "deny",
      "rm*": "deny",
      "sudo*": "deny"
    },
    "edit": {
      "*": "ask",
      "src/*": "allow",
      "tests/*": "allow"
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
# 新开终端
$ opencode

# 选择模型
> /models
```

## Claude Code

直接在您的代码库中与 Claude 协作。您可以在终端、IDE、Slack 或网页端进行构建、调试和发布。只需说明您的需求，剩下的就交给 Claude 来处理。

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/69b844bc7b091916ff1ffc13_claude_code_in_terminal-img.webp)

[Download Claude | Claude by Anthropic](https://claude.com/download)

```shell
# 脚本安装
curl -fsSL https://claude.ai/install.sh | bash
# Node 方式安装
npm i -g @anthropic-ai/claude-code
# AUR 安装
paru -S claude-code
```

配置第三方 API：

```shell
# 新开终端

# 临时设置第三方 API 地址和 Key
$ export ANTHROPIC_BASE_URL="https://example.com"
$ export ANTHROPIC_AUTH_TOKEN="sk-xxx"

# 永久设置第三方 API 地址和 Key
$ echo 'export ANTHROPIC_BASE_URL="https://example.com"' >> ~/.zshrc
$ echo 'export ANTHROPIC_AUTH_TOKEN="sk-xxx"' >> ~/.zshrc
$ source ~/.zshrc

$ claude

Security guide

❯ 1. Yes, I trust this folder
  2. No, exit
```

## Codex CLI

Codex CLI 是 OpenAI 推出的一款编程助手。

![](https://raw.githubusercontent.com/openai/codex/main/.github/codex-cli-splash.png)

[CLI – Codex | OpenAI Developers](https://developers.openai.com/codex/cli)

```shell
$ npm i -g @openai/codex
```

配置第三方 API：

```shell
$ mkdir -p ~/.codex

# 配置第三方 Key
$ nano ~/.codex/auth.json

}
  "OPENAI_API_KEY": "sk-xxx"
}

# 配置第三方 API 地址等
$ nano ~/.codex/config.toml

model_provider = "OpenAI"
model = "gpt-5.4"
review_model = "gpt-5.4"
model_reasoning_effort = "high"
disable_response_storage = true
network_access = "enabled"
windows_wsl_setup_acknowledged = true
model_context_window = 1000000
model_auto_compact_token_limit = 900000

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://example.com"
wire_api = "responses"
requires_openai_auth = true

# 运行
$ codex
```

## CC Switch

CC Switch 为你提供一个桌面应用来管理所有五个 CLI 工具。无需手动编辑配置文件，你将获得一个可视化界面，一键将供应商导入应用，一键在不同的供应商之间进行切换，内置 50+ 供应商预设、统一的 MCP, SKILLS 管理以及系统托盘即时切换功能——所有操作都基于可靠的 SQLite 数据库和原子写入机制，保护你的配置不被损坏。

![](https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/screenshots/main-zh.png)

[Releases · farion1231/cc-switch](https://github.com/farion1231/cc-switch/releases)

```shell
paru -S cc-switch-bin
```

打开后，在特定 CLI 下添加供应商，输入 API 地址、Key，添加模型后切换供应商，除 Claude Code 外，其他对应的 CLI 工具要重启以应用更改。

添加供应商时，如果要调整 OpenAI 模型的推理强度（可选 `off`|`minimal`|`low`|`medium`|`high`|`xhigh`），修改配置 JSON：

```json
{
  "models": {
    "gpt-5.4": {
      "name": "GPT-5.4",
      "options": {
        "reasoning": {
          "effort": "high"
        }
      }
    },
    "gpt-5.3-codex": {
      "name": "GPT-5.3 Codex",
      "options": {
        "reasoning": {
          "effort": "high"
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

## Cline CLI

Cline CLI 直接在您的终端中运行 AI 编码代理。通过管道传输 git diff 以在 CI/CD 中进行自动代码审查，同时运行多个实例以进行并行开发，或将 Cline 集成到您现有的 shell 工作流程中。

[安装 - Cline 文档](https://docs.cline.net.cn/cline-cli/installation)

```shell
$ npm i -g cline
```

配置第三方 API：

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

## Cherry Studio：大语言模型客户端

Cherry Studio 是一款支持多个大语言模型（LLM）服务商的桌面客户端。

![](https://docs.cherry-ai.com/~gitbook/image?url=https%3A%2F%2F3562065924-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0Ut5BptC3t8CtSU1UWpM%252Fuploads%252Fgit-blob-1d8f30028704ce0a78a9e2bcff6d1dd0326e41f9%252Fimage.png%3Falt%3Dmedia&width=400&dpr=3&quality=100&sign=536c0510&sv=2)

[客户端下载 | Cherry Studio](https://docs.cherry-ai.com/cherry-studio/download)

```shell
paru cherry-studio-bin
```
