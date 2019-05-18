$(document).ready(function () {

    // initialize variables
    var wins = 0;
    console.log(wins);
    var losses = 0;
    console.log(losses);
    var targetNumber = 0;
    var userScore = 0;
    console.log(userScore);
    var imagePath = ["/unit-4-game/assets/images/jewel1.jpg", "/unit-4-game/assets/images/jewel2.jpg", "/unit-4-game/assets/images/jewel3.jpg", "/unit-4-game/assets/images/jewel4.jpg"];
    // create arrays for random number generation and image array
    var jewelValue = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
    console.log(jewelValue);

    for (var i = 0; i < jewelValue.length; i++) {
        var jewel = $("<img>");
        jewel.attr("class", "jewel");
        jewel.attr("data-jewelRandomValue", jewelValue[i]);
        jewel.attr("src", imagePath[i]);
        $(".images").append(jewel);

    }

    // resets the game
    function resetGame() {
        userScore = 0;
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#cpuGuess").html("<p>" + "Number to Guess:" + "</br>" + "<h1>" + targetNumber + "</h1>");

        

        jewelValue = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];


    }

    $(".jewel").on("click", function () {

        console.log($(this).attr("data-jewelRandomValue"));
        userScore = userScore + parseInt($(this).attr("data-jewelRandomValue"));
        $("#userScore").html("<p>" + "User Score:" + "</br>" + "</p>" + "<h1>" + userScore + "</h1>");

        winCount();

    });


    // calculates random computer guess
    function calculateTarget() {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        // show this on the page
        $("#cpuGuess").html("<p>" + "Number to Guess:" + "</br>" + "<h1>" + targetNumber + "</h1>");
    }
    // run the above function
    calculateTarget();

    // tabulates wins and losses
    function winCount() {
        if (userScore === targetNumber) {
            wins++;
            alert("You win! Congrats!");
            // show this on the page
            $("#wins").html("<h3>" + wins + "</h3>");
            // resets game
            resetGame();
        } else {
            if (userScore > targetNumber) {
                losses++;
                alert("You lose! YOU SUCK!");
                // show this on the page
                $("#losses").html("<h3>" + losses + "</h3>");
                // resets game
                resetGame();
            }
        }
    }




});