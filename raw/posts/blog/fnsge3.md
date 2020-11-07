---
title: "git常见使用总结"
categories: [Environment]
date: "2020-04-06 20:19:02"
thumbnail: "https://cdn.jsdelivr.net/gh/wztlink1013/figure/blogarticle43/qeqweqweqweqwrfewgehtnehnb.png"
description: "git使用总结"
---

## 一、Git 安装和本地用户全局配置

官网[下载](https://git-scm.com/download/win)并且安装

查看是否安装成功`win + R`输入 git，出现 git 命令指南，则安装成功

**全局配置本地用户**，在 git Bash 中进行下面配置（尽量仔细，检查一遍），下面的账号名字和邮箱都是 github 的账号所使用的

```
git config --global user.name "wztlink1013"
git config --global user.email "2550374815@qq.com"
```

其中：global 表示全局可用，如果要设置局部可用，则只需要删除 global 即可

验证是否配置成功：`git config --global --list`

## 二、利用 SSH 绑定 Git 和 GitHub

### 生成

输入`ssh-keygen -t rsa`，然后回车三下 ~~（有些时候要回车四下）~~

然后在用户管理员文件夹下生成两个文件夹 id_rsa 和 id_rsa.pub,将后者内容添加到 GitHub 上即可。

### 添加

在 github 上的 setting 上添加新的 ssh 即可

### 验证

在 git Bash 输入：`ssh -T git@github.com`

- 如果出现 Hi name !you are……证明绑定成功。
- 如果报错，则是因为少了一个文件，使用过程中直接点 yes。具体[解决原理](https://blog.csdn.net/qq_34446663/article/details/81106018)

## 三、Git 向 GitHub 提交代码

了解 pull 和 push

`git push origin master`

`git pull origin master`

### 提交情况 1：clone

本地没有 git 仓库，也没有 git init 操作，需要先从 GitHub 下载

选定仓库克隆

> git clone [https://github.com/wztlink1013/Python_DataAnalysis.git](https://github.com/wztlink1013/Python_DataAnalysis.git)

对本地文件夹进行一系列更改之后，执行命令：

```
git status   #查看仓库命令状态
git add .    #文件提交到文件缓冲区
git commmit -m "描述本次修改信息"    #提交仓库并且添加提交信息
git log  #查看修改日志
git status   #再次查看
```

push 到远程仓库

> 首次推送：`git push -u origin master`
> 非首次推送：`git push origin master`

### 提交情况 2：pull

这种情况是，本地有 git 仓库，指之前已经进行 git init 等一系列命令对该文件夹操作过。新建一个例子：

> `git init`初始化本地仓库
> `git remote add origin [https://github.com/guobinhit/springmvc-tutorial.git](https://github.com/guobinhit/springmvc-tutorial.git)`关联远程仓库
> `git pull origin master`同步远程仓库和本地仓库

假如在本地新加文件：

> 执行 git status 等命令
> 再执行`git push origin master`将本地新内容提交到远程仓库

**注意！**：在进行本地仓库和远程仓库的文件交互时，一定要先 pull 再 push，不然会出未知错误。

## 四、常用命令总结

### 常规命令

```
git init
git status
git add
git commit
git log
git branch   #查看分支
git checkout    #切换分支
git merge   #合并分支
git branch -d   #删除分支
git tag #给分支添加标签
git remote -v   #查看相关信息
```

### git push -f

报错信息

```bash
$ git push origin master
To https://github.com/wztlink1013/website-source.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/wztlink1013/website-source.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

分析并解决问题

> 强制性 push

```bash
$ git push -f origin master
```

### 文件夹相关命令

> 复制文件夹

```bash
cp  -r  ./js/  ./backup/
```

> 移动文件夹

```bash
mv  visualization/  -f  .github_pages/
```

> 删除文件夹

```bash
rm  -r  .git
```

## 五、部署多个 github/+coding 等账号

### 思路

好处：一台设备可以使用多个 github 账号/github+coding 等等多平台托管/搭建两个静态博客

取消全局用户配置（每建立一个新文件夹，需要输入使用账号），建立多个 ssh 密匙（如果是 github 账号+coding 账号+gitee 账号等）

SSH 的公钥是 GitHub 连接本地仓库和远程仓库的标识，一个公钥只能对应一个 GitHub 账户，一个相同的公钥不能上传到不同的 GitHub 账户

一台电脑，可以生成多对公私钥，可以通过配置，将不同的公钥上传到不同的 GitHub 账号，那么就不存在单个公钥绑定多个 GitHub 账号的情况存在了

### 多密匙生成

- 先进来该文件夹（忽略图片上写的字）
  ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1597632490897-11718be6-6492-4ead-a739-1c92af25c648.png#align=left&display=inline&height=372&margin=%5Bobject%20Object%5D&originHeight=372&originWidth=1215&size=0&status=done&style=none&width=1215)
- 创建新密匙方法一（首选）

`ssh-keygen -t rsa -f ~/.ssh/这里是新密钥名称 -C "这里是你的邮箱"`

注意区别新密钥名称和旧密钥名称，不要相同！！

- 创建新密匙方法二

输入这个：`ssh-keygen -t rsa -C "这里是你的邮箱"`

出现这两句：
`Generating public/private rsa key pair.`

`Enter file in which to save the key (/c/Users/you/.ssh/id_rsa):`

注意此时需要你输入新密钥的名称，同样要注意区别新密钥名称和旧密钥名称，不要相同，之后再两次回车。

### 配置 config

.ssh 根文件夹下没有 config 文件，需要新建

- 新建 config 文件方法一

在.ssh 根路径下键入该命令`touch config`

- 新建 config 文件方法二

记事本新建文件 config 文件！！没有后缀

- 输入内容

```
#第一个账号，默认使用的账号，不用做任何更改
Host github.com
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa

#第二个新账号，#"xxxxxx"为前缀名，可以任意设置，要记住，后面需要用到
Host xxxxxx.github.com
	HostName github.com
	User git
	IdentityFile ~/.ssh/这里是你创建的新密钥的名称
```

```
# one(one@gmail.com)
Host one.github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_one
User one

# two(two@gmail.com)
Host two.github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_two
User two
```

```
Host myhost（这里是自定义的host简称，以后连接远程服务器就可以用命令ssh myhost）
HostName 主机名可用ip也可以是域名(如:github.com或者bitbucket.org)
Port 服务器open-ssh端口（默认：22,默认时一般不写此行）
PreferredAuthentications   配置登录时用什么权限认证--可设为publickey,password publickey,keyboard-interactive等
IdentityFile 证书文件路径（如~/.ssh/id_rsa_*)
User 登录用户名(如：git)
```

每个账号单独配置一个 Host，每个 Host 要取一个别名，一般为每个 Host 主要配置 HostName 和 IdentityFile 两个属性，配置完保存即可。

Host 的名字可以自定义名字，不过这个会影响 git 相关命令，例如：Host mygithub 这样定义的话，使用命令 git clone git@mygithub:PopFisher/AndroidRotateAnim.git，git@后面紧跟的名字改为 mygithub

> **mine** > ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1597632490639-fd51b09d-c037-4fdb-bad3-e2e1d56d7aed.png#align=left&display=inline&height=637&margin=%5Bobject%20Object%5D&originHeight=637&originWidth=999&size=0&status=done&style=none&width=999)

### 部署 SSH key

将根文件夹下的`wztlink1013.pub`文件复制到 github 上，coding/gitee 类似

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1597632490332-674f64ec-d09e-4351-a3cd-dbebc15a3a32.png#align=left&display=inline&height=872&margin=%5Bobject%20Object%5D&originHeight=872&originWidth=1839&size=0&status=done&style=none&width=1839)
title 可以随便填

### 清缓存，添 agent

在根目录下

```
ssh-add -D
ssh-add xxxxxx #旧密钥名称，一般是id_rsa
ssh-add xxxxxx #新创建的密钥名称
```

如果执行以上命令出现错误：`Could not open a connection to your authentication agent.`，那么就需要先执行`ssh-agent bash`，再执行以上命令

### 验证是否配置成功

一下第一个是之前默认的 github 账号，默认即可，第二个是添加的

```
ssh -T git@github.com
ssh -T git@xxxxxxx.github.com
```

出现`Hi 你的用户名! You've successfully authenticated, but GitHub does not provide shell access.`则成功。

### 使用

- 取消全局用户名和邮箱配置（如果已经设置了全局的话）

```
git config --global --unset user.name
git config --global --unset user.email
```

- clone

原来：`git clone git@github.com: wztlink1013/learngit.git`

现在：

```
git clone git@wztlink1013.github.com: wztlink1013/learngit.git
git clone git@twicename.github.com: twicename/learngit.git
```

- 单独为每个 repo 设置 用户名/邮箱【以文件夹为单位】

```
git config user.name "wztlink1013"
git config user.email "2550374815@qq.com"

git config user.name "twicename"
git config user.email "123456789@qq.com"
```

如果报错：`fatal: not in a git directory`，说明没有进入.git 目录下，具体路径：其中.git 目录是隐藏的，需要你设置隐藏目录可见
![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1597632490310-1580343b-946c-4d67-a063-d5cd11bc6136.png#align=left&display=inline&height=105&margin=%5Bobject%20Object%5D&originHeight=105&originWidth=925&size=0&status=done&style=none&width=925)

执行`git config --list`查看设置是否成功

## 六、参考资料

- [GitHub 简单使用 https://github.com/guobinhit/cg-blog/blob/master/articles/github/README.md](https://github.com/guobinhit/cg-blog/blob/master/articles/github/README.md)
- [多账号 https://www.itrhx.com/2019/01/18/A16-deploy-two-or-more-hexo-blogs/](https://www.itrhx.com/2019/01/18/A16-deploy-two-or-more-hexo-blogs/)
- [多账号 https://blog.csdn.net/u013716535/article/details/78621775](https://blog.csdn.net/u013716535/article/details/78621775)
- [多账号 https://blog.csdn.net/IT_xiao_bai/article/details/88563103?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task](https://blog.csdn.net/IT_xiao_bai/article/details/88563103?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task)
