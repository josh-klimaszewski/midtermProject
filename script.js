$(function () {
    var $startButton = $('.startButton');
    var $playerInfo = $('.playerInfo');
    var $grid = $('content');
    var $resetButton = $('button');
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
    var $cell10 = $('.cel0');
    var $cell11 = $('.cell11');
    var $cell12 = $('.cell12');
    var $cell13 = $('.cell13');
    var $cell14 = $('.cell14');
    var $cell15 = $('.cell15');
    var $cell16 = $('.cell16');
    var cellArray = [$cell1, $cell2, $cell3, $cell4, $cell5, $cell6, $cell7, $cell8, 
                    $cell9, $cell10, $cell11, $cell12, $cell13, $cell14, $cell15, $cell16]
    var cardColors = ['red', 'red', 'blue', 'blue', 'orange', 'orange', 'yellow', 'yellow',
        'green', 'green', 'purple', 'purple', 'cyan', 'cyan', 'grey', 'grey'
    ]
       
    function setColors() {
        shuffle(cardColors);
        for (var i = 0; i < cellArray.length; i++) {
            cellArray[i].children('.back').addClass(cardColors[i]);
        }

    }
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
    // on load/reset: assign random color classes to each cell 
    // click start: show player info, content 
    $grid.hide();
    $playerInfo.hide();

    $startButton.click(function() {
        
        $playerInfo.slideDown(200);
        $grid.slideDown(200);
        $startButton.hide();
        setColors(cellArray);


    })
    // toggle between player 1 / player 2
    // click cell: hide back color, show front color
    // when 2 cells are shown:
    // if cell colors don't match, flip back over
    // if cell colors match, dissappear and give player 1 or 2 a point 
    // player wins at 5 points 
})

