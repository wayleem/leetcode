use std::collections::HashMap;
use std::collections::HashSet;

fn main() {
    println!(
        "two_sum of nums = [2,7,11,15], target = 9: {:?}",
        two_sum(vec![2, 7, 11, 15], 9)
    );

    println!(
        "contains_duplicate of nums = [1,2,1]: {:?}",
        contains_duplicate(vec![1, 2, 1])
    )
}

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map: HashMap<&i32, i32> = HashMap::new();
    let mut ans: Vec<i32> = Vec::new();
    for index in 0..nums.len() {
        let num = nums.get(index).unwrap();

        let diff = target - num;
        match map.get_key_value(&diff) {
            None => {
                map.insert(num, index as i32);
            }
            Some((_, &value)) => {
                if index as i32 != value {
                    ans.push(value);
                    ans.push(index as i32);
                }
            }
        }
    }
    return ans;
}

fn contains_duplicate(nums: Vec<i32>) -> bool {
    let mut hash = HashSet::new();
    for i in nums.iter() {
        if hash.contains(&i) {
            return true;
        } else {
            hash.insert(i);
        }
    }

    return false;
}

#[test]
fn test_two_sum() {
    assert_eq!(two_sum(vec![2, 7, 11, 15], 9), [0, 1]);
    assert_eq!(two_sum(vec![3, 2, 4], 6), [1, 2]);
    assert_eq!(two_sum(vec![3, 3], 6), [0, 1]);
}

#[test]
fn test_contains_duplicate() {
    assert_eq!(contains_duplicate(vec![1, 2, 3]), false);
    assert_eq!(contains_duplicate(vec![1, 2, 1]), true);
}
