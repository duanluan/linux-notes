#!/usr/bin/env bash

set -euo pipefail

VERSION="${1:-$(date +%Y.%m.%d)}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="${ROOT_DIR}/dist"
EN_OUTPUT_BASENAME="linux-notes-en-${VERSION}"
ZH_OUTPUT_BASENAME="linux-notes-zh-CN-${VERSION}"

if ! command -v pandoc >/dev/null 2>&1; then
  echo "pandoc is required. Please install pandoc first." >&2
  exit 1
fi

if ! command -v xelatex >/dev/null 2>&1; then
  echo "xelatex is required for PDF output. Please install texlive-xetex (and Chinese fonts)." >&2
  exit 1
fi

EN_SOURCE_FILES=(
  "${ROOT_DIR}/docs/notes/system-installation.md"
  "${ROOT_DIR}/docs/notes/system-configuration.md"
  "${ROOT_DIR}/docs/notes/apps/system.md"
  "${ROOT_DIR}/docs/notes/apps/tool.md"
  "${ROOT_DIR}/docs/notes/apps/standard.md"
  "${ROOT_DIR}/docs/notes/apps/img-video-audio-edit.md"
  "${ROOT_DIR}/docs/notes/apps/development.md"
  "${ROOT_DIR}/docs/notes/apps/game.md"
  "${ROOT_DIR}/docs/notes/software-uninstallation.md"
  "${ROOT_DIR}/docs/notes/questions.md"
  "${ROOT_DIR}/docs/notes/bug.md"
  "${ROOT_DIR}/docs/notes/tips-tricks.md"
)

ZH_SOURCE_FILES=(
  "${ROOT_DIR}/docs/zh/notes/system-installation.md"
  "${ROOT_DIR}/docs/zh/notes/system-configuration.md"
  "${ROOT_DIR}/docs/zh/notes/apps/system.md"
  "${ROOT_DIR}/docs/zh/notes/apps/tool.md"
  "${ROOT_DIR}/docs/zh/notes/apps/standard.md"
  "${ROOT_DIR}/docs/zh/notes/apps/img-video-audio-edit.md"
  "${ROOT_DIR}/docs/zh/notes/apps/development.md"
  "${ROOT_DIR}/docs/zh/notes/apps/game.md"
  "${ROOT_DIR}/docs/zh/notes/software-uninstallation.md"
  "${ROOT_DIR}/docs/zh/notes/questions.md"
  "${ROOT_DIR}/docs/zh/notes/bug.md"
  "${ROOT_DIR}/docs/zh/notes/tips-tricks.md"
)

check_source_files() {
  local file
  for file in "$@"; do
    if [[ ! -f "${file}" ]]; then
      echo "Missing source file: ${file}" >&2
      exit 1
    fi
  done
}

build_book() {
  local basename="$1"
  local title="$2"
  local cjk_font="$3"
  shift 3
  local source_files=("$@")

  pandoc "${source_files[@]}" \
    --standalone \
    --toc \
    --metadata="title:${title}" \
    --metadata="author:duanluan" \
    --metadata="date:${VERSION//./-}" \
    --resource-path="${ROOT_DIR}/docs:${ROOT_DIR}/docs/notes:${ROOT_DIR}/docs/notes/assets:${ROOT_DIR}/docs/zh:${ROOT_DIR}/docs/zh/notes:${ROOT_DIR}/docs/zh/notes/assets" \
    --output "${OUTPUT_DIR}/${basename}.epub"

  pandoc "${source_files[@]}" \
    --standalone \
    --toc \
    --metadata="title:${title}" \
    --metadata="author:duanluan" \
    --metadata="date:${VERSION//./-}" \
    --resource-path="${ROOT_DIR}/docs:${ROOT_DIR}/docs/notes:${ROOT_DIR}/docs/notes/assets:${ROOT_DIR}/docs/zh:${ROOT_DIR}/docs/zh/notes:${ROOT_DIR}/docs/zh/notes/assets" \
    --pdf-engine=xelatex \
    -V "mainfont=Noto Serif" \
    -V "CJKmainfont=${cjk_font}" \
    -V "geometry:margin=1in" \
    --output "${OUTPUT_DIR}/${basename}.pdf"
}

check_source_files "${EN_SOURCE_FILES[@]}"
check_source_files "${ZH_SOURCE_FILES[@]}"

mkdir -p "${OUTPUT_DIR}"

build_book "${EN_OUTPUT_BASENAME}" "Linux Notes (Arch / Manjaro KDE)" "Noto Sans CJK SC" "${EN_SOURCE_FILES[@]}"
build_book "${ZH_OUTPUT_BASENAME}" "Linux 使用笔记（Arch Manjaro KDE）" "Noto Sans CJK SC" "${ZH_SOURCE_FILES[@]}"

echo "Built:"
echo "  ${OUTPUT_DIR}/${EN_OUTPUT_BASENAME}.epub"
echo "  ${OUTPUT_DIR}/${EN_OUTPUT_BASENAME}.pdf"
echo "  ${OUTPUT_DIR}/${ZH_OUTPUT_BASENAME}.epub"
echo "  ${OUTPUT_DIR}/${ZH_OUTPUT_BASENAME}.pdf"
