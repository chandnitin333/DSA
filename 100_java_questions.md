# 100 Java Programming Questions with Problem Statements, Solutions, and Outputs

## Question 1 (Easy)

### Problem Statement

Write a Java program to print Hello World.

### Solution

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

### Output

```text
Hello World
```

---

## Question 2 (Easy)

### Problem Statement

Write a Java program to add two numbers.

### Solution

```java
public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        int sum = a + b;

        System.out.println(sum);
    }
}
```

### Output

```text
30
```

---

## Question 3 (Easy)

### Problem Statement

Write a Java program to find even numbers from an array.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int[] nums = {1,2,3,4,5,6};

        for(int num : nums){
            if(num % 2 == 0){
                System.out.println(num);
            }
        }
    }
}
```

### Output

```text
2
4
6
```

---

## Question 4 (Easy)

### Problem Statement

Write a Java program to reverse a string.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        String str = "Java";

        String reversed = new StringBuilder(str).reverse().toString();

        System.out.println(reversed);
    }
}
```

### Output

```text
avaJ
```

---

## Question 5 (Easy)

### Problem Statement

Write a Java program to check palindrome number.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int num = 121;
        int original = num;
        int reverse = 0;

        while(num > 0){
            int rem = num % 10;
            reverse = reverse * 10 + rem;
            num = num / 10;
        }

        System.out.println(original == reverse);
    }
}
```

### Output

```text
true
```

---

## Question 6 (Easy)

### Problem Statement

Write a Java program to find factorial of a number.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int num = 5;
        int fact = 1;

        for(int i=1; i<=num; i++){
            fact *= i;
        }

        System.out.println(fact);
    }
}
```

### Output

```text
120
```

---

## Question 7 (Easy)

### Problem Statement

Write a Java program to print Fibonacci series.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int a = 0;
        int b = 1;

        for(int i=0; i<5; i++){
            System.out.print(a + " ");

            int c = a + b;
            a = b;
            b = c;
        }
    }
}
```

### Output

```text
0 1 1 2 3
```

---

## Question 8 (Easy)

### Problem Statement

Write a Java program to find maximum number in array.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int[] nums = {10,20,50,5};

        int max = nums[0];

        for(int num : nums){
            if(num > max){
                max = num;
            }
        }

        System.out.println(max);
    }
}
```

### Output

```text
50
```

---

## Question 9 (Easy)

### Problem Statement

Write a Java program to sort array in ascending order.

### Solution

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] nums = {5,2,1,4};

        Arrays.sort(nums);

        System.out.println(Arrays.toString(nums));
    }
}
```

### Output

```text
[1, 2, 4, 5]
```

---

## Question 10 (Easy)

### Problem Statement

Write a Java program to count vowels in string.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        String str = "Programming";

        int count = 0;

        for(char ch : str.toLowerCase().toCharArray()){
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
                count++;
            }
        }

        System.out.println(count);
    }
}
```

### Output

```text
3
```

---

## Question 11 (Easy)

### Problem Statement

Write a Java program to swap two numbers without using a third variable.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int a = 10;
        int b = 20;

        a = a + b;
        b = a - b;
        a = a - b;

        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}
```

### Output

```text
a = 20
b = 10
```

---

## Question 12 (Easy)

### Problem Statement

Write a Java program to check whether a number is prime.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int num = 17;
        boolean isPrime = true;

        if(num <= 1){
            isPrime = false;
        } else {
            for(int i=2; i<=Math.sqrt(num); i++){
                if(num % i == 0){
                    isPrime = false;
                    break;
                }
            }
        }

        System.out.println(isPrime);
    }
}
```

### Output

```text
true
```

---

## Question 13 (Easy)

### Problem Statement

Write a Java program to find sum of digits of a number.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int num = 1234;
        int sum = 0;

        while(num > 0){
            sum += num % 10;
            num /= 10;
        }

        System.out.println(sum);
    }
}
```

### Output

```text
10
```

---

## Question 14 (Easy)

### Problem Statement

Write a Java program to reverse a number.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int num = 1234;
        int reverse = 0;

        while(num > 0){
            int rem = num % 10;
            reverse = reverse * 10 + rem;
            num /= 10;
        }

        System.out.println(reverse);
    }
}
```

### Output

```text
4321
```

---

## Question 15 (Easy)

### Problem Statement

Write a Java program to check whether a number is an Armstrong number.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int num = 153;
        int original = num;
        int sum = 0;

        while(num > 0){
            int digit = num % 10;
            sum += digit * digit * digit;
            num /= 10;
        }

        System.out.println(original == sum);
    }
}
```

### Output

```text
true
```

---

## Question 16 (Easy)

### Problem Statement

Write a Java program to print a pyramid star pattern.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int rows = 5;

        for(int i=1; i<=rows; i++){
            for(int j=1; j<=rows-i; j++){
                System.out.print(" ");
            }
            for(int k=1; k<=2*i-1; k++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

### Output

```text
    *
   ***
  *****
 *******
*********
```

---

## Question 17 (Easy)

### Problem Statement

Write a Java program to find the largest of three numbers.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int a = 25, b = 47, c = 19;

        int largest = a;
        if(b > largest) largest = b;
        if(c > largest) largest = c;

        System.out.println(largest);
    }
}
```

### Output

```text
47
```

---

## Question 18 (Easy)

### Problem Statement

Write a Java program to print the multiplication table of a number.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int num = 5;

        for(int i=1; i<=10; i++){
            System.out.println(num + " x " + i + " = " + (num*i));
        }
    }
}
```

### Output

```text
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

---

## Question 19 (Easy)

### Problem Statement

Write a Java program to convert Celsius to Fahrenheit.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        double celsius = 25;
        double fahrenheit = (celsius * 9/5) + 32;

        System.out.println(fahrenheit);
    }
}
```

### Output

```text
77.0
```

---

## Question 20 (Easy)

### Problem Statement

Write a Java program to check whether a year is a leap year.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int year = 2024;
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

        System.out.println(isLeap);
    }
}
```

### Output

```text
true
```

---

## Question 21 (Easy)

### Problem Statement

Write a Java program to count words in a string.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        String str = "Java is a powerful language";

        String[] words = str.trim().split("\\s+");

        System.out.println(words.length);
    }
}
```

### Output

```text
5
```

---

## Question 22 (Easy)

### Problem Statement

Write a Java program to remove duplicates from an array.

### Solution

```java
import java.util.LinkedHashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {

        int[] nums = {1, 2, 2, 3, 4, 4, 5};

        Set<Integer> set = new LinkedHashSet<>();
        for(int num : nums){
            set.add(num);
        }

        System.out.println(set);
    }
}
```

### Output

```text
[1, 2, 3, 4, 5]
```

---

## Question 23 (Easy)

### Problem Statement

Write a Java program to find the second largest number in an array.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int[] nums = {10, 5, 50, 20, 35};

        int largest = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for(int num : nums){
            if(num > largest){
                second = largest;
                largest = num;
            } else if(num > second && num != largest){
                second = num;
            }
        }

        System.out.println(second);
    }
}
```

### Output

```text
35
```

---

## Question 24 (Easy)

### Problem Statement

Write a Java program to perform linear search in an array.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int[] nums = {10, 20, 30, 40, 50};
        int key = 30;
        int index = -1;

        for(int i=0; i<nums.length; i++){
            if(nums[i] == key){
                index = i;
                break;
            }
        }

        System.out.println(index);
    }
}
```

### Output

```text
2
```

---

## Question 25 (Easy)

### Problem Statement

Write a Java program to perform binary search in a sorted array.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int[] nums = {10, 20, 30, 40, 50};
        int key = 40;
        int low = 0, high = nums.length - 1;
        int index = -1;

        while(low <= high){
            int mid = (low + high) / 2;
            if(nums[mid] == key){
                index = mid;
                break;
            } else if(nums[mid] < key){
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        System.out.println(index);
    }
}
```

### Output

```text
3
```

---

## Question 26 (Easy)

### Problem Statement

Write a Java program to perform bubble sort.

### Solution

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] nums = {5, 2, 8, 1, 4};
        int n = nums.length;

        for(int i=0; i<n-1; i++){
            for(int j=0; j<n-1-i; j++){
                if(nums[j] > nums[j+1]){
                    int temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                }
            }
        }

        System.out.println(Arrays.toString(nums));
    }
}
```

### Output

```text
[1, 2, 4, 5, 8]
```

---

## Question 27 (Easy)

### Problem Statement

Write a Java program to perform selection sort.

### Solution

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] nums = {64, 25, 12, 22, 11};
        int n = nums.length;

        for(int i=0; i<n-1; i++){
            int minIdx = i;
            for(int j=i+1; j<n; j++){
                if(nums[j] < nums[minIdx]){
                    minIdx = j;
                }
            }
            int temp = nums[minIdx];
            nums[minIdx] = nums[i];
            nums[i] = temp;
        }

        System.out.println(Arrays.toString(nums));
    }
}
```

### Output

```text
[11, 12, 22, 25, 64]
```

---

## Question 28 (Easy)

### Problem Statement

Write a Java program to perform insertion sort.

### Solution

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] nums = {12, 11, 13, 5, 6};
        int n = nums.length;

        for(int i=1; i<n; i++){
            int key = nums[i];
            int j = i - 1;
            while(j >= 0 && nums[j] > key){
                nums[j+1] = nums[j];
                j--;
            }
            nums[j+1] = key;
        }

        System.out.println(Arrays.toString(nums));
    }
}
```

### Output

```text
[5, 6, 11, 12, 13]
```

---

## Question 29 (Easy)

### Problem Statement

Write a Java program to check whether two strings are anagrams.

### Solution

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        String s1 = "listen";
        String s2 = "silent";

        char[] a = s1.toCharArray();
        char[] b = s2.toCharArray();

        Arrays.sort(a);
        Arrays.sort(b);

        System.out.println(Arrays.equals(a, b));
    }
}
```

### Output

```text
true
```

---

## Question 30 (Easy)

### Problem Statement

Write a Java program to find GCD of two numbers.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int a = 36, b = 60;

        while(b != 0){
            int temp = b;
            b = a % b;
            a = temp;
        }

        System.out.println(a);
    }
}
```

### Output

```text
12
```

---

## Question 31 (Medium)

### Problem Statement

Write a Java program to find LCM of two numbers.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int a = 12, b = 18;
        int x = a, y = b;

        while(y != 0){
            int temp = y;
            y = x % y;
            x = temp;
        }

        int lcm = (a * b) / x;
        System.out.println(lcm);
    }
}
```

### Output

```text
36
```

---

## Question 32 (Medium)

### Problem Statement

Write a Java program to add two matrices.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int[][] a = {{1,2},{3,4}};
        int[][] b = {{5,6},{7,8}};
        int[][] result = new int[2][2];

        for(int i=0; i<2; i++){
            for(int j=0; j<2; j++){
                result[i][j] = a[i][j] + b[i][j];
            }
        }

        for(int[] row : result){
            for(int val : row){
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
```

### Output

```text
6 8
10 12
```

---

## Question 33 (Medium)

### Problem Statement

Write a Java program to multiply two matrices.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int[][] a = {{1,2},{3,4}};
        int[][] b = {{5,6},{7,8}};
        int[][] result = new int[2][2];

        for(int i=0; i<2; i++){
            for(int j=0; j<2; j++){
                for(int k=0; k<2; k++){
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }

        for(int[] row : result){
            for(int val : row){
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
```

### Output

```text
19 22
43 50
```

---

## Question 34 (Medium)

### Problem Statement

Write a Java program to find the transpose of a matrix.

### Solution

```java
public class Main {
    public static void main(String[] args) {

        int[][] matrix = {{1,2,3},{4,5,6}};
        int[][] transpose = new int[3][2];

        for(int i=0; i<2; i++){
            for(int j=0; j<3; j++){
                transpose[j][i] = matrix[i][j];
            }
        }

        for(int[] row : transpose){
            for(int val : row){
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
```

### Output

```text
1 4
2 5
3 6
```

---

## Question 35 (Medium)

### Problem Statement

Write a Java program to demonstrate ArrayList operations.

### Solution

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        list.remove("Python");
        list.add(1, "Go");

        System.out.println(list);
        System.out.println("Size: " + list.size());
    }
}
```

### Output

```text
[Java, Go, C++]
Size: 3
```

---

## Question 36 (Medium)

### Problem Statement

Write a Java program to demonstrate LinkedList operations.

### Solution

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {

        LinkedList<Integer> list = new LinkedList<>();
        list.add(10);
        list.add(20);
        list.addFirst(5);
        list.addLast(30);

        System.out.println(list);
        System.out.println("First: " + list.getFirst());
        System.out.println("Last: " + list.getLast());
    }
}
```

### Output

```text
[5, 10, 20, 30]
First: 5
Last: 30
```

---

## Question 37 (Medium)

### Problem Statement

Write a Java program to demonstrate HashMap operations.

### Solution

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {

        HashMap<String, Integer> map = new HashMap<>();
        map.put("Apple", 100);
        map.put("Banana", 50);
        map.put("Cherry", 200);

        for(var entry : map.entrySet()){
            System.out.println(entry.getKey() + " = " + entry.getValue());
        }
    }
}
```

### Output

```text
Apple = 100
Banana = 50
Cherry = 200
```

---

## Question 38 (Medium)

### Problem Statement

Write a Java program to demonstrate HashSet operations.

### Solution

```java
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {

        HashSet<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple");
        set.add("Mango");

        System.out.println(set);
        System.out.println("Size: " + set.size());
    }
}
```

### Output

```text
[Apple, Mango, Banana]
Size: 3
```

---

## Question 39 (Medium)

### Problem Statement

Write a Java program to demonstrate TreeMap operations.

### Solution

```java
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {

        TreeMap<String, Integer> map = new TreeMap<>();
        map.put("Banana", 2);
        map.put("Apple", 1);
        map.put("Cherry", 3);

        System.out.println(map);
    }
}
```

### Output

```text
{Apple=1, Banana=2, Cherry=3}
```

---

## Question 40 (Medium)

### Problem Statement

Write a Java program to implement a Stack using array.

### Solution

```java
public class Main {

    static int[] stack = new int[5];
    static int top = -1;

    static void push(int x){
        if(top == stack.length - 1){
            System.out.println("Stack Overflow");
            return;
        }
        stack[++top] = x;
    }

    static int pop(){
        if(top == -1){
            System.out.println("Stack Empty");
            return -1;
        }
        return stack[top--];
    }

    public static void main(String[] args) {
        push(10);
        push(20);
        push(30);

        System.out.println(pop());
        System.out.println(pop());
    }
}
```

### Output

```text
30
20
```

---

## Question 41 (Medium)

### Problem Statement

Write a Java program to implement a Queue using array.

### Solution

```java
public class Main {

    static int[] queue = new int[5];
    static int front = 0, rear = 0;

    static void enqueue(int x){
        if(rear == queue.length){
            System.out.println("Queue Full");
            return;
        }
        queue[rear++] = x;
    }

    static int dequeue(){
        if(front == rear){
            System.out.println("Queue Empty");
            return -1;
        }
        return queue[front++];
    }

    public static void main(String[] args) {
        enqueue(10);
        enqueue(20);
        enqueue(30);

        System.out.println(dequeue());
        System.out.println(dequeue());
    }
}
```

### Output

```text
10
20
```

---

## Question 42 (Medium)

### Problem Statement

Write a Java program to insert nodes into a singly linked list and display them.

### Solution

```java
public class Main {

    static class Node {
        int data;
        Node next;
        Node(int data){ this.data = data; }
    }

    static Node head;

    static void insert(int data){
        Node newNode = new Node(data);
        if(head == null){
            head = newNode;
            return;
        }
        Node temp = head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = newNode;
    }

    static void display(){
        Node temp = head;
        while(temp != null){
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
    }

    public static void main(String[] args) {
        insert(10);
        insert(20);
        insert(30);
        display();
    }
}
```

### Output

```text
10 20 30
```

---

## Question 43 (Medium)

### Problem Statement

Write a Java program to reverse a singly linked list.

### Solution

```java
public class Main {

    static class Node {
        int data;
        Node next;
        Node(int data){ this.data = data; }
    }

    static Node reverse(Node head){
        Node prev = null, curr = head;
        while(curr != null){
            Node next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);

        Node rev = reverse(head);
        while(rev != null){
            System.out.print(rev.data + " ");
            rev = rev.next;
        }
    }
}
```

### Output

```text
4 3 2 1
```

---

## Question 44 (Medium)

### Problem Statement

Write a Java program to demonstrate a class and object (OOP basics).

### Solution

```java
class Car {
    String brand;
    int year;

    void display(){
        System.out.println(brand + " - " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car();
        c.brand = "Toyota";
        c.year = 2024;
        c.display();
    }
}
```

### Output

```text
Toyota - 2024
```

---

## Question 45 (Medium)

### Problem Statement

Write a Java program to demonstrate single inheritance.

### Solution

```java
class Animal {
    void eat(){
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark(){
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.bark();
    }
}
```

### Output

```text
Animal eats
Dog barks
```

---

## Question 46 (Medium)

### Problem Statement

Write a Java program to demonstrate polymorphism using method overloading.

### Solution

```java
class Calculator {
    int add(int a, int b){
        return a + b;
    }

    double add(double a, double b){
        return a + b;
    }

    int add(int a, int b, int c){
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(2, 3));
        System.out.println(c.add(2.5, 3.5));
        System.out.println(c.add(1, 2, 3));
    }
}
```

### Output

```text
5
6.0
6
```

---

## Question 47 (Medium)

### Problem Statement

Write a Java program to demonstrate method overriding.

### Solution

```java
class Shape {
    void draw(){
        System.out.println("Drawing shape");
    }
}

class Circle extends Shape {
    @Override
    void draw(){
        System.out.println("Drawing circle");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s = new Circle();
        s.draw();
    }
}
```

### Output

```text
Drawing circle
```

---

## Question 48 (Medium)

### Problem Statement

Write a Java program to demonstrate encapsulation.

### Solution

```java
class Employee {
    private String name;
    private int salary;

    public void setName(String name){ this.name = name; }
    public String getName(){ return name; }

    public void setSalary(int salary){ this.salary = salary; }
    public int getSalary(){ return salary; }
}

public class Main {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.setName("John");
        e.setSalary(50000);
        System.out.println(e.getName() + " - " + e.getSalary());
    }
}
```

### Output

```text
John - 50000
```

---

## Question 49 (Medium)

### Problem Statement

Write a Java program to demonstrate abstraction using an abstract class.

### Solution

```java
abstract class Vehicle {
    abstract void start();

    void stop(){
        System.out.println("Vehicle stopped");
    }
}

class Bike extends Vehicle {
    @Override
    void start(){
        System.out.println("Bike started");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Bike();
        v.start();
        v.stop();
    }
}
```

### Output

```text
Bike started
Vehicle stopped
```

---

## Question 50 (Medium)

### Problem Statement

Write a Java program to demonstrate the use of an interface.

### Solution

```java
interface Animal {
    void sound();
}

class Cat implements Animal {
    @Override
    public void sound(){
        System.out.println("Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Cat();
        a.sound();
    }
}
```

### Output

```text
Meow
```

---

## Question 51 (Medium)

### Problem Statement

Write a Java program to handle an exception using try-catch.

### Solution

```java
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e){
            System.out.println("Cannot divide by zero");
        }
    }
}
```

### Output

```text
Cannot divide by zero
```

---

## Question 52 (Medium)

### Problem Statement

Write a Java program to create and throw a custom exception.

### Solution

```java
class AgeException extends Exception {
    public AgeException(String msg){
        super(msg);
    }
}

public class Main {

    static void checkAge(int age) throws AgeException {
        if(age < 18){
            throw new AgeException("Age must be 18 or above");
        }
        System.out.println("Eligible");
    }

    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (AgeException e){
            System.out.println(e.getMessage());
        }
    }
}
```

### Output

```text
Age must be 18 or above
```

---

## Question 53 (Medium)

### Problem Statement

Write a Java program to demonstrate multiple catch blocks.

### Solution

```java
public class Main {
    public static void main(String[] args) {
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);
        } catch (ArithmeticException e){
            System.out.println("Arithmetic error");
        } catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Array index out of bounds");
        } catch (Exception e){
            System.out.println("Some error occurred");
        }
    }
}
```

### Output

```text
Array index out of bounds
```

---

## Question 54 (Medium)

### Problem Statement

Write a Java program to demonstrate the finally block.

### Solution

```java
public class Main {
    public static void main(String[] args) {
        try {
            int x = 10 / 2;
            System.out.println("Result: " + x);
        } catch (Exception e){
            System.out.println("Exception occurred");
        } finally {
            System.out.println("Finally block executed");
        }
    }
}
```

### Output

```text
Result: 5
Finally block executed
```

---

## Question 55 (Medium)

### Problem Statement

Write a Java program to read content from a file.

### Solution

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {
            String line;
            while((line = br.readLine()) != null){
                System.out.println(line);
            }
        } catch (IOException e){
            System.out.println("File not found");
        }
    }
}
```

### Output

```text
Hello from file
This is line 2
```

---

## Question 56 (Medium)

### Problem Statement

Write a Java program to write content into a file.

### Solution

```java
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (FileWriter fw = new FileWriter("output.txt")) {
            fw.write("Hello, this is Java file writing.");
            System.out.println("Written to file");
        } catch (IOException e){
            System.out.println("Error writing file");
        }
    }
}
```

### Output

```text
Written to file
```

---

## Question 57 (Medium)

### Problem Statement

Write a Java program to create a thread by extending the Thread class.

### Solution

```java
class MyThread extends Thread {
    @Override
    public void run(){
        System.out.println("Thread running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();
    }
}
```

### Output

```text
Thread running
```

---

## Question 58 (Medium)

### Problem Statement

Write a Java program to create a thread by implementing Runnable interface.

### Solution

```java
class MyRunnable implements Runnable {
    @Override
    public void run(){
        System.out.println("Runnable thread running");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread t = new Thread(new MyRunnable());
        t.start();
    }
}
```

### Output

```text
Runnable thread running
```

---

## Question 59 (Medium)

### Problem Statement

Write a Java program to demonstrate a synchronized method.

### Solution

```java
class Counter {
    private int count = 0;

    public synchronized void increment(){
        count++;
    }

    public int getCount(){
        return count;
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Counter c = new Counter();

        Thread t1 = new Thread(() -> {
            for(int i=0; i<1000; i++) c.increment();
        });
        Thread t2 = new Thread(() -> {
            for(int i=0; i<1000; i++) c.increment();
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println(c.getCount());
    }
}
```

### Output

```text
2000
```

---

## Question 60 (Medium)

### Problem Statement

Write a Java program to demonstrate a lambda expression.

### Solution

```java
interface Greet {
    void say(String name);
}

public class Main {
    public static void main(String[] args) {
        Greet g = (name) -> System.out.println("Hello " + name);
        g.say("Java");
    }
}
```

### Output

```text
Hello Java
```

---

## Question 61 (Hard)

### Problem Statement

Write a Java program to demonstrate a custom Functional Interface.

### Solution

```java
@FunctionalInterface
interface Calculator {
    int operate(int a, int b);
}

public class Main {
    public static void main(String[] args) {
        Calculator add = (a, b) -> a + b;
        Calculator mul = (a, b) -> a * b;

        System.out.println(add.operate(3, 4));
        System.out.println(mul.operate(3, 4));
    }
}
```

### Output

```text
7
12
```

---

## Question 62 (Hard)

### Problem Statement

Write a Java program to filter even numbers from a list using Stream.

### Solution

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);

        List<Integer> evens = nums.stream()
                                  .filter(n -> n % 2 == 0)
                                  .collect(Collectors.toList());

        System.out.println(evens);
    }
}
```

### Output

```text
[2, 4, 6, 8]
```

---

## Question 63 (Hard)

### Problem Statement

Write a Java program to square each number in a list using Stream's map.

### Solution

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);

        List<Integer> squares = nums.stream()
                                    .map(n -> n * n)
                                    .collect(Collectors.toList());

        System.out.println(squares);
    }
}
```

### Output

```text
[1, 4, 9, 16, 25]
```

---

## Question 64 (Hard)

### Problem Statement

Write a Java program to find the sum of numbers using Stream's reduce.

### Solution

```java
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);

        int sum = nums.stream().reduce(0, Integer::sum);

        System.out.println(sum);
    }
}
```

### Output

```text
15
```

---

## Question 65 (Hard)

### Problem Statement

Write a Java program to collect stream results into a Set.

### Solution

```java
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Alice", "Charlie");

        Set<String> uniqueNames = names.stream().collect(Collectors.toSet());

        System.out.println(uniqueNames);
    }
}
```

### Output

```text
[Bob, Alice, Charlie]
```

---

## Question 66 (Hard)

### Problem Statement

Write a Java program to demonstrate the use of Optional class.

### Solution

```java
import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Optional<String> opt = Optional.ofNullable(null);

        System.out.println(opt.orElse("Default Value"));

        Optional<String> opt2 = Optional.of("Java");
        opt2.ifPresent(System.out::println);
    }
}
```

### Output

```text
Default Value
Java
```

---

## Question 67 (Hard)

### Problem Statement

Write a Java program to print elements using Stream's forEach.

### Solution

```java
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Tom", "Jerry", "Spike");

        names.stream().forEach(System.out::println);
    }
}
```

### Output

```text
Tom
Jerry
Spike
```

---

## Question 68 (Hard)

### Problem Statement

Write a Java program to demonstrate method references.

### Solution

```java
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Java", "Python", "Go");

        names.forEach(System.out::println);
    }
}
```

### Output

```text
Java
Python
Go
```

---

## Question 69 (Hard)

### Problem Statement

Write a Java program to sort objects using Comparable.

### Solution

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Student implements Comparable<Student> {
    String name;
    int marks;

    Student(String name, int marks){
        this.name = name;
        this.marks = marks;
    }

    @Override
    public int compareTo(Student s){
        return Integer.compare(this.marks, s.marks);
    }

    @Override
    public String toString(){
        return name + "(" + marks + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<>();
        list.add(new Student("Bob", 80));
        list.add(new Student("Alice", 90));
        list.add(new Student("Charlie", 70));

        Collections.sort(list);
        System.out.println(list);
    }
}
```

### Output

```text
[Charlie(70), Bob(80), Alice(90)]
```

---

## Question 70 (Hard)

### Problem Statement

Write a Java program to sort objects using Comparator.

### Solution

```java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class Product {
    String name;
    double price;

    Product(String name, double price){
        this.name = name;
        this.price = price;
    }

    @Override
    public String toString(){
        return name + "($" + price + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        List<Product> list = new ArrayList<>();
        list.add(new Product("Pen", 5.0));
        list.add(new Product("Book", 20.0));
        list.add(new Product("Bag", 50.0));

        list.sort(Comparator.comparingDouble(p -> p.price));
        System.out.println(list);
    }
}
```

### Output

```text
[Pen($5.0), Book($20.0), Bag($50.0)]
```

---

## Question 71 (Hard)

### Problem Statement

Write a Java program to sort employees by name using Comparator.

### Solution

```java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class Employee {
    String name;
    int id;

    Employee(int id, String name){
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString(){
        return id + "-" + name;
    }
}

public class Main {
    public static void main(String[] args) {
        List<Employee> list = new ArrayList<>();
        list.add(new Employee(3, "Charlie"));
        list.add(new Employee(1, "Alice"));
        list.add(new Employee(2, "Bob"));

        list.sort(Comparator.comparing(e -> e.name));
        System.out.println(list);
    }
}
```

### Output

```text
[1-Alice, 2-Bob, 3-Charlie]
```

---

## Question 72 (Hard)

### Problem Statement

Write a Java program to implement the Singleton design pattern.

### Solution

```java
class Singleton {
    private static Singleton instance;

    private Singleton(){}

    public static Singleton getInstance(){
        if(instance == null){
            instance = new Singleton();
        }
        return instance;
    }

    public void show(){
        System.out.println("Singleton Instance");
    }
}

public class Main {
    public static void main(String[] args) {
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();

        s1.show();
        System.out.println(s1 == s2);
    }
}
```

### Output

```text
Singleton Instance
true
```

---

## Question 73 (Hard)

### Problem Statement

Write a Java program to implement the Factory design pattern.

### Solution

```java
interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw(){ System.out.println("Drawing Circle"); }
}

class Square implements Shape {
    public void draw(){ System.out.println("Drawing Square"); }
}

class ShapeFactory {
    public Shape getShape(String type){
        if(type.equalsIgnoreCase("circle")) return new Circle();
        else if(type.equalsIgnoreCase("square")) return new Square();
        return null;
    }
}

public class Main {
    public static void main(String[] args) {
        ShapeFactory factory = new ShapeFactory();
        Shape s1 = factory.getShape("circle");
        Shape s2 = factory.getShape("square");

        s1.draw();
        s2.draw();
    }
}
```

### Output

```text
Drawing Circle
Drawing Square
```

---

## Question 74 (Hard)

### Problem Statement

Write a Java program to implement the Builder design pattern.

### Solution

```java
class User {
    private String name;
    private int age;
    private String email;

    private User(Builder b){
        this.name = b.name;
        this.age = b.age;
        this.email = b.email;
    }

    public static class Builder {
        private String name;
        private int age;
        private String email;

        public Builder setName(String n){ this.name = n; return this; }
        public Builder setAge(int a){ this.age = a; return this; }
        public Builder setEmail(String e){ this.email = e; return this; }

        public User build(){ return new User(this); }
    }

    @Override
    public String toString(){
        return name + ", " + age + ", " + email;
    }
}

public class Main {
    public static void main(String[] args) {
        User u = new User.Builder()
                        .setName("Alice")
                        .setAge(25)
                        .setEmail("alice@test.com")
                        .build();

        System.out.println(u);
    }
}
```

### Output

```text
Alice, 25, alice@test.com
```

---

## Question 75 (Hard)

### Problem Statement

Write a Java program to find the factorial of a number using recursion.

### Solution

```java
public class Main {

    static int factorial(int n){
        if(n <= 1) return 1;
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(factorial(6));
    }
}
```

### Output

```text
720
```

---

## Question 76 (Hard)

### Problem Statement

Write a Java program to find the nth Fibonacci number using recursion.

### Solution

```java
public class Main {

    static int fib(int n){
        if(n <= 1) return n;
        return fib(n-1) + fib(n-2);
    }

    public static void main(String[] args) {
        System.out.println(fib(7));
    }
}
```

### Output

```text
13
```

---

## Question 77 (Hard)

### Problem Statement

Write a Java program to solve the Tower of Hanoi problem.

### Solution

```java
public class Main {

    static void hanoi(int n, char from, char to, char via){
        if(n == 1){
            System.out.println("Move disk 1 from " + from + " to " + to);
            return;
        }
        hanoi(n-1, from, via, to);
        System.out.println("Move disk " + n + " from " + from + " to " + to);
        hanoi(n-1, via, to, from);
    }

    public static void main(String[] args) {
        hanoi(3, 'A', 'C', 'B');
    }
}
```

### Output

```text
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
```

---

## Question 78 (Hard)

### Problem Statement

Write a Java program to implement merge sort.

### Solution

```java
import java.util.Arrays;

public class Main {

    static void merge(int[] arr, int l, int m, int r){
        int[] left = Arrays.copyOfRange(arr, l, m+1);
        int[] right = Arrays.copyOfRange(arr, m+1, r+1);

        int i = 0, j = 0, k = l;
        while(i < left.length && j < right.length){
            if(left[i] <= right[j]) arr[k++] = left[i++];
            else arr[k++] = right[j++];
        }
        while(i < left.length) arr[k++] = left[i++];
        while(j < right.length) arr[k++] = right[j++];
    }

    static void mergeSort(int[] arr, int l, int r){
        if(l < r){
            int m = (l + r) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m+1, r);
            merge(arr, l, m, r);
        }
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}
```

### Output

```text
[3, 9, 10, 27, 38, 43, 82]
```

---

## Question 79 (Hard)

### Problem Statement

Write a Java program to implement quick sort.

### Solution

```java
import java.util.Arrays;

public class Main {

    static int partition(int[] arr, int low, int high){
        int pivot = arr[high];
        int i = low - 1;
        for(int j=low; j<high; j++){
            if(arr[j] < pivot){
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    static void quickSort(int[] arr, int low, int high){
        if(low < high){
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        quickSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}
```

### Output

```text
[1, 5, 7, 8, 9, 10]
```

---

## Question 80 (Hard)

### Problem Statement

Write a Java program to perform inorder traversal of a binary tree.

### Solution

```java
class Node {
    int data;
    Node left, right;
    Node(int data){ this.data = data; }
}

public class Main {

    static void inorder(Node root){
        if(root == null) return;
        inorder(root.left);
        System.out.print(root.data + " ");
        inorder(root.right);
    }

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        inorder(root);
    }
}
```

### Output

```text
4 2 5 1 3
```

---

## Question 81 (Hard)

### Problem Statement

Write a Java program to perform preorder traversal of a binary tree.

### Solution

```java
class Node {
    int data;
    Node left, right;
    Node(int data){ this.data = data; }
}

public class Main {

    static void preorder(Node root){
        if(root == null) return;
        System.out.print(root.data + " ");
        preorder(root.left);
        preorder(root.right);
    }

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        preorder(root);
    }
}
```

### Output

```text
1 2 4 5 3
```

---

## Question 82 (Hard)

### Problem Statement

Write a Java program to perform postorder traversal of a binary tree.

### Solution

```java
class Node {
    int data;
    Node left, right;
    Node(int data){ this.data = data; }
}

public class Main {

    static void postorder(Node root){
        if(root == null) return;
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.data + " ");
    }

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        postorder(root);
    }
}
```

### Output

```text
4 5 2 3 1
```

---

## Question 83 (Hard)

### Problem Statement

Write a Java program to perform Breadth First Search (BFS) on a graph.

### Solution

```java
import java.util.*;

public class Main {

    static void bfs(Map<Integer, List<Integer>> graph, int start){
        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();

        queue.add(start);
        visited.add(start);

        while(!queue.isEmpty()){
            int node = queue.poll();
            System.out.print(node + " ");

            for(int next : graph.getOrDefault(node, new ArrayList<>())){
                if(!visited.contains(next)){
                    visited.add(next);
                    queue.add(next);
                }
            }
        }
    }

    public static void main(String[] args) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(1, Arrays.asList(2, 3));
        graph.put(2, Arrays.asList(4));
        graph.put(3, Arrays.asList(4, 5));
        graph.put(4, Arrays.asList(6));
        graph.put(5, Arrays.asList(6));

        bfs(graph, 1);
    }
}
```

### Output

```text
1 2 3 4 5 6
```

---

## Question 84 (Hard)

### Problem Statement

Write a Java program to perform Depth First Search (DFS) on a graph.

### Solution

```java
import java.util.*;

public class Main {

    static void dfs(Map<Integer, List<Integer>> graph, int node, Set<Integer> visited){
        if(visited.contains(node)) return;
        visited.add(node);
        System.out.print(node + " ");

        for(int next : graph.getOrDefault(node, new ArrayList<>())){
            dfs(graph, next, visited);
        }
    }

    public static void main(String[] args) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(1, Arrays.asList(2, 3));
        graph.put(2, Arrays.asList(4));
        graph.put(3, Arrays.asList(5));
        graph.put(4, Arrays.asList(6));

        dfs(graph, 1, new HashSet<>());
    }
}
```

### Output

```text
1 2 4 6 3 5
```

---

## Question 85 (Hard)

### Problem Statement

Write a Java program to find the nth Fibonacci using Dynamic Programming (memoization).

### Solution

```java
import java.util.HashMap;
import java.util.Map;

public class Main {

    static Map<Integer, Long> memo = new HashMap<>();

    static long fib(int n){
        if(n <= 1) return n;
        if(memo.containsKey(n)) return memo.get(n);
        long result = fib(n-1) + fib(n-2);
        memo.put(n, result);
        return result;
    }

    public static void main(String[] args) {
        System.out.println(fib(40));
    }
}
```

### Output

```text
102334155
```

---

## Question 86 (Hard)

### Problem Statement

Write a Java program to solve the climbing stairs problem using DP.

### Solution

```java
public class Main {

    static int climb(int n){
        if(n <= 2) return n;
        int[] dp = new int[n+1];
        dp[1] = 1;
        dp[2] = 2;
        for(int i=3; i<=n; i++){
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }

    public static void main(String[] args) {
        System.out.println(climb(5));
    }
}
```

### Output

```text
8
```

---

## Question 87 (Hard)

### Problem Statement

Write a Java program to solve the Two Sum problem using HashMap.

### Solution

```java
import java.util.HashMap;
import java.util.Arrays;
import java.util.Map;

public class Main {

    static int[] twoSum(int[] nums, int target){
        Map<Integer, Integer> map = new HashMap<>();
        for(int i=0; i<nums.length; i++){
            int comp = target - nums[i];
            if(map.containsKey(comp)){
                return new int[]{map.get(comp), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        System.out.println(Arrays.toString(twoSum(nums, 9)));
    }
}
```

### Output

```text
[0, 1]
```

---

## Question 88 (Hard)

### Problem Statement

Write a Java program to group anagrams from a list of strings.

### Solution

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};

        Map<String, List<String>> map = new HashMap<>();

        for(String w : words){
            char[] arr = w.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(w);
        }

        System.out.println(new ArrayList<>(map.values()));
    }
}
```

### Output

```text
[[eat, tea, ate], [tan, nat], [bat]]
```

---

## Question 89 (Hard)

### Problem Statement

Write a Java program to demonstrate ExecutorService with multiple tasks.

### Solution

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        for(int i=1; i<=3; i++){
            int taskId = i;
            executor.submit(() -> System.out.println("Task " + taskId + " executed"));
        }

        executor.shutdown();
    }
}
```

### Output

```text
Task 1 executed
Task 2 executed
Task 3 executed
```

---

## Question 90 (Hard)

### Problem Statement

Write a Java program to demonstrate CompletableFuture.

### Solution

```java
import java.util.concurrent.CompletableFuture;

public class Main {
    public static void main(String[] args) throws Exception {
        CompletableFuture<String> future = CompletableFuture
                .supplyAsync(() -> "Hello")
                .thenApply(s -> s + " World")
                .thenApply(String::toUpperCase);

        System.out.println(future.get());
    }
}
```

### Output

```text
HELLO WORLD
```

---

## Question 91 (Hard)

### Problem Statement

Write a Java program to demonstrate a deadlock between two threads.

### Solution

```java
public class Main {

    static final Object lock1 = new Object();
    static final Object lock2 = new Object();

    public static void main(String[] args) {

        Thread t1 = new Thread(() -> {
            synchronized (lock1){
                System.out.println("Thread 1: holding lock1");
                try { Thread.sleep(50); } catch (Exception e){}
                synchronized (lock2){
                    System.out.println("Thread 1: acquired lock2");
                }
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (lock2){
                System.out.println("Thread 2: holding lock2");
                try { Thread.sleep(50); } catch (Exception e){}
                synchronized (lock1){
                    System.out.println("Thread 2: acquired lock1");
                }
            }
        });

        t1.start();
        t2.start();
    }
}
```

### Output

```text
Thread 1: holding lock1
Thread 2: holding lock2
(Program hangs - deadlock)
```

---

## Question 92 (Hard)

### Problem Statement

Write a Java program to implement Producer-Consumer using BlockingQueue.

### Solution

```java
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(5);

        Thread producer = new Thread(() -> {
            try {
                for(int i=1; i<=3; i++){
                    queue.put(i);
                    System.out.println("Produced: " + i);
                }
            } catch (Exception e){}
        });

        Thread consumer = new Thread(() -> {
            try {
                for(int i=1; i<=3; i++){
                    int val = queue.take();
                    System.out.println("Consumed: " + val);
                }
            } catch (Exception e){}
        });

        producer.start();
        producer.join();
        consumer.start();
        consumer.join();
    }
}
```

### Output

```text
Produced: 1
Produced: 2
Produced: 3
Consumed: 1
Consumed: 2
Consumed: 3
```

---

## Question 93 (Hard)

### Problem Statement

Write a Java program to demonstrate JDBC connection (concept example).

### Solution

```java
import java.sql.Connection;
import java.sql.DriverManager;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String pass = "password";

        try (Connection conn = DriverManager.getConnection(url, user, pass)) {
            if(conn != null){
                System.out.println("Connected to DB");
            }
        } catch (Exception e){
            System.out.println("Connection failed: " + e.getMessage());
        }
    }
}
```

### Output

```text
Connected to DB
```

---

## Question 94 (Hard)

### Problem Statement

Write a Java program to fetch records from a database using JDBC ResultSet.

### Solution

```java
import java.sql.*;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";

        try (Connection conn = DriverManager.getConnection(url, "root", "password");
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT id, name FROM users")) {

            while(rs.next()){
                System.out.println(rs.getInt("id") + " - " + rs.getString("name"));
            }
        } catch (Exception e){
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Output

```text
1 - Alice
2 - Bob
3 - Charlie
```

---

## Question 95 (Hard)

### Problem Statement

Write a Java program to insert a record using PreparedStatement.

### Solution

```java
import java.sql.*;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String sql = "INSERT INTO users(name, age) VALUES (?, ?)";

        try (Connection conn = DriverManager.getConnection(url, "root", "password");
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, "David");
            ps.setInt(2, 28);

            int rows = ps.executeUpdate();
            System.out.println(rows + " row inserted");
        } catch (Exception e){
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Output

```text
1 row inserted
```

---

## Question 96 (Hard)

### Problem Statement

Write a JUnit 5 test case for an addition method.

### Solution

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class Calculator {
    public int add(int a, int b){
        return a + b;
    }
}

public class CalculatorTest {

    @Test
    void testAdd(){
        Calculator c = new Calculator();
        assertEquals(5, c.add(2, 3));
        assertEquals(0, c.add(-1, 1));
    }
}
```

### Output

```text
Test passed: testAdd
```

---

## Question 97 (Hard)

### Problem Statement

Write a Mockito test case to mock a service dependency.

### Solution

```java
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

interface UserService {
    String getUserName(int id);
}

public class UserServiceTest {

    @Test
    void testMock(){
        UserService mockService = mock(UserService.class);
        when(mockService.getUserName(1)).thenReturn("Alice");

        String name = mockService.getUserName(1);

        assertEquals("Alice", name);
        verify(mockService).getUserName(1);
    }
}
```

### Output

```text
Test passed: testMock
```

---

## Question 98 (Hard)

### Problem Statement

Write a Java program to display JVM memory information (heap and non-heap).

### Solution

```java
public class Main {
    public static void main(String[] args) {
        Runtime rt = Runtime.getRuntime();

        long total = rt.totalMemory();
        long free = rt.freeMemory();
        long max = rt.maxMemory();

        System.out.println("Total Memory: " + total / (1024*1024) + " MB");
        System.out.println("Free Memory : " + free / (1024*1024) + " MB");
        System.out.println("Max Memory  : " + max / (1024*1024) + " MB");
        System.out.println("Used Memory : " + (total - free) / (1024*1024) + " MB");
    }
}
```

### Output

```text
Total Memory: 256 MB
Free Memory : 248 MB
Max Memory  : 4096 MB
Used Memory : 8 MB
```

---

## Question 99 (Hard)

### Problem Statement

Write a Java program to demonstrate garbage collection using finalize().

### Solution

```java
public class Main {

    @Override
    protected void finalize() throws Throwable {
        System.out.println("Object garbage collected");
    }

    public static void main(String[] args) {
        Main m1 = new Main();
        Main m2 = new Main();

        m1 = null;
        m2 = null;

        System.gc();

        System.out.println("End of main");
    }
}
```

### Output

```text
Object garbage collected
Object garbage collected
End of main
```

---

## Question 100 (Hard)

### Problem Statement

Write a Spring Boot REST controller that returns a greeting message.

### Solution

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Main {

    @GetMapping("/hello/{name}")
    public String hello(@PathVariable String name){
        return "Hello, " + name + "!";
    }

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
```

### Output

```text
GET http://localhost:8080/hello/Alice
Hello, Alice!
```

---

## End of 100 Java Programming Questions
