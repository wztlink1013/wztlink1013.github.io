---
title: git使用Token连接
categories: Environment
date: 2020-07-08 18:45:16
description: "git使用Token连接。GitHub，Coding，Gitee"
---

## 一、应用

多个终端使用，而且没必要配置 SSH 连接的情况，可以使用 GitHub Token 来连接使用。还有就是使用 GitHub Actions 时候用 Token 情况较 SSH 方便。

不同的托管平台使用语法会有差异，在此记录下 GitHub、Coding、Gitee 的使用

## 二、GitHub

GitHub 生成一个 Token：\*\*\*

使用 SSH 情况：`git clone [https://github.com/wztlink1013/blog3.0.git](https://github.com/wztlink1013/blog3.0.git)`

使用 Token 情况：`[https://x-access-token:**************@github.com/wztlink1013/blog3.0.git](https://x-access-token:**************@github.com/wztlink1013/blog3.0.git)`

## 三、Coding

在个人设置中设置一个访问令牌

- 令牌用户名：####
- 令牌 Token：\*

使用 SSH 情况：`[https://e.coding.net/wztlink1013/project/repo.git](https://e.coding.net/wztlink1013/project/repo.git)`
使用令牌情况：`[https://####:***********@e.coding.net/wztlink1013/project/repo.git](https://####:***********@e.coding.net/wztlink1013/project/repo.git)`

## 四、Gitee

头像设置中申请私人令牌：\*\*

使用 SSH 情况：`[https://gitee.com/user/repo.git](https://gitee.com/user/repo.git)`

使用 Token 情况：`[https://oauth2:**********@gitee.com/user/repo.git](https://oauth2:**********@gitee.com/user/repo.git)`

## 五、GitHub Actions 中的使用

```bash
Github_Pages:  github.com/wztlink1013/wztlink1013.github.io
Github_Token:  ${{  secrets.token_GithubAPI  }}

git  push  --force  --quiet  "https://${Github_Token}@${Github_Pages}"
```

```bash
Coding_Pages:  e.coding.net/wztlink1013/wztlink1013.git
Coding_Token:  ${{  secrets.token_CodingAPI  }}
Coding_Username:  ${{  secrets.Username_Coding  }}

git  push  --force  --quiet  "https://${Coding_Username}:${Coding_Token}@${Coding_Pages}"
```
