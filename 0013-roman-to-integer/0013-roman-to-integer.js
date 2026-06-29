/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
            const obj = {
            I : 1,
            V : 5,
            X : 10,
            L : 50,
            C : 100,
            D : 500,
            M : 1000
        }
        // "MCMXCIV"
        let sum = 0;
        for(let i=0 ; i<s.length;){
            if(obj[s[i]]<obj[s[i+1]]){
                sum = sum + (Number(obj[s[i+1]])-Number(obj[s[i]]));
                i = i+2;
            }
            else{
                sum = sum + Number(obj[s[i]]);
                i++;
            }
        }

        return sum;
};