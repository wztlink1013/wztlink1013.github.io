---
title: 莱文斯坦距离(LD)问题
date: 2020-10-24 18:26:00
categories: Algorithm
description: 莱温斯坦举例问题
---

## 问题描述

**Levenshtein Distance**也称**莱文斯坦距离**

具体形式就是求一个字符串到另一个字符串所需要的**最少操作步数**，操作形式有：

- 替换字母
- 删除字母
- 插入字母

## 问题分析

利用动态规划思想，将其剖析为一个个子问题，用其子问题的解决方式来解决该问题。问题分解出来的子问题存在重叠的情况，这是区分分治算法的不同。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603615056984-36cbce7c-c55e-456a-bb90-eb18471167e0.png#align=left&display=inline&height=335&margin=%5Bobject%20Object%5D&name=image.png&originHeight=670&originWidth=1026&size=202356&status=done&style=shadow&width=513)

**莱文斯坦的公式化**表述为：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603614727015-dad259b0-7904-4e5d-9ec8-f4ac284af2e5.png#align=left&display=inline&height=94&margin=%5Bobject%20Object%5D&name=image.png&originHeight=188&originWidth=874&size=23400&status=done&style=shadow&width=437)

下面利用表格的形式来步步推出该字母所需要达到相应的目标字母序列的步数。

| |
| s | o | n |
| --- | --- | --- | --- | --- |
|
| 0 | 1 | 2 | 3 |
| s | 1 | 0 | 1 | 2 |
| u | 2 | 1 | 1 | 2 |
| n | 3 | 2 | 2 | 1 |

记横（son）为 i 字符串序列，纵（sun）为 j 字符串序列。需要完成的字符串变换为 i->j。现举例格子数值该怎么填：

当到了第三行第三列的那一格，需要完成 s->s，有三种情况可以选择

1. 左操作(i-1,j)：删除 s 字符然后插入 s 字符===操作步数两步
1. 上操作(i,j-1)：插入 s 字符然后删除 s 字符===操作步数两步
1. 左上操作(i-1,j-1)：替换步骤，因为这个元素相同，故===操作步数零部

然后选取上述三种情况最短步数的数值 0

然后再看第三行第四列，需要完成 so->s，

1. 左操作：删除 o===一步
1. 上操作：插入 s 删除 so===三步
1. 做上操作：替换 s 删除 o===两步

综上应该填 1

其他格子也一样以上述方法填写。

有个作业遗留问题，在 CAAIS 里面每个得出的值右上标的 `U`  `L`  `0`  `1`  这些的依次顺序是怎么个顺序？
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603615446981-23bea432-08ee-490a-9037-018ba6280c3b.png#align=left&display=inline&height=201&margin=%5Bobject%20Object%5D&name=image.png&originHeight=401&originWidth=651&size=49834&status=done&style=shadow&width=325.5)

## 代码实现

```cpp
#include <string>
#include <vector>
#include <algorithm>
#include<iostream>
#include<ctime>

const int LEN_NAME=100;

namespace NS_LSEditDist {
    using namespace std;
    void Initialization(const string &x, const string &y);
    int GetLSEditDist(const string &x, const string &y);
    void GetLSEdits(const string &x, const string &y);
    void Output(const string &x, const string &y, int OptD);
    void OutputE(const string &x, const string &y);
    void OutputP(const string &x, const string &y);
    static int m, n;
    static vector<vector<int>> E;
    static vector<vector<char>> P;
    static string xe, ye;
    void LSEditDistCaller(const string &x, const string &y)
    {
        Initialization(x, y);
        int OptD = GetLSEditDist(x, y);
        GetLSEdits(x, y);
        Output(x, y, OptD);
    }
    int GetLSEditDist(const string &x, const string &y)
    {
        for (int i = 1; i <= m; i++)
            for (int j = 1; j <= n; j++)
            {
                E[i][j] = min(E[i - 1][j] + 1,
                              min(E[i][j - 1] + 1,
                                  E[i - 1][j - 1] + (x[i - 1] != y[j - 1])));
                if (E[i][j] == E[i - 1][j] + 1)
                    P[i][j] = 'U';
                else if (E[i][j] == E[i][j - 1] + 1)
                    P[i][j] = 'L';
                else if (x[i - 1] != y[j - 1])
                    P[i][j] = '1';
            }
        return E[m][n];
    }
    void GetLSEdits(const string &x, const string &y)
    {
        int i = m, j = n;
        while (i > 0 || j > 0)
        {
            if (P[i][j] == '0' || P[i][j] == '1')
            {
                xe.insert(0, 1, x[i - 1]);
                ye.insert(0, 1, y[j - 1]);
                i--; j--;
            }
            else if (P[i][j] == 'U')
            {
                xe.insert(xe.begin(), x[i - 1]);
                ye.insert(ye.begin(), '-');
                i--;
            }
            else
            {
                xe.insert(xe.begin(), '-');
                ye.insert(ye.begin(), y[j - 1]);
                j--;
            }
        }
    }
    void Initialization(const string &x, const string &y)
    {
        m = x.length();
        n = y.length();
        E.clear();
        E.resize(m + 1, vector<int>(n + 1, 0));
        P.clear();
        P.resize(m + 1, vector<char>(n + 1, '0'));
        for (int j = 1; j <= n; j++)
        {
            E[0][j] = j;
            P[0][j] = 'L';
        }
        for (int i = 1; i <= m; i++)
        {
            E[i][0] = i;
            P[i][0] = 'U';
        }
        xe.clear();
        ye.clear();
    }
    void Output(const string &x, const string &y, int OptD)
    {
        printf("Levenshtein distance: \n");
        printf("Strings: %s, %s\n\n", x.c_str(), y.c_str());
        OutputE(x, y);
        OutputP(x, y);
        printf("Distance: %d\n", OptD);
        printf("Edited strings:\n");
        for (auto c : xe)
            printf("%2c", c);
        printf("\n");
        for (auto c : ye)
            printf("%2c", c);
        printf("\n\n");
    }
    void OutputE(const string &x, const string &y)
    {
        printf(" E  ");
        for (int j = 0; j < n; j++)
            printf("%2c", y[j]);
        printf("\n");
        for (int i = 0; i <= m; i++)
        {
            if (i == 0)
                printf("  ");
            else
                printf("%2c", x[i - 1]);
            for (int j = 0; j <= n; j++)
            {
                printf("%2d", E[i][j]);
            }
            printf("\n");
        }
        printf("\n");
    }
    void OutputP(const string &x, const string &y)
    {
        printf(" P  ");
        for (int j = 0; j < n; j++)
            printf("%2c", y[j]);
        printf("\n");
        for (int i = 0; i <= m; i++)
        {
            if (i == 0)
                printf("  ");
            else
                printf("%2c", x[i - 1]);
            for (int j = 0; j <= n; j++)
            {
                printf("%2c", P[i][j]);
            }
            printf("\n");
        }
        printf("\n");
    }
} //namespace NS_LSEditDist
char *rand_str(char *str,const int len)
{
    int i;
    for(i=0;i<len;++i)
        str[i]='a'+rand()%26;
    str[++i]='\0';
    return str;
}
using namespace NS_LSEditDist;
int main()
{
    vector<vector<string>> abs = {
            { "water", "wheat" },
            { "servant", "reveal" }
    };
    for (auto ab : abs)
    {
        string a = ab[0];
        string b = ab[1];
        LSEditDistCaller(a, b);
    }

    cout<<"两个100位字符串的LevenShtein距离："<<endl;

    srand(time(NULL));
    int i;
    char name[LEN_NAME+1];
    string x = rand_str(name,LEN_NAME);
    string y = rand_str(name,LEN_NAME);

    cout<<"字符串1："<<x<<endl;
    cout<<"字符串2："<<y<<endl;

    LSEditDistCaller(x, y);
}
```

## 参考资料

- [莱文斯坦距离](https://zh.wikipedia.org/wiki/%E8%90%8A%E6%96%87%E6%96%AF%E5%9D%A6%E8%B7%9D%E9%9B%A2)
- [理解 Levenshtein Distancee](https://www.dazhuanlan.com/2019/12/06/5dea0cb03281f/)
- [Levenshtein Distance（编辑距离）算法与使用场景](https://www.throwable.club/2020/03/08/learn-about-levenshtein-distance-algorithm/)
