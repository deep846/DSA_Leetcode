/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0,j=i+1,k=1;
    while (j<nums.length){
        if(nums[i]!==nums[j]){
            nums[i + 1] = nums[j];
            i++;
            j++;
            k++;
        }
        else{
            j++;
        }
        if(j===nums.length){
            console.log(nums.slice(0,i+1))
            return k;
        }
    }

};