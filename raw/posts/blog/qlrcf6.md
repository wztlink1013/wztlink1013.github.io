---
title: task_07_网络层
date: 2020-10-23 08:25:00
categories: 计算机网络
description: task_07_网络层
---

## 《计算机网络》自主学习任务学习单

2020 年 10 月 14 日，2020 年 10 月 21 日

| 课程介绍 | 第四章网络层                                          |
| -------- | ----------------------------------------------------- |
| 教学目标 | 1、理解网络层提供的服务特点，重点领会互联网设计理念。 |

2、熟练掌握 IP 地址及其表示方法。
3、理解地址解析协议 ARP 实现 IP 地址与物理地址的映射。
4、基于互联网设计理念理解 IP 数据报格式功能。
5、理解 IP 层分组转发流程，掌握路由表参数设置。
6、理解子网划分原理，熟练掌握网络规划应用问题 |
| 学习内容 |  
1、课下自主网上搜索观看中国大学 MOOC 教程《计算机网络》（哈尔滨工业大学）
（[https://www.icourse163.org/learn/HIT-154005?tid=1450314458#/learn/announce](https://www.icourse163.org/learn/HIT-154005?tid=1450314458#/learn/announce)）（自愿选择）
04 网络层
4.1 网络层服务
4.2 虚电路网络与数据报网络
4.3 IPv4 协议
2、学习重点：
  （1）虚电路服务与数据报服务特征。
（2）互连网络与虚拟互连网络概念区别
（3）五类 IP 编址及表示方法。
（4）地址解析协议 ARP 原理
（5）IP 的协议格式及 IP 的分片与重组机制。
（6）子网划分原理、子网掩码及网关基本概念
（7）IP 层分组转发算法。 |
| 课堂讨论 | 1、电信网络与互联网的服务差异性
2、互联网为什么不直接使用硬件地址进行通信？ |
| 课下作业 | 1、 ARP 攻击原理（1 班）。(PPT，10 月 18 日前提交）
2、 首部检验和原理（2 班）。（PPT，10 月 18 日前提交）
3、 学习网络协议分析工具 WireShark。（PPT，10 月 20 日前提交自主演示并析 ICMP、IP 报文结构）
**4、 编程实现命令 ping、traceroute 功能**

- 10 月 30 日晚上 9 点前提交 PPT
- 代码及编译程序（源代码必须提交，编译程序是指 EXE 文件，如果没有可以不提交，但是所提交的作业要能演示出要求实现的功能）
- 课上自主演示 3（课堂演示可以使用自己的电脑）
  |

## ping 和 tracert

### ping 和 tracert 命令

**ping**命令一般用来测试两台机器或者机器和服务器之间网络是否连通。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603437323252-a3bf1470-c4ae-450a-b0fd-4d83281aab46.png#align=left&display=inline&height=156&margin=%5Bobject%20Object%5D&name=image.png&originHeight=311&originWidth=1439&size=57273&status=done&style=shadow&width=719.5)
**tracert**命令显示数据报到达目标主机途中所经过的路径（路由器），并且显示到达每个节点（路由器）的花费时间，显示的信息比 ping 出来的信息要多，要详细。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1484158/1603437358485-aef50645-6ff9-4395-bbae-0bfe22ce3dc1.png#align=left&display=inline&height=269&margin=%5Bobject%20Object%5D&name=image.png&originHeight=538&originWidth=1436&size=63435&status=done&style=shadow&width=718)

### 编程实现

#### Code

```java
import java.net.InetAddress;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.UnknownHostException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import java.util.Scanner;

public class CommandUtil {

    String tracert = "tracert -h 10 "; //模拟tracert命令
    String ping = "ping";//模拟 ping 命令
    String routePrint = "route print -4";//模拟route print命令

    public static void main(String args[]){

        String input = null;

        @SuppressWarnings("resource")
        Scanner scanner = new Scanner(System.in);
        //利用while循环接收输入的命令行参数
        while(true){

            System.out.println("Please input destination server IP address ：\n");

            input = scanner.next();

            CommandUtil host = new CommandUtil();

            host.tracert = host.tracert + " " + input;

            host.ping = host.ping + " " + input;

            try {

                host.command(host.routePrint);

            } catch (IOException exception) {

                exception.printStackTrace();
            }

            try {

                host.command(host.tracert) ;

            } catch (IOException exception) {

                exception.printStackTrace();
            }

            try {

                host.command(host.ping);

            } catch (IOException exception) {

                exception.printStackTrace();
            }

            InetAddress ipAddress;

            try {

                ipAddress = InetAddress.getByName(input);

                System.out.println("IP address : "+ipAddress);

            } catch (UnknownHostException exception) {

                exception.printStackTrace();
            }

            URL url;

            try {
                url = new URL("http",input,80,"index.html");

                System.out.println();//输出服务器地址

                System.out.println("Get the Server-Name# : "+url.getHost());

                System.out.println();//输出首页文件

                System.out.println("Get the default file# : "+url.getFile());

                System.out.println();//输出首页协议和端口

                System.out.println("Get the protocol# : "+url.getProtocol()+" "+url.getPort());

                System.out.println();

            } catch (MalformedURLException e) {

                e.printStackTrace();
            }

            System.out.println();

            try {

                System.out.println("Get serverName & IPAddress："+InetAddress.getByName(input));

            } catch (UnknownHostException e) {

                e.printStackTrace();
            }

            long freeMemory = Runtime.getRuntime().freeMemory();

            System.out.println("Surplus memory of JVM: "+freeMemory+"B");

        }
    }
    //模拟 tracert 命令

    StringBuffer commandResult = null;

    private void command(String tracerCommand) throws IOException{
        //第一步：创建进程(是接口不必初始化)

        //1.通过Runtime类的getRuntime().exec()传入需要运行的命令参数

        System.out.println();

        System.out.println(InetAddress.getByName("localhost")+" is tracking the destination server...");

        Process process = Runtime.getRuntime().exec(tracerCommand);

        readResult(process.getInputStream());

        process.destroy();
    }
    //第二步：通过输入流来将命令执行结果输出到控制台

    private void readResult(InputStream inputStream) throws IOException{

        commandResult = new StringBuffer();  //初始化命令行

        String commandInfo = null; //定义用于接收命令行执行结果的字符串

        BufferedReader bufferedReader =
                new BufferedReader(new InputStreamReader(inputStream));

        while ( (commandInfo = bufferedReader.readLine()) != null)  {

            System.out.println(commandInfo);
        }
        bufferedReader.close();
    }
}
```

#### Result

```
D:\Java\jdk1.8.0_181\bin\java.exe "-javaagent:D:\JetBrains\IntelliJ IDEA 2020.1.3\lib\idea_rt.jar=39614:D:\JetBrains\IntelliJ IDEA 2020.1.3\bin" -Dfile.encoding=GBK -classpath D:\Java\jdk1.8.0_181\jre\lib\charsets.jar;D:\Java\jdk1.8.0_181\jre\lib\deploy.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\access-bridge-64.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\cldrdata.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\dnsns.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\jaccess.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\jfxrt.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\localedata.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\nashorn.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\sunec.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\sunjce_provider.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\sunmscapi.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\sunpkcs11.jar;D:\Java\jdk1.8.0_181\jre\lib\ext\zipfs.jar;D:\Java\jdk1.8.0_181\jre\lib\javaws.jar;D:\Java\jdk1.8.0_181\jre\lib\jce.jar;D:\Java\jdk1.8.0_181\jre\lib\jfr.jar;D:\Java\jdk1.8.0_181\jre\lib\jfxswt.jar;D:\Java\jdk1.8.0_181\jre\lib\jsse.jar;D:\Java\jdk1.8.0_181\jre\lib\management-agent.jar;D:\Java\jdk1.8.0_181\jre\lib\plugin.jar;D:\Java\jdk1.8.0_181\jre\lib\resources.jar;D:\Java\jdk1.8.0_181\jre\lib\rt.jar;D:\project-java\jiwang\out\production\jiwang CommandUtil
Please input destination server IP address ：

baidu.com

localhost/127.0.0.1 is tracking the destination server...
===========================================================================
接口列表
  6...b4 b6 86 df cc 9d ......Realtek PCIe GbE Family Controller
 11...0c 54 15 fb 33 95 ......Microsoft Wi-Fi Direct Virtual Adapter
 14...0e 54 15 fb 33 94 ......Microsoft Wi-Fi Direct Virtual Adapter #2
 16...0c 54 15 fb 33 94 ......Intel(R) Dual Band Wireless-AC 3168
 17...0c 54 15 fb 33 98 ......Bluetooth Device (Personal Area Network)
  1...........................Software Loopback Interface 1
===========================================================================

IPv4 路由表
===========================================================================
活动路由:
网络目标        网络掩码          网关       接口   跃点数
          0.0.0.0          0.0.0.0      192.168.2.1    192.168.2.132     35
        127.0.0.0        255.0.0.0            在链路上         127.0.0.1    331
        127.0.0.1  255.255.255.255            在链路上         127.0.0.1    331
  127.255.255.255  255.255.255.255            在链路上         127.0.0.1    331
      192.168.2.0    255.255.255.0            在链路上     192.168.2.132    291
    192.168.2.132  255.255.255.255            在链路上     192.168.2.132    291
    192.168.2.255  255.255.255.255            在链路上     192.168.2.132    291
        224.0.0.0        240.0.0.0            在链路上         127.0.0.1    331
        224.0.0.0        240.0.0.0            在链路上     192.168.2.132    291
  255.255.255.255  255.255.255.255            在链路上         127.0.0.1    331
  255.255.255.255  255.255.255.255            在链路上     192.168.2.132    291
===========================================================================
永久路由:
  无

localhost/127.0.0.1 is tracking the destination server...

通过最多 10 个跃点跟踪
到 baidu.com [39.156.69.79] 的路由:

  1     1 ms     1 ms     1 ms  RM2100.lan [192.168.2.1]
  2     *        *        *     请求超时。
  3     *        *        *     请求超时。
  4     4 ms     3 ms     3 ms  192.168.100.253
  5     4 ms     5 ms    10 ms  192.168.100.114
  6     3 ms     3 ms     3 ms  192.168.100.118
  7     *        *        *     请求超时。
  8     *        *        *     请求超时。
  9     *        *        *     请求超时。
 10     *        *        *     请求超时。

跟踪完成。

localhost/127.0.0.1 is tracking the destination server...

正在 Ping baidu.com [39.156.69.79] 具有 32 字节的数据:
来自 39.156.69.79 的回复: 字节=32 时间=20ms TTL=48
来自 39.156.69.79 的回复: 字节=32 时间=20ms TTL=48
来自 39.156.69.79 的回复: 字节=32 时间=20ms TTL=48
来自 39.156.69.79 的回复: 字节=32 时间=20ms TTL=48

39.156.69.79 的 Ping 统计信息:
    数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
往返行程的估计时间(以毫秒为单位):
    最短 = 20ms，最长 = 20ms，平均 = 20ms
IP address : baidu.com/39.156.69.79

Get the Server-Name# : baidu.com

Get the default file# : index.html

Get the protocol# : http 80


Get serverName & IPAddress：baidu.com/39.156.69.79
Surplus memory of JVM: 124194640B
```
