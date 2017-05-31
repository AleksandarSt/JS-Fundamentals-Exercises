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

console.log(getTrack(['Number One', 'Nelly', '4:09']));
//console.log(calculateInterest([1500, 4.3, 3, 6]));
//console.log(convertImperialUnits(11));