$(function () {
    var $startButton = $('.startButton');
    var $resetButton = $('button');
    var $cell = $('.cell');
    // on load/reset: assign random color classes to each cell 
    var cardColors = ['red', 'red', 'blue', 'blue', 'orange', 'orange', 'yellow', 'yellow',
        'green', 'green', 'purple', 'purple', 'cyan', 'cyan', 'grey', 'grey'
    ]
    function setColors() {
        shuffle(cardColors);
        
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
    
    // click start: show player info, content 
    // toggle between player 1 / player 2
    // click cell: hide back color, show front color
    // when 2 cells are shown:
    // if cell colors don't match, flip back over
    // if cell colors match, dissappear and give player 1 or 2 a point 
    // player wins at 5 points 
})

// random array
// for (i = 0; i <= 15; i++) {
//     .addClass(array[i].toString)

// }