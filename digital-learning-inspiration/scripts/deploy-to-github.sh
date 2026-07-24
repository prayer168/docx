#!/usr/bin/env bash
# ============================================================
# deploy-to-github.sh — 將本網站部署到你自己的 GitHub 儲存庫
# 《數位教材設計靈感大全》
#
# 用途：
#   把「本資料夾的內容」（index.html 位於根目錄）推送到一個新的
#   GitHub 儲存庫，之後於 Settings → Pages 啟用即可發布。
#
# 前置：
#   1. 先在 GitHub 建立一個「空的」公開儲存庫（不要勾選 README/.gitignore），
#      例如：digital-learning-inspiration-site
#   2. 本機已安裝 git 並登入（gh auth 或 https 憑證皆可）。
#
# 使用：
#   在本資料夾（含 index.html）中執行：
#     bash scripts/deploy-to-github.sh <你的帳號> <儲存庫名稱>
#   範例：
#     bash scripts/deploy-to-github.sh prayer168 digital-learning-inspiration-site
# ============================================================
set -e

OWNER="${1:?請提供 GitHub 帳號，例如：prayer168}"
REPO="${2:?請提供儲存庫名稱，例如：digital-learning-inspiration-site}"
BRANCH="${3:-main}"

# 必須在含 index.html 的目錄執行
if [ ! -f "index.html" ]; then
  echo "✗ 找不到 index.html。請在專案根目錄（含 index.html）執行本腳本。" >&2
  exit 1
fi

echo "→ 準備部署 ${OWNER}/${REPO}（分支 ${BRANCH}）"

# 若尚未是 git 倉庫則初始化（使用獨立的部署倉庫，不影響原專案）
if [ ! -d ".git" ]; then
  git init
fi

git add -A
git commit -m "Deploy 數位教材設計靈感大全" || echo "（沒有新變更可提交）"
git branch -M "${BRANCH}"

# 設定 remote（若已存在則更新）
if git remote | grep -q "^origin$"; then
  git remote set-url origin "https://github.com/${OWNER}/${REPO}.git"
else
  git remote add origin "https://github.com/${OWNER}/${REPO}.git"
fi

git push -u origin "${BRANCH}"

echo ""
echo "✓ 已推送到 https://github.com/${OWNER}/${REPO}"
echo "→ 最後一步：到 GitHub 該儲存庫 Settings → Pages，"
echo "  Source 選 'Deploy from a branch'，Branch 選 '${BRANCH}' + '/ (root)'，儲存。"
echo "  稍候即可於 https://${OWNER}.github.io/${REPO}/ 瀏覽。"
