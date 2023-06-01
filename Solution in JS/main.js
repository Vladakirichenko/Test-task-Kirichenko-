// const numbers = [3, 3]
// target = 6

// const numbers = [2, 7, 11, 15]
// target = 9

const numbers = [3, 2, 4]
target = 6

const sum_of_two = (nums, target) => {
    const arr = []
    let sum;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            sum = nums[j] + nums[i]
            if (sum == target) {
                arr.push(i, j)
            }
        }
    }
    return arr
}

let result = sum_of_two(numbers, target)
console.log(result);