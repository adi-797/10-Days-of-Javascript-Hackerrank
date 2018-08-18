/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let seclargest;
    var temp,i,temp2,temp1;
    temp = 0;
    temp1 = 0;
    for (i=0; i<nums.length;i++){
        if(temp<nums[i]){
            temp = nums[i];
        }
    }
    for (i=0; i<nums.length;i++){
        if (nums[i] != temp){
            if (temp1<nums[i]){
                temp1 = nums[i];
            }
        }
    }
    return temp1;
}