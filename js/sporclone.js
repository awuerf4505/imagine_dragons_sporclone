/*

In this file, comments are used to identify different parts of the code by letter.
The Sporclone Instructions file will refer to letters when describing the sequence of
steps necessary to create a working Sporclone game. Complete the project according
to the order of the NUMBERED instructions, not the order of the letters.

DO NOT DELETE THE LETTER COMMENTS AFTER YOU COMPLETE STEPS!!!!!

*/


// global vars (Do not edit!)
var correct;
var total;
var is_guessed;
var timer;
var time_remaining;
var playing;


/**
 * Sets initial game state.
 */
function setup()
{
    correct = 0;
    total = answers.length;

    is_guessed = new Array(answers.length);
    for (var i=0; i<is_guessed.length; i++)
    {
        is_guessed[i] = false;
    }

    time_remaining = time_limit;
    playing = false;

    document.getElementById('score').innerHTML = correct + "/" + total;

    // o.
    document.getElementById('time').innerHTML = formatTime(time_remaining);
}


/**
 * Starts the game and focus cursor in input field.
 */
function start()
{
    if (!playing)
    {
        playing = true;
        document.getElementById('start').value = "Give Up";
        document.getElementById('start').onclick = function() { end() };


        // p.

        seconds = 120;
        timer = setInterval(tick, 1000);

        // q.
        document.getElementById('time').style.color="#090";

        // r.
        document.getElementById('guess').focus();

    }
}


/**
 * Decreases seconds by one and updates time display. Ends game when time runs out.
 */
function tick()
{
    // s.
    document.getElementById('time').innerHTML = formatTime(time_remaining);

    // t.
    if (time_remaining <= 10)
    {
        document.getElementById('time').innerHTML = formatTime(time_remaining);
        document.getElementById('time').style.color="#ff0";
        time_remaining = time_remaining - 1;
        if (time_remaining < 0)
        {
          end();
        }
    }
    else if (time_remaining > 0)
    {
        document.getElementById('time').innerHTML = formatTime(time_remaining);
        time_remaining = time_remaining - 1;
    }



    //u.
    else
    {
      document.getElementById('time').style.color="#099";
    }

}


/**
 * Loops through answers array and compares current guess to each.
 * If correct answer is found, is_guessed is updated and answer is written
 * to appropriate HTML element. Guess is cleared.
 */
function check()
{
    if (playing)
    {
        var guess = document.getElementById('guess').value;

        for (var i=0; i<answers.length; i++)
        {
            if (!is_guessed[i])
            {
                var acceptable = answers[i].split('|');
                var preferred = acceptable[0];

                guess = guess.toUpperCase();

                for (var j=0; j<acceptable.length; j++)
                {
                    if (isAlphanumericMatch(acceptable[j].toUpperCase(), guess))
                    {
                        var id = 'answer' + i;

                        document.getElementById(id).innerHTML = preferred;
                        document.getElementById('guess').value = "";

                        is_guessed[i] = true;

                        // v.
                        correct++;

                        // w.
                        document.getElementById('score').innerHTML = correct + "/" + total;

                    }
                }
            }
        }

        if (correct == answers.length)
        {
            end();
        }
    }
}


/**
 * Shows all answers and highlights correct and incorrect answers different colors.
 */
function end()
{
    clearInterval(timer);

    // x.
    if (time_remaining < 0)
    {
    document.getElementById('time').style.color="#900";
    }

    for (var i=0; i<is_guessed.length; i++)
    {
        var id = 'answer' + i;

        var acceptable = answers[i].split('|');
        var preferred = acceptable[0];

        document.getElementById(id).innerHTML = preferred;

        // y.
        if (is_guessed[0]==true)
        {
          document.getElementById('answer0').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer0').style.backgroundColor="#d55";
        }
        if (is_guessed[1]==true)
        {
          document.getElementById('answer1').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer1').style.backgroundColor="#d55";
        }
        if (is_guessed[2]==true)
        {
          document.getElementById('answer2').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer2').style.backgroundColor="#d55";
        }
        if (is_guessed[3]==true)
        {
          document.getElementById('answer3').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer3').style.backgroundColor="#d55";
        }
        if (is_guessed[4]==true)
        {
          document.getElementById('answer4').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer4').style.backgroundColor="#d55";
        }
        if (is_guessed[5]==true)
        {
          document.getElementById('answer5').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer5').style.backgroundColor="#d55";
        }
        if (is_guessed[6]==true)
        {
          document.getElementById('answer6').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer6').style.backgroundColor="#d55";
        }
        if (is_guessed[7]==true)
        {
          document.getElementById('answer7').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer7').style.backgroundColor="#d55";
        }
        if (is_guessed[8]==true)
        {
          document.getElementById('answer8').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer8').style.backgroundColor="#d55";
        }
        if (is_guessed[9]==true)
        {
          document.getElementById('answer9').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer9').style.backgroundColor="#d55";
        }
        if (is_guessed[10]==true)
        {
          document.getElementById('answer10').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer10').style.backgroundColor="#d55";
        }
        if (is_guessed[11]==true)
        {
          document.getElementById('answer11').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer11').style.backgroundColor="#d55";
        }
        if (is_guessed[12]==true)
        {
          document.getElementById('answer12').style.backgroundColor="#5d5";
        }
        else
        {
          document.getElementById('answer12').style.backgroundColor="#d55";
        }
    }

}


/**
 * Creates a formatted time string.
 *
 * @param {number} Time in seconds.
 * @return {string} Time in mM:SS form.
 */
function formatTime(seconds)
{
    var mm = Math.floor(seconds / 60);
    var ss = seconds % 60;

    if (ss<10)
    {
        ss = "0" + ss;
    }

    return mm + ":" + ss;
}


/**
 * Compares two strings by removing all whitespace, symbols, and other punctuation is
 * stripped from strings prior to comparison.
 *
 * @param {string} str1 first item to compare
 * @param {string} str2 second item to compare
 * @returns {string} true if strings are alphanumeric match, false otherwise
 */
function isAlphanumericMatch(str1, str2)
{
    str1 = str1.replace(/[^a-zA-Z0-9]+/g, '');
    str2 = str2.replace(/[^a-zA-Z0-9]+/g, '');

    // z.
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    if (str1 == str2)
    {
        return true;
    }
    else
    {
        return false;
    }
}
