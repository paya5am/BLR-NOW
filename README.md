# BLR-NOW
BLR-NOW is a hyperlocal, map-first web application designed to instantly connect
Bengaluru's residents with community-driven events.

Core Features

**Interactive Map-First Discovery**
Visually browse and filter events based on location and proximity in a highly intuitive interface.

**Instant Event Creation**
Post a new community event in under 60 seconds with minimal friction, encouraging spontaneity.

**Community RSVP & Profiles**
See who's hosting and attending, complete with basic user profiles to foster trust and
accountability within the community.

**Geospacial Data**
See who's hosting and attending, complete with basic user profiles to foster trust and
accountability within the community.

Technology Foundation (MERN Stack)

**Frontend**: React, HTML, CSS offering a fast and responsive Single Page Application (SPA) experience.

**Backend**: Node.js and Express.js, providing a robust, scalable REST API for handling user requests and business logic.

**Database**: MongoDB, utilized specifically for its powerful native support for Geospatial Queries, essential for hyperlocal event filtering.




TO RUN

1. Prerequisites
Before you begin, ensure you have the following installed:

  * Node.js (v14 or higher)
  * npm (comes with Node.js)
  * MongoDB Compass (for database management and visualization)

  ```
  git clone <github.com/paya5am/BLR-NOW>
  cd <your-project-folder-name>
```

2. Database Setup
  * Open MongoDB Compass.
  * Connect to your local MongoDB instance (usually mongodb://localhost:27017).
  * Create a new database or ensure your connection string in the backend environment variables is correct.

3. Backend and Frontend setup
    ```
    cd server
    npm install
    npm start
    ```
    ``` 

    cd client
    npm install
    npm start
