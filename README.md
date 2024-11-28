# Easy Orders
***Easy Orders*** is a work-in-progress system designed to simplify and modernize the ordering process in bars and restaurants. Customers can access the digital menu by scanning a QR code, place orders independently, and track their status in real-time.

The project also includes a dashboard for restaurants, providing tools to manage orders and access valuable business insights.

### Planned Features
 - Digital Menu: Quick access to the restaurant's menu via QR codes.
 - Online Ordering: Customers can place orders directly without initial waiter interaction.
 - Real-Time Order Tracking: Customers can monitor the order status, from preparation to delivery, with automatic calculation of the service charge.
 - Restaurant Dashboard: Manage orders and access critical business data.
 - Technologies Used

### The project currently leverages the following technologies:

 - NestJS: A framework for building scalable and robust APIs.
 - TypeORM: An ORM for entity mapping and database management.
 - JWT (JSON Web Token): Handles user authentication and authorization.
 - Docker: Manages containers to streamline development and deployment environments.

### How to Run the Project
1. Clone the Repository
Start by cloning the repository to your local machine:

    git clone https://github.com/your-username/easy-orders.git
    cd easy-orders
   
3. Configure the .env File
Set up the environment variables by creating a .env file in the root of the project. This file should contain the necessary settings for the application to connect to the database and other services.

4. Start the Containers
Run the following command to start the Docker containers, which will set up the environment for the project:

    docker-compose up --build

4. Run Migrations
After the containers are up, you will need to run the migrations to set up the database schema:

    npx typeorm migration:run -d src/data-source.ts

5. Access the Application
The server will be running at the address specified in your .env file. You can now test the application in your local environment.

### Next Steps
 - Develop the dashboard routes for restaurant management.
 - Implement the logic for generating and reading QR codes.
 - Add the functionality for real-time order tracking.
 - This project is actively under development and will be updated with new features soon! Thank you for checking it out!
