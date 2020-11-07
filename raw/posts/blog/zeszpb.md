---
title: C++随机字符串生成函数
date: 2020-10-22 23:11:00
categories: Language
description: C++随机字符串生成函数
---

```cpp
//C++ 随机字符串生成函数
#include<iostream>
#include<ctime>
using namespace std;

const int LEN_NAME=4;

char *rand_str(char *str,const int len)
{
    int i;
    for(i=0;i<len;++i)
        str[i]='A'+rand()%26;
    str[++i]='\0';
    return str;
}

void main()
{
    srand(time(NULL));
    int i;
    char name[LEN_NAME+1];

    for(i=0;i<20;++i)
    {
        cout<<rand_str(name,LEN_NAME)<<endl;
    }
}
```
