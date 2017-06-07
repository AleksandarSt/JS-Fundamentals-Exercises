/**
 * Created by Aleksandar on 04/06/2017.
 */

//1.	Inside Volume
function solve(input) {
    for(let i = 0; i < input.length; i+=3){
        let x=input[i];
        let y=input[i+1];
        let z=input[i+2];

        if (inVolume(x,y,z)){
            console.log('inside');
        }
        else {
            console.log('outside');
        }

    }

    function inVolume(x, y, z) {
        let x1=10, x2=50;
        let y1=20, y2=80;
        let z1=15, z2=50;

        if(x>=x1&&x<=x2){
            if(y>=y1&&y<=y2){
                if(z>=z1&&z<=z2){
                    return true;
                }
            }
        }

        return false;
    }
}

//2.	Road Radar
function checkRadar(input) {
    let speed=input[0];
    let zone=input[1];
    let limit=getLimit(zone);
    let infraction=getInfraction(speed,limit);
    if(infraction){
        console.log(infraction);
    }
    
    function getInfraction(speed,limit) {
        let overSpeed=speed-limit;
        if(overSpeed<=0){
            return false
        }
        else{
            if(overSpeed<=20){
                return 'speeding'
            }
            else if(overSpeed<=40){
                return 'excessive speeding'
            }
            else{
                return 'reckless driving'
            }
        }
        
    }
    
    function getLimit(zone){
        switch(zone){
            case 'motorway':return 130;
            case 'interstate':return 90;
            case 'city':return 50;
            case 'residential':return 20;
        }
    }
}

//3.	Template format
function printTemplate(input){
    let result='<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n'

    for(let i = 0; i < input.length; i+=2){
        let question=input[i];
        let answer=input[i+1];
        result+=addQuestionAndAnswer(question,answer);
    }

    result+='</quiz>\n';

    return result;

    function addQuestionAndAnswer(question, answer) {
        let text='';
        text=text + `  <question>\n    ${question}\n  </question>\n`
        text=text + `  <answer>\n    ${answer}\n  </answer>\n`
        return text
    }
}

//4.	Cooking by Numbers
function cookNumber(input) {
    let number=input[0];

    let calc = function(a, op) { return op(a) };
    let chop  = function(a) { return a/2};
    let dice = function(a) { return Math.sqrt(a) };
    let spice = function(a) { return a+1 };
    let bake = function(a) { return a*3 };
    let fillet = function(a) { return a*0.8 };


    for(let i = 1; i < input.length; i++){
        let operation=input[i];

        switch (operation){
            case 'chop': number=calc(number,chop); break;
            case 'dice': number=calc(number,dice);break;
            case 'spice': number=calc(number,spice);break;
            case 'bake': number=calc(number,bake);break;
            case 'fillet': number=calc(number,fillet);break;
        }

        console.log(number)
    }

    //return number
}

//5.	Modify Average
function modifyAverage(input) {
    let inputStr=input.toString();

    while (!isAverageHigherThanFive(inputStr)){
        inputStr+='9';
    }

    return inputStr;

    function isAverageHigherThanFive(inputStr) {
        let digitSum=0;
        let average=0;

        for(let i = 0; i < inputStr.length; i++){
            digitSum+=Number(inputStr[i]);
        }
        average=digitSum/inputStr.length;

        return average>5;
    }
}

//6. Validity checker
function checkValidity(input) {
    let x1=input[0];
    let y1=input[1];
    let x2=input[2];
    let y2=input[3];
    let x3=0;
    let y3=0;

    checkDistanceValidity(x1,y1,x3,y3);
    checkDistanceValidity(x2,y2,x3,y3);
    checkDistanceValidity(x1,y1,x2,y2);

    function findDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    function checkDistanceValidity(x1,y1,x2,y2) {

        if (Number.isInteger(findDistance(x1, y1, x2, y2))) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

        }
    }
}

//7.	Treasure Locator
function locateTreasures(input) {
    for(let i = 0; i < input.length; i+=2){
        let x=input[i];
        let y=input[i+1];
        let location=getTreasureLocation(x,y);

        console.log(location);
    }

    function getTreasureLocation(x, y) {

        if(isTreasureInIslandByCoordinates(x,y,1,1,3,3)){
            return 'Tuvalu';
        }
        else if(isTreasureInIslandByCoordinates(x,y,5,3,7,6)){
            return 'Samoa'
        }
        else if(isTreasureInIslandByCoordinates(x,y,8,0,9,1)){
            return 'Tokelau';
        }
        else if(isTreasureInIslandByCoordinates(x,y,0,6,2,8)){
            return 'Tonga'
        }
        else if(isTreasureInIslandByCoordinates(x,y,4,7,9,8)){
            return 'Cook';
        }
        else{
            return 'On the bottom of the ocean';
        }

    }

    function isTreasureInIslandByCoordinates(x,y,x1,y1,x2,y2){
       return (x>=x1&&x<=x2&&(y>=y1&&y<=y2));
    }
}

//10.DNA Helix
function generateDNASequence(input) {
    let sequence='ATCGTTAGGG';
    let sequenceCounter=0;
    for(let i = 0, j=0; i < input; i++, j+=2){

        if(sequenceCounter==0){
            sequenceCounter++;
            console.log(`**${sequence[j%10]}${sequence[(j+1)%10]}**`);
        }
        else if(sequenceCounter==1){
            sequenceCounter++;
            console.log(`*${sequence[j%10]}--${sequence[(j+1)%10]}*`);
        }
        else if(sequenceCounter==2){
            sequenceCounter++;
            console.log(`${sequence[j%10]}----${sequence[(j+1)%10]}`);
        }
        else if(sequenceCounter==3) {
            sequenceCounter++;
            console.log(`*${sequence[j%10]}--${sequence[(j+1)%10]}*`);
        }
        else{
            sequenceCounter=1;
            console.log(`**${sequence[j%10]}${sequence[(j+1)%10]}**`);
        }
    }
}


//generateDNASequence(10)
//console.log(locateTreasures([4, 2, 1.5, 6.5, 1, 3]));
//console.log(checkValidity([2, 1, 1, 1]));
//console.log(modifyAverage(101));
//console.log(cookNumber([32, 'chop', 'chop', 'chop', 'chop', 'chop']));
//console.log(printTemplate(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]));
//console.log(checkRadar([40, 'city']))
//console.log(solve([8, 20, 22]));
