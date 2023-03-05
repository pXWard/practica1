let hexnum;
var nums = "0123456789", one_to_replace = "", begin_end = "", first_ones = "", last_ones = "";

function hex(s){
for (let i = 0; i < s.length;++i){
    if (nums.includes(s[i])){
        begin_end += String(i + 1);
        // console.log("b " + begin_end[2] + begin_end.length);
       
        one_to_replace += s[i];
        if (nums.includes(s[i])){
           
            var one_to_replace_num = Number(one_to_replace);
            // console.log("     " + one_to_replace);
            
            hexnum = one_to_replace_num.toString(16);
            first_ones = s.slice(0, begin_end[0] - 1);
            // var last_ones = s.slice(begin_end[begin_end.length], -2);
            
            last_ones = s.substr(begin_end[(begin_end.length - 1)]);
            // console.log("l " + last_ones);
           
            }
            else{/*console.log('0');*/ one_to_replace = "";}
            console.log(first_ones +'0x' + hexnum + last_ones);
        }
    }
}


hex('qwkqj258fkja');   

