function calculateSpiceFlow(input){
    let yield=Number(input[0]);
    let extractedAmount=0;
    let workDAys=0;

    while (yield>=100)
    {
        extractedAmount+=yield-26;
        yield-=10;
        workDAys++;
    }

    if(extractedAmount<26){
        extractedAmount=0;
    }
    else{
        extractedAmount-=26;
    }

    console.log(workDAys);
    console.log(extractedAmount);
}

calculateSpiceFlow([ ' ' ])