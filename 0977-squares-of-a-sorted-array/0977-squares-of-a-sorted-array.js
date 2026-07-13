/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let j=0;
    while(j<nums.length){

            nums[j] = nums[j]*nums[j];
            j++;
        
    }

        nums.sort(function(a, b) {
    return a - b;
    });

    return nums;
};