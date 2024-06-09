use std::collections::HashMap;

fn main() {
    println!(
        "two_sum of nums = [2,7,11,15], target = 9: {:?}",
        two_sum(vec![2, 7, 11, 15], 9)
    );
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

#[test]
fn test_two_sum() {
    assert_eq!(two_sum(vec![2, 7, 11, 15], 9), [0, 1]);
    assert_eq!(two_sum(vec![3, 2, 4], 6), [1, 2]);
    assert_eq!(two_sum(vec![3, 3], 6), [0, 1]);
}
