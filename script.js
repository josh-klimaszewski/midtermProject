$(function () {
    //                                                   VARIABLES
    var $startButton = $('.startButton');
    var $playerInfo = $('.playerInfo');
    var $grid = $('content');
    var $resetButton = $('.reset');
    var $cardsFront = $('.front');
    var $cardsBack = $('.back');
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
            array[i].children('.back').attr('id', colors[i]);

        }
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

        colorArray.push(thisCard.siblings('.back').attr('id'));
        cardArray.push(thisCard);
        cardChecker();



    })

    function cardChecker() {

        if (cardsFlipped === 2) {
            

            if (colorArray[0] !== colorArray[1]) {
                cardArray[0].show();
                cardArray[1].show();
                $('#' + colorArray[0]).hide();
                $('#' + colorArray[1]).hide();

            } else {
                $('#' + colorArray[0]).hide();
                
            }
            tryCounter++;
            cardsFlipped = 0;
            cardArray = [];
            colorArray = [];
            console.log(cardsFlipped, cardArray, colorArray)
        }
    }


    //         if (colorArray[0] === colorArray[1]) {
    //             var thisColor = colorArray[0];
    //             $('#' + thisColor).hide();
    //         } else {
    //             var front1 = cardArray[0];
    //             var front2 = cardArray[1];
    //             var back1 = colorArray[0];
    //             var back2 = colorArray[1];
    //             front1.show();
    //             front2.show();
    //             $('#' + back1).hide();
    //             $('#' + back2).hide();
    //             console.log(front1, front2)
    //         }
    //     }
    //     tryCounter ++;
    //     cardsFlipped = 0;
    //     cardArray = [];
    //     colorArray = [];






    //                                                   WORKFLOW
    // on load/reset: 
    $grid.hide();
    $playerInfo.hide();
    $cardsBack.hide();


    // while (cardArray.length < 2) {
    //     console.log(cardArray);
    //     if (colorArray[0] === colorArray[1]) {
    //         cardArray[0].slideUp(300);
    //         cardArray[1].slideUp(300)
    //         cardsFlipped = 0;
    //         colorArray = [];
    //         cardArray = [];

    //     }





    //assign random color classes to each cell 
    // click start: show player info, content 

    // toggle between player 1 / player 2
    // click cell: hide back color, show front color
    // when 2 cells are shown:
    // if cell colors don't match, flip back over
    // if cell colors match, dissappear and give player 1 or 2 a point 
    // player wins at 5 points 
});