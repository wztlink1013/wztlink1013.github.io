---
title: GitHub-CICD不同文件夹迁移
categories: Environment
date: 2020-08-14 15:05:30
description: "利用GitHubActions来实现不同仓库的不同文件夹的迁移"
---

## 一、思路

- 仓库一：wztlink1013.github.io【master】
- 仓库二：test【gh-pages】

将 test 仓库下 gh-pages 分支下的所有文件复制到文件夹 test，将 wztlink1013.github.io 仓库下 clone 到文件夹 wztlink1013.github.io 中，进入 wztlink1013.github.io 文件夹，然后通过命令将 test 文件夹复制到 wztlink1013 文件夹中，最后 push 到 wztlink1013.github.io 仓库中。

## 二、编写脚本

```bash
git config --global user.name 'wztlink1013'
git config --global user.email '2550374815@qq.com'
git clone https://github.com/wztlink1013/test.git
git clone https://github.com/wztlink1013/wztlink1013.github.io.git
```

```shell
cd wztlink1013.github.io
mkdir test
cd ..
xcopy .\test .\wztlink1013.github.io /e
```

```bash
cd wztlink1013.github.io
git status
git add .
git commit -m "add gh-pages files"
git push "https://${Github_Token}@github.com/wztlink1013/wztlink1013.github.io"  master:master
```

## 三、编写 GitHub Actions

```yaml
name: CI for wztlink1013.github.io

on: [push, watch]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: 配置Git
        run: |
          git config --global user.name 'wztlink1013' 
          git config --global user.email '2550374815@qq.com'
      - name: 在云端进行复制文件夹操作
        env:
          Github_Token: ${{ secrets.TOKEN_GITHUBAPI }}
        run: |
          git clone https://github.com/wztlink1013/visualization visualization
          git clone https://github.com/wztlink1013/wztlink1013.github.io .github_pages
          cd visualization
          rm -r .git
          rm -r .github
          cd ..
          cd .github_pages
          rm -r visualization
          cd ..
          mv visualization/ -f .github_pages/
          cd .github_pages
          git status
          git add .
          git commit -m "add gh-pages files"
          git push --force --quiet "https://${Github_Token}@github.com/wztlink1013/wztlink1013.github.io"  master:master
```
