OOP and Java Basics
What are the four pillars of OOP? Explain with examples.
What is the difference between Abstract Class and Interface?
How does Garbage Collection work in Java? Explain GC algorithms.
What is the difference between Heap and Stack memory in Java?
Explain the final, finally, and finalize keywords.
What is ClassLoader in Java? How does it work?
2. Collections Framework
What is the difference between ArrayList and LinkedList?
Explain HashMap internals. How does rehashing work?
What are fail-fast and fail-safe iterators?
How does ConcurrentHashMap work internally?
What is the difference between HashSet, TreeSet, and LinkedHashSet?
Explain Comparable vs Comparator with examples.
What is the difference between synchronized collections and concurrent collections?
3. Multithreading and Concurrency
What is the difference between Thread and Runnable?
Explain synchronization in Java. What is the purpose of synchronized blocks and methods?
What is a volatile keyword in Java?
How does ReentrantLock work compared to synchronized?
What is the difference between Callable and Runnable?
Explain Thread Pool Executor and how it improves performance.
What is Future and CompletableFuture in Java 8?
4. Java 8 Features
What are Functional Interfaces? Explain Predicate, Function, Supplier, and Consumer.
Explain Lambda expressions and their advantages.
What is Stream API? How does it work internally?
What is the difference between map() and flatMap()?
Explain Optional class and its benefits.
How does Parallel Streams work?
What is the purpose of default and static methods in interfaces?
5. Exception Handling
What is the difference between Checked and Unchecked Exceptions?
Can we override a method and throw a different exception?
What is the purpose of the try-with-resources statement?
Explain Custom Exceptions and when to use them.
What is the difference between throw and throws?
6. Spring Framework (Spring Boot, Spring MVC, Spring Security)
What is Dependency Injection and how does it work in Spring?
What are the different types of Dependency Injection in Spring?
Explain Spring Bean Lifecycle.
What is the difference between @Component, @Service, @Repository?
What is the use of @Transactional annotation?
Explain Spring Boot AutoConfiguration.
What is the difference between @RestController and @Controller?
How does Spring Security work?
Explain OAuth2 authentication in Spring Security.
How to create and consume REST APIs using Spring Boot?
7. Hibernate & JPA
What is Hibernate ORM and how does it work?
What is Lazy vs Eager fetching in Hibernate?
What is N+1 problem in Hibernate, and how do you resolve it?
What is the difference between save(), persist(), and merge() in Hibernate?
Explain Criteria API and its advantages.
How does Hibernate caching work (First Level & Second Level Cache)?
What are JPA annotations like @Entity, @Table, @OneToMany, etc.?
8. Microservices and Cloud
What is Microservices architecture? How is it different from Monolithic?
Explain Service Discovery (Eureka) in Microservices.
How does Spring Cloud Config Server work?
What is Circuit Breaker pattern (Resilience4j/Hystrix)?
How do API Gateways like Zuul or Spring Cloud Gateway work?
How do you implement distributed tracing in Microservices?
What are Docker and Kubernetes? Why are they used in Microservices?
How does event-driven communication work in Microservices?
What is the difference between RabbitMQ and Kafka?
9. Performance Optimization & Best Practices
How do you optimize Java applications for performance?
What is JVM tuning, and what parameters do you tweak?
Explain profiling tools like JProfiler, VisualVM, or YourKit.
How do you handle memory leaks in Java?
What are best practices for writing efficient Java code?
Bonus: System Design
How do you design a scalable URL shortener like Bit.ly?
Explain Rate Limiting in APIs and how to implement it.
How do you design a highly available system?
What is CAP theorem, and how does it apply to databases?
How do you implement distributed caching?
Preparation Tips:
✔ Practice coding problems on Leetcode, CodeSignal, or GeeksForGeeks
✔ Revise design patterns (Singleton, Factory, Observer, Proxy, etc.)
✔ Understand database indexing, transactions, and NoSQL concepts
✔ Learn Docker, Kubernetes, Kafka, and Cloud platforms (AWS, GCP, Azure)
✔ Work on real-world projects and case studies

Would you like coding examples for any of these topics? 🚀








You said:
with answer
ChatGPT said:
Here are Java interview questions with answers for a 6-7 years experienced developer, covering Core Java, Multithreading, Collections, Java 8, Spring, Hibernate, and Microservices.

1. Core Java
Q1: What is the difference between an Abstract Class and an Interface?
Answer:
Feature	Abstract Class	Interface
Methods	Can have abstract and concrete methods	Only abstract methods (Java 7), default/static methods (Java 8)
Fields	Can have instance variables	Only constants (public static final)
Constructor	Can have a constructor	Cannot have a constructor
Multiple Inheritance	Cannot be extended by multiple classes	Can be implemented by multiple classes
Example:

java
Copy
Edit
abstract class Animal {
    abstract void makeSound();
}

interface Movable {
    void move();
}

class Dog extends Animal implements Movable {
    void makeSound() { System.out.println("Bark"); }
    public void move() { System.out.println("Running"); }
}
Q2: What is the difference between final, finally, and finalize?
Answer:
Keyword	Usage
final	Used with variables (constant), methods (cannot override), and classes (cannot inherit)
finally	Block that executes after try-catch, used for cleanup
finalize()	Method called by Garbage Collector before object destruction
Example:

java
Copy
Edit
final class Test {}

// finally block usage
try {
    int x = 5 / 0;
} catch (ArithmeticException e) {
    System.out.println("Exception caught");
} finally {
    System.out.println("Finally block executed");
}

// finalize method
protected void finalize() {
    System.out.println("Object is garbage collected");
}
2. Collections Framework
Q3: How does HashMap work internally?
Answer:
HashMap stores key-value pairs using an array of Node<K, V>.
It uses hashCode() and equals() to store and retrieve elements.
If hash collisions occur, it uses a Linked List (before Java 8) or Balanced Tree (Java 8+).
Default capacity = 16, Load Factor = 0.75 (resizing happens when 75% full).
Example:

java
Copy
Edit
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 25);
map.put("Bob", 30);
System.out.println(map.get("Alice"));
Q4: Difference between ArrayList and LinkedList?
Answer:
Feature	ArrayList	LinkedList
Data Structure	Dynamic array	Doubly Linked List
Access	Fast (O(1), index-based)	Slow (O(n), needs traversal)
Insertion/Deletion	Slow (O(n), shifting required)	Fast (O(1), just update pointers)
Memory Usage	Less (stores only values)	More (stores values + pointers)
3. Multithreading and Concurrency
Q5: What is the difference between synchronized and ReentrantLock?
Answer:
Feature	synchronized	ReentrantLock
Locking	Implicit	Explicit (lock() and unlock())
Flexibility	No timeout	Supports timeout
Fairness	No fairness	Can be fair (new ReentrantLock(true))
Interruptible Locking	No	Yes (lockInterruptibly())
Example:

java
Copy
Edit
ReentrantLock lock = new ReentrantLock();
lock.lock();
try {
    System.out.println("Critical Section");
} finally {
    lock.unlock();
}
Q6: What is volatile in Java?
Answer:
Ensures visibility of changes to a variable across threads.
Prevents caching or reordering of variable reads/writes.
Does not provide atomicity (use synchronized for that).
Example:

java
Copy
Edit
class SharedData {
    volatile int count = 0;
}
4. Java 8 Features
Q7: Difference between map() and flatMap()?
Answer:
map() transforms each element into one new element.
flatMap() transforms each element into multiple elements and flattens.
Example:

java
Copy
Edit
List<String> words = Arrays.asList("Hello", "World");
List<String> chars = words.stream().flatMap(str -> Arrays.stream(str.split(""))).collect(Collectors.toList());
System.out.println(chars); // [H, e, l, l, o, W, o, r, l, d]
Q8: How does Optional prevent NullPointerException?
Answer:
Wraps values to avoid null checks.
Use orElse(), orElseGet(), orElseThrow().
Example:

java
Copy
Edit
Optional<String> name = Optional.ofNullable(null);
System.out.println(name.orElse("Default"));
5. Spring Framework
Q9: Difference between @Controller and @RestController?
Answer:
Annotation	Purpose
@Controller	Returns View (JSP/Thymeleaf)
@RestController	Returns JSON (REST API)
Example:

java
Copy
Edit
@RestController
public class MyController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }
}
Q10: What is @Transactional in Spring?
Answer:
Ensures all DB operations inside a method are either fully committed or rolled back.
Works with Spring ORM (Hibernate, JPA).
Example:

java
Copy
Edit
@Transactional
public void transferMoney() {
    accountDao.debit(100);
    accountDao.credit(100);
}
6. Hibernate & JPA
Q11: What is Lazy vs Eager fetching?
Answer:
Fetch Type	Description
LAZY	Loads data only when needed (recommended)
EAGER	Loads related entities immediately (may cause performance issues)
Example:

java
Copy
Edit
@Entity
class Employee {
    @OneToMany(fetch = FetchType.LAZY)
    private List<Address> addresses;
}
7. Microservices & Cloud
Q12: What is Circuit Breaker pattern?
Answer:
Prevents cascading failures by stopping requests to a failing service.
Implemented using Resilience4j or Hystrix.
Example using Resilience4j:

java
Copy
Edit
@CircuitBreaker(name = "myService", fallbackMethod = "fallback")
public String callExternalService() {
    return restTemplate.getForObject("http://external-service", String.class);
}

public String fallback(Exception e) {
    return "Fallback response";
}
8. System Design & Best Practices
Q13: How to design a URL Shortener like Bit.ly?
Answer:
Components:
Database: MySQL/NoSQL (Redis)
Hashing: Base62 Encoding
Load Balancing: Nginx
Caching: Redis
Scaling: Microservices
This covers key Java interview questions & answers for a 6-7 years experienced developer. Need more details on any topic? 🚀







