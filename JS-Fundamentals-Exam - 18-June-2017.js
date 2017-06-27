function calculateMaterial(base, increment){
    let steps=Math.ceil(base/2);
    let stone=0;
    let marble=0;
    let lapisLazuli=0;
    let gold=0;
    let height= Math.floor(steps*increment);
    let stepArea=0;
    let stoneArea=0;

    for(let i = 1; i <= steps; i++){

        if(i==steps){
            gold+=base*base*increment;
            break;
        }

        stepArea=base*base;
        stoneArea=(base-2)*(base-2);
        stone+=stoneArea*increment;

        if(i%5==0){
            lapisLazuli+=(stepArea-stoneArea)*increment;
        }
        else{
            marble+=(stepArea-stoneArea)*increment;
        }
        base-=2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}

function executeJanOperations(input){
    let numbers=[];
    let operations=[];

    while(true){
       let element=input.shift();

        if(Number.isInteger(element)){
            numbers.push(element)
        }
        else {
            operations.push(element)
        }

        if(numbers.length>=2&& operations.length>0){
            let firstOperand=numbers.pop();
            let secondOperand=numbers.pop();
            let operation=operations[0];
            let newOperand= calculateNewOperand(firstOperand, secondOperand, operation);

            operations.shift();

            numbers.push(newOperand);

            function calculateNewOperand(b, a, op) {

                switch (op) {
                    case '+': return a+b;
                    case '-': return a-b;
                    case '*': return a*b;
                    case '/': return a/b;
                }
            }
        }

        if(input.length==0)break;
    }

    if(numbers.length==1&&operations.length==0){
        console.log(numbers[0]);
    }
    else if(numbers.length<=1&&operations.length>0)
    {
        console.log('Error: not enough operands!')
    }
    else{
        console.log('Error: too many operands!')
    }
}

function calculateVotes(input){
    let summary = {};

    for(let i = 0; i < input.length; i++){
        let currentBallot=input[i];
        let [system, candidate, votes]= [currentBallot.system, currentBallot.candidate, currentBallot.votes];

        if(!summary.hasOwnProperty(system)){
            summary[system]= {}
        }

        if (!summary[system].hasOwnProperty(candidate)){
            summary[system][candidate]=0
        }

        let oldValues=summary[system][candidate];
        summary[system][candidate]=oldValues+votes;


        /*if(!summary.has(system)){
         summary.set(system, new Map());
         }
         if (!summary.get(system).has(candidate)){
         summary.get(system).set(candidate,0)
         }

         let oldVotes=summary.get(system).get(candidate);
         summary.get(system).set(candidate, oldVotes + votes);*/
    }


    console.log(summary);
}

calculateVotes([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
);
//executeJanOperations(['/']);
//calculateMaterial(12,1);