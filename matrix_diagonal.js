// Product of the main diagonal of a square matrix.

function mainDiagonalProduct(mat){
  let res = 1;
  let i = 0;
  mat.forEach(mat_i => {
    res = res * mat_i[i];
    i++;
  })
  return res;
}