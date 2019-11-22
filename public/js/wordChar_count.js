var sentace =`123`;

function word_count(text) {
    let textArray = text.split(' ');
    return textArray.length;
}

function char_count(text) {
    let char = text.replace(/[\t\n" "]/gi,"").toLowerCase();
    return char.length;
}

 function mostCommnChars(chars){
    let char_array = new Array();
    let char = chars.replace(/[\t\n" "]/gi,"").toLowerCase();
    let current;
    let cnt = 0;
    let char_countOBJ = {};
    for (let i = 0; i <char.length; i++ ) {
        char_array.push(char[i])
    }
    char_array.sort();
    for(let j = 0; j < char_array.length; j++){
        if(char_array[j] != current){
            if (cnt > 0) {
                char_countOBJ[current] = cnt;
            }
            current = char_array[j];
            cnt = 1;
        } else{
            cnt++;
        }
        if (cnt > 0) {
            char_countOBJ[current] = cnt;
        }
    }
    let sorted = new Array();
    for (const key in char_countOBJ) {
        sorted.push([key,char_countOBJ[key]]);
    }
    sorted.sort(function(a, b) {
        return b[1] - a[1];
    });
    return sorted;
 }

 function mostCommnWords(text){
    let char_array = new Array();
    let char = text.replace(/[^\w\s\t\n]/gi, '').toLowerCase();
    let current;
    let cnt = 0;
    let char_countOBJ = {};
    char = char.split(" ");
    for (let i = 0; i <char.length; i++ ) {
        char_array.push(char[i])
    }
    char_array.sort();
    for(let j = 0; j < char_array.length; j++){
        if(char_array[j] != current){
            if (cnt > 0) {
                char_countOBJ[current] = cnt;
            }
            current = char_array[j];
            cnt = 1;
        } else{
            cnt++;
        }
        if (cnt > 0) {
            char_countOBJ[current] = cnt;
        }
    }
    let sorted = new Array();
    for (const key in char_countOBJ) {
        sorted.push([key,char_countOBJ[key]]);
    }
    sorted.sort(function(a, b) {
        return b[1] - a[1];
    });
    return sorted;
 }

console.log(mostCommnWords(sentace));