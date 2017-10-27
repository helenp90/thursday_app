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

    //push entry to firebase
    database.ref().push({
        employee: employee,
        role: role,
        startDate: startDate,
        rate: rate,
        dateadded: moment(firebase.database.ServerValue.TIMESTAMP).format("X")
    });
});

// listener for when any child is added
database.ref().on("child_added", function (snapshot) {


    $("#employee-tbl").find('tbody')
        .append($('<tr>')
            .append($('<td>')
                .append(snapshot.val().employee)
            )
            .append($('<td>')
                .append(snapshot.val().role)
            )
            .append($('<td>')
                .append(snapshot.val().startDate)
            )
            .append($('<td>')
                .append("month") //modify with calculate field
            )
            .append($('<td>')
                .append(snapshot.val().rate)
            )

            .append($('<td>')
                .append("total") //modify with calculate field
            )
        );

});