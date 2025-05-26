//multiline template literal to wrap the CSV data

var csvData = `0134138,Alan Smith,333-580-2254,70 inches
0134139   ,    Christina    Lee    ,  123            4126347 ,        130 cm
0134140,       Doug         Thomas       , 532           4126347, 158cm
`;


/*
Required output after cleaning:

0134138,Alan Smith,333-580-2254,70 inches
0134139,Christina Lee,123-412-6347,51 inches
0134140,Doug Thomas,532-412-6347,62 inches
*/

function processCSV(csv) {
    //do all reguired steps
    return csv;
}

//Log output of processing
var processed = processCSV(csvData);
console.log(processed);