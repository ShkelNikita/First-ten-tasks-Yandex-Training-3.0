const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) =>{
    if(err){
        console.error(err);
        return
    }

    let histogramm = {};
    let sortedInput = data.split('').sort();
    let max = 0;
    let result = [];

    for(let i = 0; i < sortedInput.length; i++){
        if(sortedInput[i] in histogramm){
            histogramm[sortedInput[i]] += 1;
            if(histogramm[sortedInput[i]] > max){
                max = histogramm[sortedInput[i]];
            }
        }else{
            if(sortedInput[i].match(/\S/)){
                histogramm[sortedInput[i]]= 1;
                max = Math.max(max, 1);
            }  
        }
    };

    let sortedKeys = Object.keys(histogramm).sort();

    for(let i = 0; i <= max; i++){
        for(let j = 0; j < Object.keys(histogramm).length; j++){
            if(max === i){
                result += sortedKeys[j];
            }else{        
                if(histogramm[sortedKeys[j]] >= max-i){
                    result += '#';
                }else{
                    result += ' ';
                }
            }
        }
        if(i !== max){result +='\n';}
    }


    fs.writeFile('output.txt', result.toString(), err =>{
        if(err){
            console.error(err);
            return
        }
    })
});