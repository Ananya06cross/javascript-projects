console.log("-- Multiplication Table of 5 --");

for (let i = 0; i <= 5; i++) {
    console.log('5 x ${i} = ${5 * i}');
}

console.log("\n-- First number > 10 divisible by 6 --")

let num = Number(prompt("enter a number: "));

while(true){
    if(num>10 && num%6===0){
        console.log("Found: ",num);
        break;
    }
    num++;
}

console.log("do-while with continue statement");

let j=0;
do{
    j++;
    if(j===2){
        continue;
    }

    console.log("number: ",j);
}while(j<5);



