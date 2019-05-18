$(document).ready(function () {

    // initialize variables
    var wins = 0;
    console.log(wins);
    var losses = 0;
    console.log(losses);
    var targetNumber = 0;
    userScore = 0;
    console.log(userScore);

    // create arrays for random number generation and image array
    var jewelValue = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
    console.log(jewelValue);
    var imageArray = ["./assets/images/jewel1.jpg", "./assets/images/jewel2.jpg", "./assets/images/jewel3.jpg", "./assets/images/jewel4.jpg"]
    console.log(imageArray);
 
    // calculates random computer guess
    function calculateTarget() {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        // show this on the page
        $("#cpuGuess").html("<h1>" + targetNumber + "</h1>"); 
    }
    // run the above function
    calculateTarget();

    // tabulates wins
    function winCount () {
        if (userScore === targetNumber) {
        wins++;
        alert("You win! Congrats!");
        // show this on the page
        $("#wins").html("<h3>" + "Wins:" + "<br>" + wins + "</h3>");
        } else {
            wins = "";
        } 
    }
    // run the above function
    winCount();



});