#!/usr/bin/env bash

set -euo pipefail

VERSION="${1:-$(date +%Y.%m.%d)}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="${ROOT_DIR}/dist"
OUTPUT_BASENAME="linux-notes-${VERSION}"

if ! command -v pandoc >/dev/null 2>&1; then
  echo "pandoc is required. Please install pandoc first." >&2
  exit 1
fi

if ! command -v xelatex >/dev/null 2>&1; then
  echo "xelatex is required for PDF output. Please install texlive-xetex (and Chinese fonts)." >&2
  exit 1
fi

SOURCE_FILES=(
  "${ROOT_DIR}/docs/notes/system-installation.md"
  "${ROOT_DIR}/docs/notes/system-configuration.md"
  "${ROOT_DIR}/docs/notes/software-installation/system.md"
  "${ROOT_DIR}/docs/notes/software-installation/tool.md"
  "${ROOT_DIR}/docs/notes/software-installation/standard.md"
  "${ROOT_DIR}/docs/notes/software-installation/img-video-audio-edit.md"
  "${ROOT_DIR}/docs/notes/software-installation/development.md"
  "${ROOT_DIR}/docs/notes/software-installation/game.md"
  "${ROOT_DIR}/docs/notes/software-uninstallation.md"
  "${ROOT_DIR}/docs/notes/questions.md"
  "${ROOT_DIR}/docs/notes/bug.md"
  "${ROOT_DIR}/docs/notes/tips-tricks.md"
)

for file in "${SOURCE_FILES[@]}"; do
  if [[ ! -f "${file}" ]]; then
    echo "Missing source file: ${file}" >&2
    exit 1
  fi
done

mkdir -p "${OUTPUT_DIR}"

COMMON_ARGS=(
  --standalone
  --toc
  --metadata="title:Linux 使用笔记（Arch Manjaro KDE）"
  --metadata="author:duanluan"
  --metadata="date:${VERSION//./-}"
  --resource-path="${ROOT_DIR}/docs:${ROOT_DIR}/docs/notes:${ROOT_DIR}/docs/notes/assets"
)

pandoc "${SOURCE_FILES[@]}" \
  "${COMMON_ARGS[@]}" \
  --output "${OUTPUT_DIR}/${OUTPUT_BASENAME}.epub"

pandoc "${SOURCE_FILES[@]}" \
  "${COMMON_ARGS[@]}" \
  --pdf-engine=xelatex \
  -V "mainfont=Noto Serif" \
  -V "CJKmainfont=Noto Sans CJK SC" \
  -V "geometry:margin=1in" \
  --output "${OUTPUT_DIR}/${OUTPUT_BASENAME}.pdf"

echo "Built:"
echo "  ${OUTPUT_DIR}/${OUTPUT_BASENAME}.epub"
echo "  ${OUTPUT_DIR}/${OUTPUT_BASENAME}.pdf"
