
var nums = "0123456789", one_to_replace = "", hexnum, begin_end = "", first_ones = "", last_ones = "", one_to_replace_num = "";

function hex(s){
for (let i = 0; i < s.length;++i){

    if (nums.includes(s[i])){
        begin_end += String(i + 1);
        one_to_replace += s[i];

        if (nums.includes(s[i])){
            one_to_replace_num = Number(one_to_replace);
            hexnum = one_to_replace_num.toString(16);
            first_ones = s.slice(0, begin_end[0] - 1);
            last_ones = s.substr(begin_end[(begin_end.length - 1)]);
            }
            
            else{ one_to_replace = "";}
        }
    }
    return first_ones +'0x' + hexnum + last_ones;
}


console.log(hex('qwkqj258fkja'));   

