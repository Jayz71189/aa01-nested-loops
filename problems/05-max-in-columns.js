/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

function maxColumn(matrix) {
  let currMax = matrix[0][0];
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (j=0)
      { let Col1=[];
        Col1.push(matrix[j]);
            currMax = matrix[i][j];
        }
        else if (j=1) {
          let Col2=[];
          Col2.push(matrix[j])
          }
          else if (j=2) {
            let Col3=[];
              Col3.push(matrix[j])}
      }
  return;





// matrix = [
//   [5, 9, 21],
//   [9, 19, 6],
//   [12, 14, 15],
// ];

// console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
