## Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users directly see and interact with. It focuses on how the application looks, feels, and responds to user actions.

### User Interface
The frontend is responsible for designing and displaying the user interface. This includes layouts, buttons, forms, text, images, and colors. Its main goal is to make the application visually clear, attractive, and easy to use so that users can understand what to do without confusion.

### User Interaction
Frontend handles all user interactions such as clicking buttons, typing in input fields, submitting forms, and navigating between pages. It listens to user actions and updates the screen instantly, for example showing error messages, loading indicators, or updated data without reloading the page.

### Communication with Backend
The frontend communicates with the backend to send and receive data. When a user logs in, submits a form, or requests information, the frontend sends a request to the backend using APIs. After receiving the response, it processes the data and displays the result to the user in a readable format.

Overall, the frontend acts as a bridge between the user and the backend system, ensuring a smooth and interactive user experience.
## Q2. Role of Backend (BE)

The Backend (BE) is the part of a web application that works behind the scenes. It handles the logic, data, and security of the application, which users do not directly see.

### Server-side Processing
The backend is responsible for processing requests sent from the frontend. When a user performs an action like logging in or submitting a form, the backend receives the request, applies business logic, performs calculations or validations, and decides what response should be sent back to the frontend.

### Database Handling
Backend manages the database where application data is stored. It is responsible for creating, reading, updating, and deleting data such as user details, passwords, or application content. The backend ensures that data is stored correctly and retrieved efficiently when requested.

### Security and Authentication
The backend plays a major role in application security. It handles user authentication by verifying login credentials and controlling access to protected resources. It also protects data by validating inputs, encrypting sensitive information, and preventing unauthorized access.

In summary, the backend acts as the core engine of a web application, ensuring that data is processed securely and delivered correctly to the frontend.
## Q3. Business Logic

Business logic refers to the set of rules and decisions that define how a web application behaves according to real-world requirements. It controls how data is processed, what actions are allowed, and how different conditions are handled. Business logic sits between the frontend and the database and ensures that the application works according to business rules rather than just displaying data.

Business logic decides things such as validations, calculations, permissions, and workflows. It ensures that user actions follow predefined rules and that the application gives correct results in different situations.

### Real-World Examples of Business Logic

1. **E-commerce Order Processing**  
   In an online shopping application, business logic decides whether an order can be placed. It checks product availability, calculates the total price, applies discounts or coupons, adds taxes, and confirms payment before allowing the order to be completed.

2. **User Authentication and Authorization**  
   In a web application with user accounts, business logic verifies login credentials and decides what a user is allowed to access. For example, an admin can manage users, while a normal user can only view their own profile. These access rules are part of business logic.

3. **Banking or Payment Applications**  
   In banking systems, business logic controls money transfers. It checks account balance, daily transfer limits, transaction fees, and security rules before allowing a transaction. If any rule fails, the transaction is rejected.

4. **Online Booking Systems**  
   In applications like hotel or movie ticket booking, business logic ensures that a seat or room cannot be booked twice. It checks availability in real time and updates the database once the booking is confirmed.

Overall, business logic ensures that a web application follows real-world rules and operates correctly, securely, and consistently.
## Q4. Client–Server Model

The Client–Server Model is a system where work is divided between two parts: the client, which requests services, and the server, which provides those services. This model is commonly used in web applications to manage data and user interactions efficiently.

### Who is the Client
The client is the user-facing part of the application. It is usually a web browser, mobile app, or desktop application that allows users to interact with the system. The client sends requests to the server, such as asking for data, submitting forms, or performing actions like login or search.

### Who is the Server
The server is a system that stores data, processes requests, and applies business logic. It receives requests from the client, performs necessary operations like database access or validation, and sends back appropriate responses. The server runs continuously and can handle requests from multiple clients at the same time.

### How Communication Happens Between Them
Communication between the client and server happens over the internet using protocols like HTTP or HTTPS. The client sends a request to the server, often through an API endpoint. The server processes the request and returns a response, usually in formats like JSON or HTML, which the client then displays to the user.

In simple terms, the client asks for information or actions, and the server responds by processing and delivering the required result.
## Q5. Three-Tier Architecture

Three-Tier Architecture is a software design pattern used in web applications where the application is divided into three separate layers. Each layer has its own responsibility, which helps in better organization, scalability, and maintenance of the application.

### Presentation Layer
The presentation layer is the user interface of the application. It is the layer where users interact with the system through web pages, forms, buttons, and other visual elements. This layer is responsible for displaying data to the user and collecting user inputs. Technologies like HTML, CSS, and JavaScript are commonly used in this layer.

### Application (Business) Layer
The application layer contains the business logic of the web application. It processes user requests, applies rules and validations, performs calculations, and decides how data should be handled. This layer acts as a bridge between the presentation layer and the data layer, ensuring that the application behaves according to business requirements.

### Data Layer
The data layer is responsible for storing and managing application data. It includes databases and data access logic. This layer handles operations such as saving, retrieving, updating, and deleting data. It ensures data consistency and security.

### Why Three-Tier Architecture is Used
Three-tier architecture is used because it separates concerns, making the application easier to develop, test, and maintain. Each layer can be modified or scaled independently without affecting the others. It also improves security by restricting direct access to the database and enhances performance in large applications.

## Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language because it allows developers to build fast, scalable, and efficient server-side applications using a single programming language.

### Performance
JavaScript uses an event-driven, non-blocking architecture, which makes it highly efficient for handling multiple requests at the same time. This improves performance, especially in applications that require real-time communication such as chat applications or live updates.

### Ecosystem
JavaScript has a large and active ecosystem supported by tools like Node.js and package managers such as npm. Developers can easily find libraries and modules for tasks like authentication, database connection, and security, which speeds up development.

### Popular Backend Frameworks
There are several popular backend frameworks built using JavaScript. Examples include Express.js for building APIs, NestJS for structured and scalable applications, and Fastify for high-performance servers. These frameworks make backend development easier and more organized.

Overall, JavaScript is a powerful backend language that supports modern web application development with speed and flexibility.


