/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    // let result = new Set();
    nums.sort((a,b)=> a-b);

    // console.log(nums);

    let i=0,j=i+1,k=nums.length-1;
    const target = 0;
    for(i;i<nums.length-2;i++){
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        let st = target - nums[i];
        j=i+1; k=nums.length -1;
        while(j<k){
            if((nums[j]+nums[k])==st){
                result.push([nums[i],nums[j],nums[k]])
                // result.add([nums[i],nums[j],nums[k]]);
                j++;
                k--;
                while(j<nums.length&& nums[j]==nums[j-1]){
                    j++;
                }
                while(k>=0 && nums[k]==nums[k+1]){
                    k--;
                }
            }
            else if((nums[j]+nums[k])<st){
                j++
            }
            else{
                k--;
            }
        }

    }

    // console.log(result);
    return result;

};