// 2441. Largest Positive Integer That Exists With Its Negative



// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
// Return the positive integer k. If there is no such integer, return -1.









/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a, b) => a - b);  // Sort the array in ascending order
    
    for (let j = nums.length - 1; j >= 0; j--) {  // Iterate from the largest element
        if (nums[j] > 0 && nums.includes(-nums[j])) {  // Check if both k and -k exist
            return nums[j];  // Return the largest such k
        }
    }
    
    return -1;  // If no such k is found, return -1
};