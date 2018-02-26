module.exports = function getZerosCount(number, base) {
    let option = [ ],
        solution = [ ],
        root = base;
  
    for ( let i = 2; i <= root; i++) {
        if ( root % i == 0 ) {
            while ( root % i == 0 && root >= i) {
            root /= i;
            }
        option.push(i)
        }
    }
    for (let j = 0; j < option.length; j++) {
        solution[j] = findSolution(number, base, option[j]);
    }
    return solution.sort((a,b) => {return a-b})[0];
}

function findSolution(number, base, root) {
    let count = 0,
        result = 0,
        i = 1;
    while (base % root == 0) {
        base /= root
        count++; 
    }
    while (Math.pow(root,i) < number){
        result += Math.floor(number/Math.pow(root,i));
        i++;
    }
    return Math.floor(result/count);
}


