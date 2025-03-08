# Social Network API  

## Features & Functionality  

### Server & Database Initialization  
- **Starting the Application:**  
  - When the command to invoke the application is entered, the server starts, and Mongoose models are synced to the MongoDB database.  

### API Endpoints  

#### Retrieving Data  
- **GET Requests:**  
  - When API GET routes for **users** and **thoughts** are accessed in **Insomnia**, the corresponding data is displayed in a formatted JSON response.  

#### Managing Users & Thoughts  
- **POST, PUT, and DELETE Requests:**  
  - API routes allow successful creation, updating, and deletion of **users** and **thoughts** in the database.  

#### Handling Reactions & Friendships  
- **POST and DELETE Requests:**  
  - Users can **add and remove friends** from their friend list.  
  - Reactions to thoughts can be **created and deleted** successfully. 