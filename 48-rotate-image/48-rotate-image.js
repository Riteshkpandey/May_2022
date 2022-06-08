/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    // transposing the matrix
    
    for(let i=0;i<matrix.length;i++)
        {
            for(let j=i;j<matrix[0].length;j++)
                {
                    if(i!=j)
                        {
                            let temp=matrix[i][j];
                            matrix[i][j]=matrix[j][i]
                            matrix[j][i]=temp;
                        }
                    
                }
            
        }
    
    // swapping the ith col with n-1-i col

    for(let i=0;i<matrix.length;i++)
        {
            for(let j=0;j<matrix[0].length/2;j++)
                {
                    let lastCol=matrix[0].length-1-j;
                    let temp=matrix[i][j];
                    matrix[i][j]=matrix[i][lastCol];
                    matrix[i][lastCol]=temp;
                }
        }
    return matrix;
    
};