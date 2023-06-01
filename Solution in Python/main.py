# numbers = [2, 7, 11, 15]
# target = 9

# numbers = [3, 3]
# target = 6

numbers = [3, 2, 4]
target = 6

def sum_of_two (nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            sum = nums[j] + nums[i]
            if sum == target:
                return print([i, j])

sum_of_two(numbers, target)
