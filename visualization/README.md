# visualization
DataStructures and Algorithms visualization 

https://wztlink1013.com/visualization/index.html


### GitHub Actions Code

```yaml

name: CI for wztlink1013.github.io

on: [push, watch]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Set up git
      run: | 
        git config --global user.name 'wztlink1013' 
        git config --global user.email '2550374815@qq.com'
    - name: deal with forder
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
