#!/usr/bin/env python3
"""依改動的檔案路徑判斷 PR 風險等級（low / medium / high）。
用法：git diff --name-only origin/main...HEAD | python3 risk_tier.py
"""
import sys, fnmatch

HIGH = [".github/workflows/*", "src/billing/*", "src/auth/*", "scripts/release/*", "installer/*"]
MEDIUM = ["src/*", "lib/*", "src/cache/*", "prompts/*"]
LOW = ["docs/*", "*.md", "locales/*"]

def tier(path):
    if any(fnmatch.fnmatch(path, p) for p in HIGH):
        return "high"
    if any(fnmatch.fnmatch(path, p) for p in LOW):
        return "low"
    if any(fnmatch.fnmatch(path, p) for p in MEDIUM):
        return "medium"
    return "medium"  # 不認得的路徑，保守當成中風險

order = {"low": 0, "medium": 1, "high": 2}
files = [l.strip() for l in sys.stdin if l.strip()]
result = max((tier(f) for f in files), key=order.get, default="low")
need = {"low": 0, "medium": 1, "high": 2}[result]
for f in files:
    print(f"{tier(f):6}  {f}")
print(f"\n整個 PR 的風險等級：{result}，需要 {need} 位人工核准")
