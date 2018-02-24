module.exports = function getZerosCount(number, base) {
        let result = 0,
          i = 1;
    
        base = findBase(base);
    
        function findBase(base) {
            let m = 1;
            for (let j = 2; j <= base; j++) {
                if (base % j == 0) {
                    while (base % j == 0 && base > j) {
                        base /= j;
                        m++;
                    }
                    if (base != j) {
                        m = 1
                        findBase(base);
                    }
                    else {
                        return [base,m];
                    }
                }
            }
        }

        while (Math.pow(base[0],i) < number){
            result += Math.floor(number/Math.pow(base[0],i));
            i++;
        }
    
        return Math.floor(result/base[1]);
  }