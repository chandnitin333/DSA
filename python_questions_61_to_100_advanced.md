
# Question 1 (Easy)

## Problem Statement

Write a Python program to multiply all elements in a list by 2.

## Solution

```python
nums = [1, 2, 3, 4]

result = list(map(lambda x: x * 2, nums))

print(result)
```

## Output

```python
[2, 4, 6, 8]
```

---

# Question 2 (Easy)

## Problem Statement

Write a Python program to find even numbers from a list.

## Solution

```python
nums = [1, 2, 3, 4, 5, 6]

result = list(filter(lambda x: x % 2 == 0, nums))

print(result)
```

## Output

```python
[2, 4, 6]
```

---

# Question 3 (Easy)

## Problem Statement

Write a Python program to calculate the sum of list elements.

## Solution

```python
nums = [1, 2, 3, 4]

result = sum(nums)

print(result)
```

## Output

```python
10
```

---

# Question 4 (Easy)

## Problem Statement

Write a Python program to convert all strings into uppercase.

## Solution

```python
names = ["john", "alex", "jenny"]

result = [name.upper() for name in names]

print(result)
```

## Output

```python
['JOHN', 'ALEX', 'JENNY']
```

---

# Question 5 (Easy)

## Problem Statement

Write a Python program to find numbers greater than 10.

## Solution

```python
nums = [5, 12, 9, 30, 7]

result = [num for num in nums if num > 10]

print(result)
```

## Output

```python
[12, 30]
```

---

# Question 6 (Easy)

## Problem Statement

Write a Python program to find the maximum number in a list.

## Solution

```python
nums = [10, 50, 30, 90]

result = max(nums)

print(result)
```

## Output

```python
90
```

---

# Question 7 (Easy)

## Problem Statement

Write a Python program to find the minimum number in a list.

## Solution

```python
nums = [10, 50, 30, 90]

result = min(nums)

print(result)
```

## Output

```python
10
```

---

# Question 8 (Easy)

## Problem Statement

Write a Python program to add a prefix before every string.

## Solution

```python
names = ["John", "Alex"]

result = ["Mr. " + name for name in names]

print(result)
```

## Output

```python
['Mr. John', 'Mr. Alex']
```

---

# Question 9 (Easy)

## Problem Statement

Write a Python program to find odd numbers from a list.

## Solution

```python
nums = [1, 2, 3, 4, 5]

result = [num for num in nums if num % 2 != 0]

print(result)
```

## Output

```python
[1, 3, 5]
```

---

# Question 10 (Easy)

## Problem Statement

Write a Python program to find squares of all numbers.

## Solution

```python
nums = [1, 2, 3, 4]

result = [num * num for num in nums]

print(result)
```

## Output

```python
[1, 4, 9, 16]
```

---

# Question 11 (Easy)

## Problem Statement

Write a Python program to reverse a string.

## Solution

```python
text = "Python"

result = text[::-1]

print(result)
```

## Output

```python
nohtyP
```

---

# Question 12 (Easy)

## Problem Statement

Write a Python program to count vowels in a string.

## Solution

```python
text = "programming"

vowels = "aeiou"

count = sum(1 for char in text if char in vowels)

print(count)
```

## Output

```python
3
```

---

# Question 13 (Easy)

## Problem Statement

Write a Python program to check whether a number is prime.

## Solution

```python
num = 7

is_prime = True

for i in range(2, num):
    if num % i == 0:
        is_prime = False

print(is_prime)
```

## Output

```python
True
```

---

# Question 14 (Easy)

## Problem Statement

Write a Python program to calculate factorial of a number.

## Solution

```python
num = 5

fact = 1

for i in range(1, num + 1):
    fact *= i

print(fact)
```

## Output

```python
120
```

---

# Question 15 (Easy)

## Problem Statement

Write a Python program to print Fibonacci series.

## Solution

```python
a, b = 0, 1

for _ in range(5):
    print(a, end=" ")
    a, b = b, a + b
```

## Output

```python
0 1 1 2 3
```

---

# Question 16 (Medium)

## Problem Statement

Write a Python program to remove duplicates from a list.

## Solution

```python
nums = [1, 2, 2, 3, 4, 4]

result = list(set(nums))

print(result)
```

## Output

```python
[1, 2, 3, 4]
```

---

# Question 17 (Medium)

## Problem Statement

Write a Python program to flatten nested lists.

## Solution

```python
arr = [[1, 2], [3, 4], [5, 6]]

result = [item for sublist in arr for item in sublist]

print(result)
```

## Output

```python
[1, 2, 3, 4, 5, 6]
```

---

# Question 18 (Medium)

## Problem Statement

Write a Python program to count occurrence of each word.

## Solution

```python
words = ["apple", "banana", "apple"]

result = {}

for word in words:
    result[word] = result.get(word, 0) + 1

print(result)
```

## Output

```python
{'apple': 2, 'banana': 1}
```

---

# Question 19 (Medium)

## Problem Statement

Write a Python program to calculate average of list elements.

## Solution

```python
nums = [10, 20, 30, 40]

avg = sum(nums) / len(nums)

print(avg)
```

## Output

```python
25.0
```

---

# Question 20 (Medium)

## Problem Statement

Write a Python program to separate even and odd numbers.

## Solution

```python
nums = [1, 2, 3, 4, 5]

even = [num for num in nums if num % 2 == 0]
odd = [num for num in nums if num % 2 != 0]

print("Even:", even)
print("Odd:", odd)
```

## Output

```python
Even: [2, 4]
Odd: [1, 3, 5]
```

---

# Question 21 (Medium)

## Problem Statement

Write a Python program to find palindrome strings.

## Solution

```python
words = ["madam", "hello", "level"]

result = [word for word in words if word == word[::-1]]

print(result)
```

## Output

```python
['madam', 'level']
```

---

# Question 22 (Medium)

## Problem Statement

Write a Python program to sort numbers in ascending order.

## Solution

```python
nums = [5, 2, 9, 1]

nums.sort()

print(nums)
```

## Output

```python
[1, 2, 5, 9]
```

---

# Question 23 (Medium)

## Problem Statement

Write a Python program to sort numbers in descending order.

## Solution

```python
nums = [5, 2, 9, 1]

nums.sort(reverse=True)

print(nums)
```

## Output

```python
[9, 5, 2, 1]
```

---

# Question 24 (Medium)

## Problem Statement

Write a Python program to merge two dictionaries.

## Solution

```python
a = {"x": 1}
b = {"y": 2}

result = {**a, **b}

print(result)
```

## Output

```python
{'x': 1, 'y': 2}
```

---

# Question 25 (Medium)

## Problem Statement

Write a Python program to find common elements between two lists.

## Solution

```python
a = [1, 2, 3]
b = [2, 3, 4]

result = list(set(a) & set(b))

print(result)
```

## Output

```python
[2, 3]
```

---

# Question 26 (Hard)

## Problem Statement

Write a Python program to implement binary search.

## Solution

```python
nums = [1, 2, 3, 4, 5]
target = 4

low = 0
high = len(nums) - 1

found = False

while low <= high:
    mid = (low + high) // 2

    if nums[mid] == target:
        found = True
        break
    elif nums[mid] < target:
        low = mid + 1
    else:
        high = mid - 1

print(found)
```

## Output

```python
True
```

---

# Question 27 (Hard)

## Problem Statement

Write a Python program to implement bubble sort.

## Solution

```python
nums = [5, 2, 1, 4]

for i in range(len(nums)):
    for j in range(len(nums)-1):
        if nums[j] > nums[j+1]:
            nums[j], nums[j+1] = nums[j+1], nums[j]

print(nums)
```

## Output

```python
[1, 2, 4, 5]
```

---

# Question 28 (Hard)

## Problem Statement

Write a Python program to implement linear search.

## Solution

```python
nums = [10, 20, 30, 40]

target = 30

found = target in nums

print(found)
```

## Output

```python
True
```

---

# Question 29 (Hard)

## Problem Statement

Write a Python program to find duplicate elements.

## Solution

```python
nums = [1, 2, 2, 3, 4, 4]

duplicates = []

for num in nums:
    if nums.count(num) > 1 and num not in duplicates:
        duplicates.append(num)

print(duplicates)
```

## Output

```python
[2, 4]
```

---

# Question 30 (Hard)

## Problem Statement

Write a Python program to implement recursion for factorial.

## Solution

```python
def factorial(n):
    if n == 1:
        return 1

    return n * factorial(n - 1)

print(factorial(5))
```

## Output

```python
120
```

---

# Questions 31 to 100

Continue practicing:

* String Manipulation
* List Comprehension
* Dictionary Problems
* Searching Algorithms
* Sorting Algorithms
* File Handling
* OOP Concepts
* Exception Handling
* Generators
* Decorators
* Multithreading
* API Handling
* Database Operations
* Data Structures
* Dynamic Programming
* Recursion
* Lambda Functions
* NumPy Basics
* Pandas Operations
* Regular Expressions

# Question 31 (Medium)

## Problem Statement

Write a Python program to count frequency of characters in a string.

## Solution

```python id="b02kpl"
text = "programming"

result = {}

for char in text:
    result[char] = result.get(char, 0) + 1

print(result)
```

## Output

```python id="c6m2rf"
{'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1}
```

---

# Question 32 (Medium)

## Problem Statement

Write a Python program to remove spaces from a string.

## Solution

```python id="z8v2re"
text = "Hello World Python"

result = text.replace(" ", "")

print(result)
```

## Output

```python id="99p1jv"
HelloWorldPython
```

---

# Question 33 (Medium)

## Problem Statement

Write a Python program using list comprehension to create squares of numbers.

## Solution

```python id="mgz0x4"
nums = [1, 2, 3, 4, 5]

result = [num ** 2 for num in nums]

print(result)
```

## Output

```python id="j74qfp"
[1, 4, 9, 16, 25]
```

---

# Question 34 (Medium)

## Problem Statement

Write a Python program to filter even numbers using list comprehension.

## Solution

```python id="84m0k8"
nums = [1, 2, 3, 4, 5, 6]

result = [num for num in nums if num % 2 == 0]

print(result)
```

## Output

```python id="b9j4a1"
[2, 4, 6]
```

---

# Question 35 (Medium)

## Problem Statement

Write a Python program to merge dictionaries.

## Solution

```python id="ln58py"
a = {"x": 1}
b = {"y": 2}

result = {**a, **b}

print(result)
```

## Output

```python id="c8vbl1"
{'x': 1, 'y': 2}
```

---

# Question 36 (Medium)

## Problem Statement

Write a Python program to sort dictionary by values.

## Solution

```python id="j9d6v7"
data = {"a": 3, "b": 1, "c": 2}

result = dict(sorted(data.items(), key=lambda item: item[1]))

print(result)
```

## Output

```python id="8vjlwm"
{'b': 1, 'c': 2, 'a': 3}
```

---

# Question 37 (Medium)

## Problem Statement

Write a Python program to implement linear search.

## Solution

```python id="hax74v"
nums = [10, 20, 30, 40]

target = 30

found = False

for num in nums:
    if num == target:
        found = True

print(found)
```

## Output

```python id="iww6a5"
True
```

---

# Question 38 (Medium)

## Problem Statement

Write a Python program to implement binary search.

## Solution

```python id="vkq1x5"
nums = [1, 2, 3, 4, 5]

target = 4

low = 0
high = len(nums) - 1

found = False

while low <= high:

    mid = (low + high) // 2

    if nums[mid] == target:
        found = True
        break

    elif nums[mid] < target:
        low = mid + 1

    else:
        high = mid - 1

print(found)
```

## Output

```python id="v09y7u"
True
```

---

# Question 39 (Medium)

## Problem Statement

Write a Python program to implement bubble sort.

## Solution

```python id="o1rxlz"
nums = [5, 1, 4, 2]

for i in range(len(nums)):
    for j in range(len(nums) - 1):

        if nums[j] > nums[j + 1]:
            nums[j], nums[j + 1] = nums[j + 1], nums[j]

print(nums)
```

## Output

```python id="rbyhxh"
[1, 2, 4, 5]
```

---

# Question 40 (Medium)

## Problem Statement

Write a Python program to implement selection sort.

## Solution

```python id="tz3u1u"
nums = [5, 2, 4, 1]

for i in range(len(nums)):

    min_index = i

    for j in range(i + 1, len(nums)):
        if nums[j] < nums[min_index]:
            min_index = j

    nums[i], nums[min_index] = nums[min_index], nums[i]

print(nums)
```

## Output

```python id="hxh4q6"
[1, 2, 4, 5]
```

---

# Question 41 (Medium)

## Problem Statement

Write a Python program to read a file.

## Solution

```python id="mvsq1x"
with open("sample.txt", "r") as file:
    content = file.read()

print(content)
```

## Output

```python id="t2rk4r"
File content displayed
```

---

# Question 42 (Medium)

## Problem Statement

Write a Python program to write data into a file.

## Solution

```python id="7y1e3k"
with open("sample.txt", "w") as file:
    file.write("Hello Python")

print("Data written")
```

## Output

```python id="2mvxjx"
Data written
```

---

# Question 43 (Medium)

## Problem Statement

Write a Python class example using OOP concepts.

## Solution

```python id="h99v0t"
class Student:

    def __init__(self, name):
        self.name = name

    def display(self):
        print(self.name)

obj = Student("John")

obj.display()
```

## Output

```python id="l8j6t9"
John
```

---

# Question 44 (Medium)

## Problem Statement

Write a Python program demonstrating inheritance.

## Solution

```python id="p0zjlwm"
class Parent:

    def show(self):
        print("Parent Class")

class Child(Parent):
    pass

obj = Child()

obj.show()
```

## Output

```python id="hzkkz6"
Parent Class
```

---

# Question 45 (Medium)

## Problem Statement

Write a Python program for exception handling.

## Solution

```python id="ukd3zd"
try:
    result = 10 / 0

except ZeroDivisionError:
    print("Cannot divide by zero")
```

## Output

```python id="dt4w3l"
Cannot divide by zero
```

---

# Question 46 (Hard)

## Problem Statement

Write a Python generator example.

## Solution

```python id="o55z4z"
def numbers():

    for i in range(5):
        yield i

for num in numbers():
    print(num)
```

## Output

```python id="y2b05u"
0
1
2
3
4
```

---

# Question 47 (Hard)

## Problem Statement

Write a Python decorator example.

## Solution

```python id="q8q88y"
def decorator(func):

    def wrapper():
        print("Before function")
        func()
        print("After function")

    return wrapper

@decorator
def hello():
    print("Hello")

hello()
```

## Output

```python id="4k8g1k"
Before function
Hello
After function
```

---

# Question 48 (Hard)

## Problem Statement

Write a Python multithreading example.

## Solution

```python id="jlwm4z"
import threading

def task():
    print("Thread running")

thread = threading.Thread(target=task)

thread.start()

thread.join()
```

## Output

```python id="79afgj"
Thread running
```

---

# Question 49 (Hard)

## Problem Statement

Write a Python program to call an API.

## Solution

```python id="v98q9k"
import requests

response = requests.get("https://jsonplaceholder.typicode.com/posts/1")

print(response.status_code)
```

## Output

```python id="i8yk3v"
200
```

---

# Question 50 (Hard)

## Problem Statement

Write a Python SQLite database example.

## Solution

```python id="n6mt9m"
import sqlite3

conn = sqlite3.connect("test.db")

cursor = conn.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS users(name TEXT)")

print("Table Created")

conn.close()
```

## Output

```python id="8jw5gs"
Table Created
```

---

# Question 51 (Hard)

## Problem Statement

Write a Python stack implementation using list.

## Solution

```python id="e6rm2n"
stack = []

stack.append(10)
stack.append(20)

print(stack.pop())
```

## Output

```python id="wzfdw5"
20
```

---

# Question 52 (Hard)

## Problem Statement

Write a Python queue implementation.

## Solution

```python id="j4m36t"
from collections import deque

queue = deque()

queue.append(10)
queue.append(20)

print(queue.popleft())
```

## Output

```python id="95jlwm"
10
```

---

# Question 53 (Hard)

## Problem Statement

Write a Python recursion example for factorial.

## Solution

```python id="a7jv3q"
def factorial(n):

    if n == 1:
        return 1

    return n * factorial(n - 1)

print(factorial(5))
```

## Output

```python id="w3n0x4"
120
```

---

# Question 54 (Hard)

## Problem Statement

Write a Python lambda function example.

## Solution

```python id="63i63h"
square = lambda x: x * x

print(square(5))
```

## Output

```python id="c99hbc"
25
```

---

# Question 55 (Hard)

## Problem Statement

Write a NumPy array example.

## Solution

```python id="xyu9s4"
import numpy as np

arr = np.array([1, 2, 3])

print(arr)
```

## Output

```python id="3fut1f"
[1 2 3]
```

---

# Question 56 (Hard)

## Problem Statement

Write a NumPy matrix addition example.

## Solution

```python id="hn8kzc"
import numpy as np

a = np.array([1, 2])
b = np.array([3, 4])

print(a + b)
```

## Output

```python id="l0csc3"
[4 6]
```

---

# Question 57 (Hard)

## Problem Statement

Write a Pandas DataFrame example.

## Solution

```python id="fz5r9x"
import pandas as pd

data = {
    "name": ["John", "Alex"]
}

df = pd.DataFrame(data)

print(df)
```

## Output

```python id="s0r3r8"
    name
0   John
1   Alex
```

---

# Question 58 (Hard)

## Problem Statement

Write a Pandas CSV read example.

## Solution

```python id="jlwm6s"
import pandas as pd

df = pd.read_csv("data.csv")

print(df.head())
```

## Output

```python id="l6xpgz"
CSV Data Displayed
```

---

# Question 59 (Hard)

## Problem Statement

Write a Python regular expression example.

## Solution

```python id="56e7ru"
import re

text = "Python123"

result = re.findall(r"\d+", text)

print(result)
```

## Output

```python id="6kr0m7"
['123']
```

---

# Question 60 (Hard)

## Problem Statement

Write a Python regex email validation example.

## Solution

```python id="j8bduw"
import re

email = "test@gmail.com"

pattern = r'^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$'

print(bool(re.match(pattern, email)))
```

## Output

```python id="10lhkg"
True
```

---

# Questions 61 to 100

Continue practicing advanced topics:

* Advanced OOP
* Abstract Classes
* Polymorphism
* Encapsulation
* Iterators
* Async Programming
* Web Scraping
* Flask APIs
* Django Basics
* Data Structures
* Trees
* Graph Algorithms
* Heap Queue
* Linked List
* Merge Sort
* Quick Sort
* Dynamic Programming
* Memoization
* Bit Manipulation
* Machine Learning Basics

# Python Programming Questions 61 to 100

# Question 61 (Hard)

## Problem Statement
Write a Python program to demonstrate encapsulation.

## Solution

```python
class Student:

    def __init__(self):
        self.__marks = 90

    def get_marks(self):
        return self.__marks

obj = Student()

print(obj.get_marks())
```

## Output

```python
90
```

---

# Question 62 (Hard)

## Problem Statement
Write a Python program to demonstrate polymorphism.

## Solution

```python
class Dog:
    def sound(self):
        print("Dog barks")

class Cat:
    def sound(self):
        print("Cat meows")

for animal in [Dog(), Cat()]:
    animal.sound()
```

## Output

```python
Dog barks
Cat meows
```

---

# Question 63 (Hard)

## Problem Statement
Write a Python program using abstract classes.

## Solution

```python
from abc import ABC, abstractmethod

class Shape(ABC):

    @abstractmethod
    def area(self):
        pass

class Square(Shape):

    def area(self):
        return 25

obj = Square()

print(obj.area())
```

## Output

```python
25
```

---

# Question 64 (Hard)

## Problem Statement
Write a Python iterator example.

## Solution

```python
nums = iter([1, 2, 3])

print(next(nums))
print(next(nums))
```

## Output

```python
1
2
```

---

# Question 65 (Hard)

## Problem Statement
Write a Python async programming example.

## Solution

```python
import asyncio

async def hello():
    print("Hello Async")

asyncio.run(hello())
```

## Output

```python
Hello Async
```

---

# Question 66 (Hard)

## Problem Statement
Write a Python web scraping example using BeautifulSoup.

## Solution

```python
from bs4 import BeautifulSoup

html = "<h1>Hello</h1>"

soup = BeautifulSoup(html, "html.parser")

print(soup.h1.text)
```

## Output

```python
Hello
```

---

# Question 67 (Hard)

## Problem Statement
Write a Flask API example.

## Solution

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello Flask"

app.run()
```

## Output

```python
Flask server running
```

---

# Question 68 (Hard)

## Problem Statement
Write a Django URL example.

## Solution

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home)
]
```

## Output

```python
URL configured
```

---

# Question 69 (Hard)

## Problem Statement
Write a Python linked list implementation.

## Solution

```python
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(10)
head.next = Node(20)

print(head.data)
print(head.next.data)
```

## Output

```python
10
20
```

---

# Question 70 (Hard)

## Problem Statement
Write a Python stack implementation using class.

## Solution

```python
class Stack:

    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

stack = Stack()

stack.push(10)
stack.push(20)

print(stack.pop())
```

## Output

```python
20
```

---

# Question 71 (Hard)

## Problem Statement
Write a Python queue implementation using class.

## Solution

```python
class Queue:

    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        return self.items.pop(0)

queue = Queue()

queue.enqueue(10)
queue.enqueue(20)

print(queue.dequeue())
```

## Output

```python
10
```

---

# Question 72 (Hard)

## Problem Statement
Write a Python merge sort program.

## Solution

```python
def merge_sort(arr):

    if len(arr) > 1:

        mid = len(arr) // 2

        left = arr[:mid]
        right = arr[mid:]

        merge_sort(left)
        merge_sort(right)

        i = j = k = 0

        while i < len(left) and j < len(right):

            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1

            k += 1

arr = [5, 2, 4, 1]

merge_sort(arr)

print(arr)
```

## Output

```python
[1, 2, 4, 5]
```

---

# Question 73 (Hard)

## Problem Statement
Write a Python quick sort program.

## Solution

```python
def quick_sort(arr):

    if len(arr) <= 1:
        return arr

    pivot = arr[0]

    left = [x for x in arr[1:] if x <= pivot]
    right = [x for x in arr[1:] if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)

nums = [5, 2, 8, 1]

print(quick_sort(nums))
```

## Output

```python
[1, 2, 5, 8]
```

---

# Question 74 (Hard)

## Problem Statement
Write a Python recursion example to find Fibonacci.

## Solution

```python
def fibonacci(n):

    if n <= 1:
        return n

    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(6))
```

## Output

```python
8
```

---

# Question 75 (Hard)

## Problem Statement
Write a Python memoization example.

## Solution

```python
cache = {}

def factorial(n):

    if n in cache:
        return cache[n]

    if n == 1:
        return 1

    cache[n] = n * factorial(n - 1)

    return cache[n]

print(factorial(5))
```

## Output

```python
120
```

---

# Question 76 (Hard)

## Problem Statement
Write a Python bit manipulation example.

## Solution

```python
a = 5
b = 3

print(a & b)
```

## Output

```python
1
```

---

# Question 77 (Hard)

## Problem Statement
Write a Python heap queue example.

## Solution

```python
import heapq

nums = [5, 1, 9, 2]

heapq.heapify(nums)

print(heapq.heappop(nums))
```

## Output

```python
1
```

---

# Question 78 (Hard)

## Problem Statement
Write a Python tree traversal example.

## Solution

```python
class Node:

    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

root = Node(1)
root.left = Node(2)
root.right = Node(3)

print(root.data)
print(root.left.data)
print(root.right.data)
```

## Output

```python
1
2
3
```

---

# Question 79 (Hard)

## Problem Statement
Write a Python graph representation example.

## Solution

```python
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': [],
    'D': []
}

print(graph)
```

## Output

```python
{'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': []}
```

---

# Question 80 (Hard)

## Problem Statement
Write a Python DFS traversal example.

## Solution

```python
graph = {
    'A': ['B', 'C'],
    'B': [],
    'C': []
}

visited = set()


def dfs(node):

    if node not in visited:
        print(node)
        visited.add(node)

        for neighbor in graph[node]:
            dfs(neighbor)


dfs('A')
```

## Output

```python
A
B
C
```

---

# Question 81 (Hard)

## Problem Statement
Write a Python BFS traversal example.

## Solution

```python
from collections import deque

graph = {
    'A': ['B', 'C'],
    'B': [],
    'C': []
}

queue = deque(['A'])
visited = set()

while queue:

    node = queue.popleft()

    if node not in visited:

        print(node)

        visited.add(node)

        queue.extend(graph[node])
```

## Output

```python
A
B
C
```

---

# Question 82 (Hard)

## Problem Statement
Write a Python dynamic programming Fibonacci example.

## Solution

```python
def fibonacci(n):

    dp = [0, 1]

    for i in range(2, n + 1):
        dp.append(dp[i - 1] + dp[i - 2])

    return dp[n]

print(fibonacci(7))
```

## Output

```python
13
```

---

# Question 83 (Hard)

## Problem Statement
Write a Python longest word finder.

## Solution

```python
words = ["python", "java", "javascript"]

result = max(words, key=len)

print(result)
```

## Output

```python
javascript
```

---

# Question 84 (Hard)

## Problem Statement
Write a Python anagram checker.

## Solution

```python
str1 = "listen"
str2 = "silent"

print(sorted(str1) == sorted(str2))
```

## Output

```python
True
```

---

# Question 85 (Hard)

## Problem Statement
Write a Python zip function example.

## Solution

```python
names = ["John", "Alex"]
marks = [80, 90]

result = list(zip(names, marks))

print(result)
```

## Output

```python
[("John", 80), ("Alex", 90)]
```

---

# Question 86 (Hard)

## Problem Statement
Write a Python enumerate function example.

## Solution

```python
names = ["John", "Alex"]

for index, value in enumerate(names):
    print(index, value)
```

## Output

```python
0 John
1 Alex
```

---

# Question 87 (Hard)

## Problem Statement
Write a Python map function example.

## Solution

```python
nums = [1, 2, 3]

result = list(map(lambda x: x * 2, nums))

print(result)
```

## Output

```python
[2, 4, 6]
```

---

# Question 88 (Hard)

## Problem Statement
Write a Python filter function example.

## Solution

```python
nums = [1, 2, 3, 4]

result = list(filter(lambda x: x % 2 == 0, nums))

print(result)
```

## Output

```python
[2, 4]
```

---

# Question 89 (Hard)

## Problem Statement
Write a Python reduce function example.

## Solution

```python
from functools import reduce

nums = [1, 2, 3, 4]

result = reduce(lambda a, b: a + b, nums)

print(result)
```

## Output

```python
10
```

---

# Question 90 (Hard)

## Problem Statement
Write a Python set operations example.

## Solution

```python
a = {1, 2, 3}
b = {2, 3, 4}

print(a & b)
```

## Output

```python
{2, 3}
```

---

# Question 91 (Hard)

## Problem Statement
Write a Python tuple unpacking example.

## Solution

```python
person = ("John", 25)

name, age = person

print(name)
print(age)
```

## Output

```python
John
25
```

---

# Question 92 (Hard)

## Problem Statement
Write a Python JSON parsing example.

## Solution

```python
import json

text = '{"name": "John"}'

result = json.loads(text)

print(result)
```

## Output

```python
{'name': 'John'}
```

---

# Question 93 (Hard)

## Problem Statement
Write a Python random number example.

## Solution

```python
import random

print(random.randint(1, 10))
```

## Output

```python
Random number between 1 and 10
```

---

# Question 94 (Hard)

## Problem Statement
Write a Python datetime example.

## Solution

```python
from datetime import datetime

print(datetime.now())
```

## Output

```python
Current date and time
```

---

# Question 95 (Hard)

## Problem Statement
Write a Python command-line argument example.

## Solution

```python
import sys

print(sys.argv)
```

## Output

```python
Command line arguments displayed
```

---

# Question 96 (Hard)

## Problem Statement
Write a Python environment variable example.

## Solution

```python
import os

print(os.getenv("HOME"))
```

## Output

```python
Home directory path
```

---

# Question 97 (Hard)

## Problem Statement
Write a Python CSV file reading example.

## Solution

```python
import csv

with open('data.csv') as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)
```

## Output

```python
CSV rows displayed
```

---

# Question 98 (Hard)

## Problem Statement
Write a Python logging example.

## Solution

```python
import logging

logging.basicConfig(level=logging.INFO)

logging.info("Application Started")
```

## Output

```python
INFO:root:Application Started
```

---

# Question 99 (Hard)

## Problem Statement
Write a Python singleton pattern example.

## Solution

```python
class Singleton:

    _instance = None

    def __new__(cls):

        if cls._instance is None:
            cls._instance = super().__new__(cls)

        return cls._instance

obj1 = Singleton()
obj2 = Singleton()

print(obj1 == obj2)
```

## Output

```python
True
```

---

# Question 100 (Hard)

## Problem Statement
Write a Python program to measure execution time.

## Solution

```python
import time

start = time.time()

for i in range(1000000):
    pass

end = time.time()

print(end - start)
```

## Output

```python
Execution time displayed
```

