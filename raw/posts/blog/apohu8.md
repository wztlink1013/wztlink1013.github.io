---
title: ANN神经网络
categories: MachingLearning
date: 2020-03-23 17:19:51
description: "神经网络（2020.03.23信息系统项目实践课）"
---

## 一、基本结构

> 神经网络基本结构
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685949882-81dbb96c-eafa-4294-aae3-242fd33fff2b.png#align=left&display=inline&height=324&margin=%5Bobject%20Object%5D&originHeight=324&originWidth=858&size=0&status=done&style=none&width=858) > ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685950067-4d0671d6-b294-4284-9eff-9409d230e91e.png#align=left&display=inline&height=470&margin=%5Bobject%20Object%5D&originHeight=470&originWidth=768&size=0&status=done&style=none&width=768)

> 何为深度学习？
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685949953-b8d95ff1-6384-4e59-b3d6-1f8151f08204.png#align=left&display=inline&height=400&margin=%5Bobject%20Object%5D&originHeight=400&originWidth=842&size=0&status=done&style=none&width=842)

## 二、感知器和激活函数

> 感知器
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685949922-e9c76c57-f1c5-4ff1-af82-25c35a4005b1.png#align=left&display=inline&height=514&margin=%5Bobject%20Object%5D&originHeight=514&originWidth=802&size=0&status=done&style=none&width=802)

> 激活函数（其中 w 和 x 为向量点乘；b 为偏置，w0）
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685949961-18eeecb5-c82e-4f71-a543-9bd0c0f27043.png#align=left&display=inline&height=511&margin=%5Bobject%20Object%5D&originHeight=511&originWidth=836&size=0&status=done&style=none&width=836)

> 激活函数的选择
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685950003-072268a5-122d-4340-85d5-85eeb04236fe.png#align=left&display=inline&height=538&margin=%5Bobject%20Object%5D&originHeight=538&originWidth=861&size=0&status=done&style=none&width=861)

## 三、感知器的训练

![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685950698-fc03bb22-76e6-4328-9a6b-ee2168250fec.png#align=left&display=inline&height=529&margin=%5Bobject%20Object%5D&originHeight=529&originWidth=872&size=0&status=done&style=none&width=872)

## 四、简单代码实现

```python
from functools import reduce

class Perceptron(object):
    '''
    构造函数的初始化
    '''
    def __init__(self,input_num,activator):
        '''
        构造函数的初始化
        '''
        self.activator = activator
        self.weights = [0.0 for _ in range(input_num)]
        self.bias = 0.0
    def __str__(self):
        '''
        打印学习后的权重值和偏置项
        '''
        return 'weights\t:%s\nbias\t:%f\n' %(self.weights,self.bias)
    def predict(self,input_vec):
        '''
        输入向量，输出感知器的计算结果
        '''
        return self.activator(
            reduce(lambda a,b: a+b,
                    list(map(lambda x,w: x*w,
                        input_vec,self.weights)
                 ),0.0)+self.bias)
    def train(self,input_vecs,labels,iteration,rate):
        '''
        输入训练数据：一组向量、与每个向量对应的label；以及训练轮数、学习率
        '''
        for i in range(iteration):
            self._one_iteration(input_vecs,labels,rate)
    def _one_iteration(self,input_vecs,labels,rate):
        '''
        迭代，把所有的训练数据过一遍
        '''
        samples = zip(input_vecs,labels)
        for (input_vec,label) in samples:
            output = self.predict(input_vec)
            self._update_weights(input_vec,output,label,rate)
    def _update_weights(self,input_vec,output,label,rate):
        '''
        按照感知器规则更新权重
        '''
        delta = label - output
        self.weights = map(
            lambda x, w:w+rate*delta*x,
            input_vec,self.weights)
        self.weights = list(self.weights)
        self.bias += rate*delta
def f(x):
    '''
    定义激活函数
    '''
    return 1 if x>0 else 0
def get_training_dataset():
    '''
    训练数据
    '''
    input_vecs = [[1,1],[0,0],[1,0],[0,1]]
    labels = [1,0,0,0]
    return input_vecs,labels
def train_and_perceptron():
    '''
    训练感知器
    '''
    p = Perceptron(2,f)
    input_vecs,labels = get_training_dataset()
    p.train(input_vecs,labels,10,0.1)
    return p

if __name__ == '__main__':
    and_perception = train_and_perceptron()
    print(and_perception)
    print('1 and 1 = %d' % and_perception.predict([1,1]))
    print('0 and 0 = %d' % and_perception.predict([0,0]))
    print('1 and 0 = %d' % and_perception.predict([1,0]))
    print('0 and 1 = %d' % and_perception.predict([0,1]))
```

> 运行结果：
> ![](https://cdn.nlark.com/yuque/0/2020/png/1484158/1598685949806-ba54dca5-89a6-474a-809c-0b0238184755.png#align=left&display=inline&height=261&margin=%5Bobject%20Object%5D&originHeight=261&originWidth=536&size=0&status=done&style=none&width=536)
