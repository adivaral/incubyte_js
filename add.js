function add(numbers){
    let sum = 0;
    if(!numbers){
        return 0;
    } else {
        let nums = numbers.split(',');
        let negativeNum = [];

        sum = nums.reduce((acc,elem)=>{
                let parseNum = parseInt(elem);
                if(parseNum < 0){
                    negativeNum.push(parseNum);
                }
                return acc = acc + parseNum;
        },0);

        if (negativeNum.length && negativeNum.length <=1) throw new Error(`Negative numbers not allowed`);
        if (negativeNum.length) throw new Error(`Negative numbers not allowed: ${negativeNum.join(",")}`);
        return sum;
    }
}

// console.log(add('3,5,-1,-3'));

module.exports = add;