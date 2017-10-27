// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
// Initialize Firebase
var config = {
    // Initialize Firebase
    apiKey: "AIzaSyBNlgxnENucxsqYbXgyuA2MNAAshq__rVw",
    authDomain: "thursdaypp-9cc0d.firebaseapp.com",
    databaseURL: "https://thursdaypp-9cc0d.firebaseio.com",
    projectId: "thursdaypp-9cc0d",
    storageBucket: "thursdaypp-9cc0d.appspot.com",
    messagingSenderId: "48503668813"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
//var database = ...
var database = firebase.database();
// Capture Button Click

// Initial Values
var employee = "";
var role = "";
var startDate = 0;
var rate = "";

// Capture Button Cl
$("#submit").on("click", function (event) {
            event.preventDefault();

            employee = $("#employeeName").val().trim();
            role = $("#role").val().trim();
            startDate = $("#startDate").val().trim();
            rate = $("#rate").val().trim();


            database.ref().push({
                employee: employee,
                role: role,
                startDate: startDate,
                rate: rate,
                dateadded: firebase.database.ServerValue.TIMESTAMP
            });
        
            

            // Grabbed values from text boxes


            // Firebase watcher + initial loader HINT: .on("value")
            database.ref().on("child_added", function (snapshot) {

                console.log(snapshot);
                // Log everything that's coming out of snapshot
                let tblRow= $("<tr>");
                let empName = $("<td>");
                let role = $("<td>");
                let start = $("<td>");
                let months = $("<td>");
                let monthly = $("<td>");
                let total = $("<td>");

                total.html(snapshot.val().employee)
                $(".currentEmployee").append()
                // Handle the errors
            });
})