// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortedSquares = function(nums) {
//     let j=0;
//     while(j<nums.length){

//             nums[j] = nums[j]*nums[j];
//             j++;
        
//     }

//         nums.sort(function(a, b) {
//     return a - b;
//     });

//     return nums;
// };


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i=0;

    while(nums[i]<0){
        i++;
    }

    if(i>0){
        let negArray = nums.slice(0,i);
        let posArray = nums.slice(i,nums.length);
        negArray = squreArray(negArray);
        posArray = squreArray(posArray);

        if(negArray.length==0){
            return posArray;
        }
        else if(posArray.length==0){
            return negArray.reverse();
        }
        nums =[];
        // console.log(negArray,posArray);
        let n=negArray.length - 1;
        let p = 0;

        while(n>=0 || p<posArray.length){

            if(n>=0 && p<posArray.length){

                if(negArray[n]>=posArray[p]){
                    nums.push(posArray[p])
                    p++;
                }
                else if(negArray[n]<posArray[p]){
                    nums.push(negArray[n])
                    n--;
                }
            }
            else if(n<0){
                nums.push(...posArray.slice(p,posArray.length));
                p = posArray.length;
            }
            else if(p>=posArray.length){
                nums.push(...negArray.slice(0,n+1).reverse());
                n = -1;
            }
        }

        // console.log(nums);
        return nums;
    }
    else{
        return squreArray(nums);
    }
    

};


var squreArray = function (nums){
    for(let i=0; i<nums.length;i++){
        nums[i] = nums[i]*nums[i];

    }

    return nums;
}