---
title: GitHub Actions代码汇总
date: 2020-08-17 10:28:00
categories: Hexo
description: GitHub Actions代码汇总
---

## website-source

> ~~目的：做好 StackEdit 的文件备份工作，将 master 分支下的写文章的文件夹备份到该分支写的 backup 备份文件夹里面。~~

```bash
name: CI
on: [watch]
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
        git clone https://${Github_Token}@github.com/wztlink1013/website-source website-source
        cd website-source
        cp -r ./Secret文集/ ./backup/
        git status
        git add .
        git commit -m "backup"
        git push --force --quiet "https://${Github_Token}@github.com/wztlink1013/website-source"  master:master
```
