/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result=null;
    nums.sort((a,b)=>a-b);
    for (let i=0; i<nums.length-2; i++){
        if(i>0&&nums[i]==nums[i-1]){
            continue;
        }

        let j=i+1; k=nums.length-1;

        while(j<k){

            let data = nums[i]+nums[j]+nums[k];

            if(data==target){
                return data;
            }

            if(result){
                if(Math.abs(target-data)<Math.abs(target-result)){
                    result = data;
                }
            }
            else{
                result = data;
            }

            if (data < target) {
                j++;
                while (j < k && nums[j] == nums[j-1]) {
                    j++;
                }
            } else {
                k--;
                while (j < k && nums[k] == nums[k+1]) {
                    k--;
                }
            }

        }
    }

    return result;
};