'use strict';
//////////////////////////////task1//////////////////////////

for(let i=0;i<=10;i+=2){
    console.log(`${i}`);
}

//////////////////////////task2////////////////////////////////

for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

//////////////////////////////////////task3///////////////////////

function removeSpace(str){
    return str.replace(/\s/g,'');
   
}
let str="sandra emad";
console.log(removeSpace(str));

//////////////////////////////task4///////////////////////////

function divisible(num){
    if(num%10==0)
    return 1;
    else
    return 0;
}
console.log(divisible(2));

/////////////////////////////task5/////////////////////////////

function vowel(s){
    let cnt=0;
    s=s.toLowerCase();
    for(let i=0;i<s.length;i++)
    {
      if(s[i]=='a'||s[i]=='o'||s[i]=='e'||s[i]=='u'||s[i]=='i')
      cnt++;
   }
   return cnt;
}
let s="sandra emad";
console.log(vowel(s));



