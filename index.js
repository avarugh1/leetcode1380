function isMaxInColumn(matrix, value){
    for(let i = 0;i<matrix.length;i++){
        let colVal = matrix[i][value[1]];
        if(colVal > value[0]){
            return false;
        }
    }
    return true;
}

function retMinIndexInRow(row){
    let minNum = row[0];
    let minIndex = 0;

    for(let i=1;i<row.length;i++){
        if(row[i] < minNum){
            minNum = row[i];
            minIndex = i;
        }
    }

    return [minNum, minIndex];
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let luckyNums = [];

    for(let i=0;i < matrix.length;i++){
        min = retMinIndexInRow(matrix[i]);
        let isMax = isMaxInColumn(matrix, min);
        if(isMax){
            luckyNums.push(min[0]);
        }
    }
    return luckyNums;
};

{
    let input = [[3,7,8],[9,11,13],[15,16,17]];
    let output = luckyNumbers(input);
    console.log(output.toString());
}
{
    let input = [[1,10,4,2],[9,3,8,7],[15,16,17,12]];
    let output = luckyNumbers(input);
    console.log(output.toString());
}
{
    let input = [[7,8],[1,2]];
    let output = luckyNumbers(input);
    console.log(output.toString());
}