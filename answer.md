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


