/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    for(let i=0;i<matrix.length;i++)
        {
            for(let j=i;j<matrix[0].length;j++)
                {
                            let temp=matrix[i][j];
                            matrix[i][j]=matrix[j][i];
                            matrix[j][i]=temp;
                        
                }
        }
    console.log(matrix);
    
    for(let i=0;i<matrix.length;i++)
        {
            for(let j=0;j<matrix[0].length/2;j++)
                {
                    let temp=matrix[i][j];
                    matrix[i][j]=matrix[i][matrix[0].length-1-j];
                    matrix[i][matrix[0].length-1-j]=temp;
                }
        }
    return matrix;
    
};