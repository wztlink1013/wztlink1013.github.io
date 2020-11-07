---
title: 20. 有效的括号
categories: DataStructure
date: 2020-09-06 16:43:29
description: 20. 有效的括号
---

## 问题思路

将所有的左半边括号 push 到栈内，然后遇到右半边括号，就将其与栈顶元素匹配测试，若能匹配成功则继续匹配，反之输出 false。
在这之间注意比较当栈内没有元素了，而字符串还有待匹配的字符，输出 false，当栈内还有元素，外面与之匹配测试的右半边括号，也输出 false。

## 代码实现

### 栈实现

```java
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        int len = s.length();
        for (int i=0;i<len;i++) {
            char c = s.charAt(i);
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char left = stack.pop();
                if (left == '(' && c !=')') return false;
                if (left == '[' && c !=']') return false;
                if (left == '{' && c !='}') return false;
            }
        }
        return stack.isEmpty();
    }
}
```

### HashMap 实现

```java
class Solution {
	private static HashMap<Character, Character> map = new HashMap<>();
	static {
		// key - value
		map.put('(', ')');
		map.put('{', '}');
		map.put('[', ']');
	}

	public boolean isValid(String s) {
		Stack<Character> stack = new Stack<>();

		int len = s.length();
		for (int i = 0; i < len; i++) {
			char c = s.charAt(i);
			if (map.containsKey(c)) { // 左括号
				stack.push(c);
			} else { // 右括号
				if (stack.isEmpty()) return false;

				if (c != map.get(stack.pop())) return false;
			}
		}
		return stack.isEmpty();
    }
}
```
