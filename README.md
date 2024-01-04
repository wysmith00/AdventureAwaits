# AdventureAwaits
Exercise Tracker that allows you to track your expeditions by posting and commenting along in your application

Pseudocode: 

// Initialize Express app
Initialize Express app

// Connect to MongoDB
Connect to MongoDB using Mongoose
    On successful connection, print "Connected to MongoDB"
    On connection error, print the error

// Create a Schema for Exercise
Define ExerciseSchema with fields like:
    - name (String)
    - duration (Number)
    - date (Date)

// Create a Model for Exercise based on the schema
Create ExerciseModel using ExerciseSchema

// Middleware to parse JSON bodies
Use body-parser middleware to parse JSON

// CRUD Operations:

// Create (POST)
Create a route to add a new exercise using POST method
    Parse the request body to get exercise data
    Create a new ExerciseModel instance with the data
    Save the instance to the database
    On success, send back the created exercise
    On error, send back the error message

// Read (GET)
Create a route to get all exercises using GET method
    Find all exercises in the database
    On success, send back the exercises
    On error, send back the error message

// Update (PUT)
Create a route to update an exercise using PUT method
    Get the exercise ID from the request parameters
    Find the exercise by ID and update it with the request body data
    On success, send back the updated exercise
    On error, send back the error message

// Delete (DELETE)
Create a route to delete an exercise using DELETE method
    Get the exercise ID from the request parameters
    Find the exercise by ID and delete it
    On success, send back a success message
    On error, send back the error message

// Start the server
Start the Express app on a specified port (e.g., 3000)
    On successful launch, print "Server running on port 3000"
