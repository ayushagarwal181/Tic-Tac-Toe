var button = [];
for (var i=1; i<10; i++)
    button[i] = document.getElementById("cv" + i);

var context = [];
for (var i=1; i<10; i++)
    context[i] = button[i].getContext('2d');

var btdis = [];
for (var i=1; i<10; i++)
    btdis[i] = false;

var result = false;
var value = [];

function lp(x)
{
    if (!btdis[x] && !result)
    {
        btdis[x] = true;
        button[x].style.opacity = 0.5;
        value[x] = 'x';

        button[x].style.oTransform = "rotateY(180deg)";
        button[x].style.mozTransform = "rotateY(180deg)";
        button[x].style.webkitTransform = "rotateY(180deg)";

        // Setting Timeout to decrease the rotation Speed of the canvas...
        setTimeout(function ()
        {
            context[x].lineWidth = 6;
            context[x].beginPath();
            context[x].moveTo(20, 20);
            context[x].lineTo(80, 80)
            context[x].moveTo(80, 20);
            context[x].lineTo(20, 80);
            context[x].stroke();
            context[x].closePath();
                pcTurn();
        }, 300);
        setTimeout(checkForWinner, 700);
    }
}

function pcTurn()
{
    if(!result)
    {
        var r = Math.random();

        // Making Smart moves to Make PC Wins the Game...
        if (value[1] == '0' && value[2] == '0' && !btdis[3]) draw0(3);
        else if (value[1] == '0' && value[3] == '0' && !btdis[2]) draw0(2);
        else if (value[2] == '0' && value[3] == '0' && !btdis[1]) draw0(1);

        else if (value[4] == '0' && value[5] == '0' && !btdis[6]) draw0(6);
        else if (value[4] == '0' && value[6] == '0' && !btdis[5]) draw0(5);
        else if (value[5] == '0' && value[6] == '0' && !btdis[4]) draw0(4);

        else if (value[7] == '0' && value[8] == '0' && !btdis[9]) draw0(9);
        else if (value[7] == '0' && value[9] == '0' && !btdis[8]) draw0(8);
        else if (value[8] == '0' && value[9] == '0' && !btdis[7]) draw0(7);

        else if (value[1] == '0' && value[4] == '0' && !btdis[7]) draw0(7);
        else if (value[1] == '0' && value[7] == '0' && !btdis[4]) draw0(4);
        else if (value[4] == '0' && value[7] == '0' && !btdis[1]) draw0(1);

        else if (value[2] == '0' && value[5] == '0' && !btdis[8]) draw0(8);
        else if (value[2] == '0' && value[8] == '0' && !btdis[5]) draw0(5);
        else if (value[5] == '0' && value[8] == '0' && !btdis[2]) draw0(2);

        else if (value[3] == '0' && value[6] == '0' && !btdis[9]) draw0(9);
        else if (value[3] == '0' && value[9] == '0' && !btdis[6]) draw0(6);
        else if (value[6] == '0' && value[9] == '0' && !btdis[3]) draw0(3);

        else if (value[1] == '0' && value[5] == '0' && !btdis[9]) draw0(9);
        else if (value[1] == '0' && value[9] == '0' && !btdis[5]) draw0(5);
        else if (value[5] == '0' && value[9] == '0' && !btdis[1]) draw0(1);

        else if (value[3] == '0' && value[5] == '0' && !btdis[7]) draw0(7);
        else if (value[3] == '0' && value[7] == '0' && !btdis[5]) draw0(5);
        else if (value[5] == '0' && value[7] == '0' && !btdis[3]) draw0(3);

        // Making Smart to Not to Allow PC to Win the Game...
        else if (value[1] == 'x' && value[2] == 'x' && !btdis[3]) draw0(3);
        else if (value[1] == 'x' && value[3] == 'x' && !btdis[2]) draw0(2);
        else if (value[2] == 'x' && value[3] == 'x' && !btdis[1]) draw0(1);

        else if (value[4] == 'x' && value[5] == 'x' && !btdis[6]) draw0(6);
        else if (value[4] == 'x' && value[6] == 'x' && !btdis[5]) draw0(5);
        else if (value[5] == 'x' && value[6] == 'x' && !btdis[4]) draw0(4);

        else if (value[7] == 'x' && value[8] == 'x' && !btdis[9]) draw0(9);
        else if (value[7] == 'x' && value[9] == 'x' && !btdis[8]) draw0(8);
        else if (value[8] == 'x' && value[9] == 'x' && !btdis[7]) draw0(7);

        else if (value[1] == 'x' && value[4] == 'x' && !btdis[7]) draw0(7);
        else if (value[1] == 'x' && value[7] == 'x' && !btdis[4]) draw0(4);
        else if (value[4] == 'x' && value[7] == 'x' && !btdis[1]) draw0(1);

        else if (value[2] == 'x' && value[5] == 'x' && !btdis[8]) draw0(8);
        else if (value[2] == 'x' && value[8] == 'x' && !btdis[5]) draw0(5);
        else if (value[5] == 'x' && value[8] == 'x' && !btdis[2]) draw0(2);

        else if (value[3] == 'x' && value[6] == 'x' && !btdis[9]) draw0(9);
        else if (value[3] == 'x' && value[9] == 'x' && !btdis[6]) draw0(6);
        else if (value[6] == 'x' && value[9] == 'x' && !btdis[3]) draw0(3);

        else if (value[1] == 'x' && value[5] == 'x' && !btdis[9]) draw0(9);
        else if (value[1] == 'x' && value[9] == 'x' && !btdis[5]) draw0(5);
        else if (value[5] == 'x' && value[9] == 'x' && !btdis[1]) draw0(1);

        else if (value[3] == 'x' && value[5] == 'x' && !btdis[7]) draw0(7);
        else if (value[3] == 'x' && value[7] == 'x' && !btdis[5]) draw0(5);
        else if (value[5] == 'x' && value[7] == 'x' && !btdis[3]) draw0(3);

        else if (r < 0.1 && !btdis[1]) draw0(1);
        else if (r < 0.2 && !btdis[2]) draw0(2);
        else if (r < 0.3 && !btdis[3]) draw0(3);
        else if (r < 0.4 && !btdis[4]) draw0(4);
        else if (r < 0.5 && !btdis[5]) draw0(5);
        else if (r < 0.6 && !btdis[6]) draw0(6);
        else if (r < 0.7 && !btdis[7]) draw0(7);
        else if (r < 0.8 && !btdis[8]) draw0(8);
        else if (r < 1 && !btdis[9])   draw0(9);
        else
            pcTurn();
    }
}

function draw0(x)
{
    checkForWinner();
    if (!result)
    {
        btdis[x] = true;
        button[x].style.opacity = 0.5;
        value[x] = '0';

        button[x].style.oTransform = "rotateY(180deg)";
        button[x].style.mozTransform = "rotateY(180deg)";
        button[x].style.webkitTransform = "rotateY(180deg)";

        setTimeout(function () 
        {
            context[x].beginPath();
            context[x].lineWidth = 6;
            context[x].arc(50, 50, 34, 0, Math.PI * 2, false);
            context[x].stroke();
            context[x].closePath();
        }, 300);
    }
}

function checkForWinner()
{
    if (!result)
    {
        if ((value[1] == 'x' && value[2] == 'x' && value[3] == 'x') ||
            (value[4] == 'x' && value[5] == 'x' && value[6] == 'x') ||
            (value[7] == 'x' && value[8] == 'x' && value[9] == 'x') ||
            (value[1] == 'x' && value[4] == 'x' && value[7] == 'x') ||
            (value[2] == 'x' && value[5] == 'x' && value[8] == 'x') ||
            (value[3] == 'x' && value[6] == 'x' && value[9] == 'x') ||
            (value[1] == 'x' && value[5] == 'x' && value[9] == 'x') ||
            (value[3] == 'x' && value[5] == 'x' && value[7] == 'x'))
        {
            result = true;
            setTimeout(function ()
            {
                alert("Well Done You Won the Game...!!");
            }, 300);
        }
        else
        if ((value[1] == '0' && value[2] == '0' && value[3] == '0') ||
            (value[4] == '0' && value[5] == '0' && value[6] == '0') ||
            (value[7] == '0' && value[8] == '0' && value[9] == '0') ||
            (value[1] == '0' && value[4] == '0' && value[7] == '0') ||
            (value[2] == '0' && value[5] == '0' && value[8] == '0') ||
            (value[3] == '0' && value[6] == '0' && value[9] == '0') ||
            (value[1] == '0' && value[5] == '0' && value[9] == '0') ||
            (value[3] == '0' && value[5] == '0' && value[7] == '0'))
        {
            alert("You Lost. Better Luck Next Time...!!");
            result = true;
        }
        else
        if((value[1]=='x' || value[1]=='0') &&
           (value[2]=='x' || value[2]=='0') &&
           (value[3]=='x' || value[3]=='0') &&
           (value[4]=='x' || value[4]=='0') &&
           (value[5]=='x' || value[5]=='0') &&
           (value[6]=='x' || value[6]=='0') &&
           (value[7]=='x' || value[7]=='0') &&
           (value[8]=='x' || value[8]=='0') &&
           (value[9]=='x' || value[9]=='0'))
        {
            alert("It's a Draw. Please Try Again...!!");
            result = true;
        }     
    }
}