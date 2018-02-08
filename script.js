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


    function setColors(colors, array) {
        for (var i = 0; i < array.length; i++) {
            array[i].children('.back').attr('class', 'back')
            array[i].children('.back').addClass(colors[i]).attr('data-color', colors[i]);

        }
    }
    function reset() {

    }

    //                                                   EVENT FUNCTIONS
    $startButton.click(function () {

        $playerInfo.slideDown(200);
        $grid.slideDown(200);
        $startButton.hide();
        shuffle(cardColors);
        setColors(cardColors, cellArray);

    })
    $resetButton.click(function () {
        $grid.hide();
        $playerInfo.hide();
        $cardsFront.show();
        $cardsBack.hide();
        $startButton.slideDown(800);

    })

    $cardsFront.click(function () {

        thisCard = $(this);
        thisCard.hide();
        thisCard.siblings('.back').show();
        cardsFlipped++;
        colorArray.push(thisCard.siblings('.back').attr('data-color'));
        cardArray.push(thisCard);
        cardChecker();
        winChecker();
    })

    function cardChecker() {
        if (cardsFlipped === 2) {
            
            var color1 = colorArray[0];
            var color2 = colorArray[1];
            console.log(color1, color2);
            if (color1 !== color2) {
                cardArray[0].show();
                cardArray[1].show();
                $('.' + color1).fadeOut(500);
                $('.' + color2).fadeOut(500);

            } else if (color1 === color2) {
                $('.' + color1).fadeOut(500);
                winCounter++;
            }
            tryCounter ++;
            cardsFlipped = 0;
            cardArray = [];
            colorArray = [];
            console.log(cardsFlipped, cardArray, colorArray, tryCounter ,winCounter)
            
        }
        

    }
    function winChecker () {
        if (winCounter === 8) {
            $playerInfo.hide();
            $grid.hide();
            $winForm.show();
            console.log("you won!");
        }
        if (tryCounter === 15) {
            $playerInfo.hide();
            $grid.hide();
            $loseForm.show();
            console.log("you lose!");
        }
    }

    //                                                   WORKFLOW
    $grid.hide();
    $playerInfo.hide();
    $cardsBack.hide();
    $winForm.hide();
    $loseForm.hide();



});