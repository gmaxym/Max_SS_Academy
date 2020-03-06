let str = "Lets all go on holiday somewhere very cold";
let arrStr = str.split(' '); //[0]I(0.1), [1]know(1.4), [2]JS(2.2),
 let minWord = arrStr[0].length; //1

for (let iA = 0; iA < arrStr.length; iA++){
    for (let i = 0; i < arrStr[iA].length; i++) {
            if (arrStr[iA].length < minWord) {
                minWord = arrStr[iA].length;
                };
    };
};

out.innerHTML += '<br> minWord = ' + minWord + '<br>' ;
