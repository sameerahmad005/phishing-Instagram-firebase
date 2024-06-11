// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// Get a reference to the database service
var database = firebase.database();

// Listen for form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get the form values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Store the data in the Firebase database
  database.ref("users").push({
    username: username,
    password: password
  });

  // Clear the form
  document.getElementById("login-form").reset();

  // Display a success message
  alert("Data submitted successfully!");
});
