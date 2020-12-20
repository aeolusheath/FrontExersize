/**
 * 
 * 
  Given a fixed length array arr of integers, 
  duplicate each occurrence of zero, shifting the remaining elements to the right.

  Note that elements beyond the length of the original array are not written.

  Do the above modifications to the input array in place, do not return anything from your function.

 

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]
 

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9

 * 
 * 
 * 
 */


 /**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let len = arr.length
    let zc = 0
    // 找到0的个数count,但是注意，有的0是不会被复制的，因为这个0会被丢弃掉
    for (let i = 0; i < arr.length; i++) { 
      if (arr[i] == 0 ) {
        console.log(i, zc, arr.length - 1, 'ss')

        // if(i + zc >= len - 1) {
        //   break
        // }

        // 边界条件要考虑，最后一个数为0，没有位置可以移动了
        if ( i + zc == len - 1) {
          zc--
          arr[len - 1] = 0
          len = len - 1
          break;
        }
        zc++
      }
     }
     console.log(zc, arr, 'zccc----')
     // 需要赋值的个数总数count为zc
     // count = 1, count++ 如果 i + count ==  len - 1 那么count是最多移动的数字
     
     // 那么剩下的数字，除去0 都是在数组里面的，索引为 [0 ~ (len - 1 - count)] + count

     // 从 len - 1 - count  - 1 开始，将此处的元素往后移动【如果不为0】，或者右边增加一个0【如果为0】
     // 移动的步数就是增加的0的个数，这个个数就是数组需要留的位置
     // 将元素往最后几个位置开始挪
     let last = len - 1 - zc
     console.log(last, 'last')
     for (let i = last; i >= 0 ; i--) {
       console.log(arr[i], i, zc, 'arr[i]')
       if (arr[i]!=0) {
         arr[i + zc] = arr[i]
       } else {
         arr[i+zc] = 0 // 复制新元素0
         zc--
         arr[i+zc] = 0 // 移动老元素0
       }
     }
     console.log(arr, "arr-----")
     return arr
};





/**
 *
 class Solution {
    public void duplicateZeros(int[] arr) {
        int possibleDups = 0;
        int length_ = arr.length - 1;

        // Find the number of zeros to be duplicated
        // Stopping when left points beyond the last element in the original array
        // which would be part of the modified array
        for (int left = 0; left <= length_ - possibleDups; left++) {

            // Count the zeros
            if (arr[left] == 0) {

                // Edge case: This zero can't be duplicated. We have no more space,
                // as left is pointing to the last element which could be included  
                if (left == length_ - possibleDups) {
                    // For this zero we just copy it without duplication.
                    arr[length_] = 0;
                    length_ -= 1;
                    break;
                }
                possibleDups++;
            }
        }

        // Start backwards from the last element which would be part of new array.
        int last = length_ - possibleDups;

        // Copy zero twice, and non zero once.
        for (int i = last; i >= 0; i--) {
            if (arr[i] == 0) {
                arr[i + possibleDups] = 0;
                possibleDups--;
                arr[i + possibleDups] = 0;
            } else {
                arr[i + possibleDups] = arr[i];
            }
        }
    }
}

作者：LeetCode
链接：https://leetcode-cn.com/problems/duplicate-zeros/solution/fu-xie-ling-by-leetcode/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


 * 
 * 
 * 
 * 
 * 
 */


 function duplicateZeros2(arr) {
    let zc = 0
    let len = arr.length - 1


    for (let  left = 0; left <= len - zc; left++) {
      if (arr[left] == 0) {
        if ((left) == len - zc) {
          arr[len] = 0
          len = len - 1
          break
        }
        zc++
      }

    }

    let last = len - zc
    console.log(last, zc)
    for (let i = last; i >= 0 ; i--) {
      if (arr[i] == 0) {
        arr[i + zc] = 0
        zc--
        arr[i + zc] = 0
       } else {
         arr[i + zc] = arr[i]
       }

    }
    return arr

 }

 console.log(duplicateZeros2([1,0,2,3,0,4,5,0]))


// console.log(duplicateZeros([8,4,5,0,0,0,0,7]))