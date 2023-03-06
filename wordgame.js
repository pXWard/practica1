

alert("Words from words");
var prime_word = prompt("Enter your primary word");
var used = [], usedf = [], useds = [];
var move = 1;
able_to_continue = true;

while(able_to_continue){
    move = prompt("Which one is going to make a move(1 or 2)");
    var word = prompt("Player is making his move (the moment you want to stop the game, call the 'end'- command)");
    if(word != "end"){
        if(confirm("Do another player find that word appropriate?")){
            if (move == "1"){
                usedf.push(word);
                continue;}
            else {
                useds.push(word);
                continue;}
            }
        else
            {alert("Please redo your move");
            continue;}
        }        
            else able_to_continue = 0;
}
// function counting(arrayfirst, arraysecond, move){ 
//     if (move == 1)
//         i = 0;
//     if (move == 2)
//         i = 1;      
//     for(; i < arrayfirst.length; i += 2) {  // take every second element
//             arraysecond.push(arrayfirst[i]);
//     }
// return arraysecond;
// }

// alert(used);
// alert(counting(used, usedf, 1));
// alert(counting(used, useds, 2));
alert(usedf);
alert(useds);
if (usedf.length > useds.length){
    alert("First player was victorious!!!");}
else {
    alert("Second player was victorious!!!");}
window.close();