// import React from 'react';
//USE FUNCTIONAL COMPONENTS, they DON'T HAVE THEIR OWN THIS (not for obj. methods)

const GenNumbers= (props) => { 
    var originalArray =[];
    var temp48 = [];

    originalArray = Array.from({length: 10}, (v, i) => i); // generate sequenced array 
    // OR:  const range = (start, stop, step) => Array.from({ length: (stop - start) / step }, (_, i) => start + (i * step));
    // var originalArray = Object.keys(range(start, stop, step));
    console.log('Original Array is :'); 
    console.log(originalArray); 


    // 1 QUESTION  ------ Get all the numbers that are bigger than 4 and smaller than 8 in the originalArray - print them in the console

    //iterate thru original Array
    for(var i=0; i< originalArray.length; i++) {
        //apply conditions
        if((originalArray[i] > 4)&(originalArray[i] < 8)) {
            //append vals to new arr temp48
            temp48.push(originalArray[i]);
        } 
    }
    console.log('First question: numbers that are bigger than 4 and smaller than 8 ');
    console.log(temp48);


    // 2 QUESTION  ------- Multiple all the numbers that are bigger than 4 and smaller than 8 in the originalArray, by 10 - print them in the console

    //multiply the result from previous by 10
    var multi10 = temp48.map(function(num) {
        return num * 10;
    });
    console.log('Second question: multiply the result from previous by 10');
    console.log(multi10);


    // 3 QUESTION  ------- Calculate the sum of the numbers that are bigger than 4 and smaller than 8, multiplied by 10 - print it in the consol

    //multiply the SUM of prev. result by 10, use Array.prototype.reduce() 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // 5+6+7
    console.log('Third question: multiply the SUM of prev. result by 10');
    console.log((temp48.reduce(reducer))*10);
    // expected output: 180

    //should be empty I added onClick for fun
    return (
        null
        // <div onClick={genNumbers}> 
        //  React.createElement('div', null, React.createElement('h1' ,'Hi this is Daniella'))); 
        //     {/* // <div>{props.children}</div> */}
        // </div>
    );
}
export default GenNumbers;


