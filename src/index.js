
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
	if (arguments.length === 0 || matrix === null || matrix.length === 0 || matrix === undefined) {
    return [];
    } else {  
        for (let i = 0; i < matrix.length; i++) {
          if (i % 2 === 0) {
            result.push(...matrix[i])
          } else {
            result.push(...matrix[i].reverse())
        }
      }
    return result;
  }
}
