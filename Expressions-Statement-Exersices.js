/**
 * Created by alstoyanov on 31/05/2017.
 */

function convertImperialUnits(inches){
    let foots=Math.floor(inches/12);
    let spare=inches%12;
    let result=`${foots}'-${spare}"`;

    return result;
}

function calculateInterest([principal, nominalInterest, compoundingPeriodMonths, timespanYears]){
    let fractionInterest= nominalInterest/100;
    let periodsInYear=12/compoundingPeriodMonths;
    let result=principal*Math.pow((1+fractionInterest/periodsInYear),(periodsInYear*timespanYears));
        //principal*(1+fractionInterest/periodsInYear)**(periodsInYear*timespanYears);
    return result.toFixed(2);
}

//9.	Now Playing
function getTrack([trackName, artist, trackDuration]) {
let result=`Now Playing: ${artist} - ${trackName} [${trackDuration}]`;

return result;
}

//10.	Compose Tag
function composeTag([location, alternateText]){
    let result = `<img src="${location}" alt="${alternateText}">`;

    return result;
}

//12. Binary to Decimal
function binaryToDecimal(binary){

    var decimalValue = parseInt(binary, 2);
    /*let decimalValue=0;

    for(let i =0; i<reverse.length;i++){
        decimalValue+= reverse[i]*Math.pow(2,i);
    }*/

    return decimalValue;
}

//14. Biggest of 3 Numbers
//(nums)=>Math.max(nums[0],nums[1], nums[2]);

//15. Point in Rectangle
function pointInRectangle(input) {
    let [x,y,xMin, xMax, yMin, yMax] = input.map(Number);

    if (x>=xMin && x<=xMax && y>=yMin && y<=yMax){
        console.log('inside')
    }
    else {
        console.log('outside')
    }
}

//15 Odd number
function oddNumber(input){
    for(let i=1; i<=input; i+=2){
        console.log(i);
    }
}

// 17.	Triangle of Dollars
function printTriangleOfDollars(rows) {
    for (let row=1; row<=rows; row++){
        console.log('$'.repeat(row));
    }
}

//19.	Quadratic Equation
function calculateQuadraticEquation(a, b, c){
    let discriminant=b*b-4*a*c;

    if (discriminant<0){
        console.log('No');
    }
    else if (discriminant==0){
        let x1=-b/(2*a);
        console.log(x1);
    }
    else{
        discriminant=b*b-4*a*c;
        let discSqrt=Math.sqrt(discriminant);
        let x1=(-b-discSqrt)/(2*a);
        let x2=(-b+discSqrt)/(2*a);

        console.log(x1);
        console.log(x2);
    }
}

calculateQuadraticEquation(1,
    -12,
36)
//console.log(printTriangleOfDollars(6));
//console.log(binaryToDecimal('1100'));
//console.log(composeTag(['smiley.gif', 'Smiley Face']));
//console.log(getTrack(['Number One', 'Nelly', '4:09']));
//console.log(calculateInterest([1500, 4.3, 3, 6]));
//console.log(convertImperialUnits(11));