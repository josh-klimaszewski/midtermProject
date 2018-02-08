$(function () {
    //                                                   VARIABLES
    var $startButton = $('.startButton');
    var $playerInfo = $('.playerInfo');
    var $grid = $('content');
    var $resetButton = $('.reset');
    var $cardsFront = $('.front');
    var $cardsBack = $('.back');
    var $winForm = $('.winForm');
    var $loseForm = $('.loseForm');
    var $attempts = $('.attempts');
    var $cell = $('.cell');
    var $cell1 = $('.cell1');
    var $cell2 = $('.cell2');
    var $cell3 = $('.cell3');
    var $cell4 = $('.cell4');
    var $cell5 = $('.cell5');
    var $cell6 = $('.cell6');
    var $cell7 = $('.cell7');
    var $cell8 = $('.cell8');
    var $cell9 = $('.cell9');
    var $cell10 = $('.cell10');
    var $cell11 = $('.cell11');
    var $cell12 = $('.cell12');
    var $cell13 = $('.cell13');
    var $cell14 = $('.cell14');
    var $cell15 = $('.cell15');
    var $cell16 = $('.cell16');
    var cellArray = [$cell1, $cell2, $cell3, $cell4, $cell5, $cell6, $cell7, $cell8,
        $cell9, $cell10, $cell11, $cell12, $cell13, $cell14, $cell15, $cell16
    ]
    var cardColors = ['red', 'red', 'blue', 'blue', 'orange', 'orange', 'yellow', 'yellow',
        'green', 'green', 'purple', 'purple', 'cyan', 'cyan', 'grey', 'grey'
    ]
    var cardsFlipped = 0;
    var colorArray = [];
    var cardArray = [];
    var tryCounter = 0;
    var thisCard;
    var winCounter = 0;
    //                                                   FUNCTIONS
    //Shuffle the cell cards
    function shuffle(array) {
        var counter = array.length;
        while (counter > 0) {
            var index = Math.floor(Math.random() * counter);
            counter--;

            var temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    //Assign the cards a color class
    function setColors(colors, array) {
        for (var i = 0; i < array.length; i++) {
            array[i].children('.back').attr('class', 'back')
            array[i].children('.back').addClass(colors[i]).attr('data-color', colors[i]);

        }
    }


    //                                                   EVENT FUNCTIONS
    //start button to begin the game
    $startButton.click(function () {

        $playerInfo.slideDown(200);
        $grid.slideDown(200);
        $startButton.hide();
        shuffle(cardColors);
        setColors(cardColors, cellArray);
        //shows the grid and player info form
    })

    //button to reset the grids, same function for play again button and reset button
    $resetButton.click(function () {

        $grid.hide();
        $playerInfo.hide();
        $winForm.hide();
        $loseForm.hide();
        $cardsFront.show();
        $cardsBack.hide();
        $startButton.slideDown(800);
        winCounter = 0;
        tryCounter = 0;
        $attempts.text('/15');

    })

    //shows the front of card
    $cardsFront.click(function () {
        thisCard = $(this);
        thisCard.hide();
        thisCard.siblings('.back').show();
        cardsFlipped++;
        colorArray.push(thisCard.siblings('.back').attr('data-color'));
        cardArray.push(thisCard);
        cardChecker();
        winChecker();
        updateAttempts();
    })

    //checks if the two cards have a match
    function cardChecker() {
        if (cardsFlipped === 2) {

            var color1 = colorArray[0];
            var color2 = colorArray[1];
            var card1 = cardArray[0];
            var card2 = cardArray[1];
            console.log(color1, color2);
            if (color1 !== color2) {
                setTimeout(function () {
                    card1.slideDown(1500);
                    card2.slideDown(1500);
                    $('.' + color1).slideUp(1500);
                    $('.' + color2).slideUp(1500);
                }, 500);
            } else if (color1 === color2) {
                setTimeout(function () {
                        $('.' + color1).slideUp(1500);
                    },
                    500);
                winCounter++;
            }
            tryCounter++;
            cardsFlipped = 0;
            cardArray = [];
            colorArray = [];
        }
    }

    function winChecker() {
        if (winCounter === 8) {
            $playerInfo.hide();
            $grid.hide();
            $winForm.show();
            winCounter = 0;
            tryCounter = 0;
            console.log("you won!");
        }
        if (tryCounter === 15) {
            $playerInfo.hide();
            $grid.hide();
            $loseForm.show();
            winCounter = 0;
            tryCounter = 0;
            console.log("you lose!");
        }
    }

    //turns the attempt number into string to show on screen
    function updateAttempts() {
        tryCounter.toString;
        $attempts.text(tryCounter + '/15');
    }


    //                                                   WORKFLOW
    $grid.hide();
    $playerInfo.hide();
    $cardsBack.hide();
    $winForm.hide();
    $loseForm.hide();



});