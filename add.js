function add(numbers){
    let sum = 0;
    if(!numbers){
        return 0;
    } else {
        let nums = numbers.split(',');
        sum = nums.reduce((acc,elem)=>{
            return acc = acc + parseInt(elem);
        },0);

        return sum;
    }
}

console.log(add('3,5'));

module.exports = add;