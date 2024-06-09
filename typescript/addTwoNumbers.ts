class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function addTwoNumbers(node1: ListNode | null, node2: ListNode | null): ListNode | null {
  if (node1 === null || node2 === null) return null
  let bigList: ListNode
  let smallList: ListNode
  if (getLength(node1) > getLength(node2)) {
    bigList = node1
    smallList = node2
  } else {
    bigList = node2
    smallList = node1
  }
  let bigCursor = bigList
  let smallCursor = smallList
  let sumList = new ListNode()
  let sumCursor = sumList
  let carry = false

  while (bigCursor.next !== null) {
    let sum = bigCursor.val + smallCursor.val
    if (carry) sum++
    sumCursor.val = sum % 10
    carry = false
    if (sum >= 10) carry = true


    // move cursors
    sumCursor.next = new ListNode()
    sumCursor = sumCursor.next
    bigCursor = bigCursor.next
    if (smallCursor.next !== null) smallCursor = smallCursor.next
    else {
      smallCursor = new ListNode(0)
    }
  }
  let sum = bigCursor.val + smallCursor.val
  if (carry) sum++
  sumCursor.val = sum % 10
  if (sum >= 10) sumCursor.next = new ListNode(1)

  return sumList
}

function getLength(node: ListNode) {
  let count = 0
  let cursor = node
  while (cursor.next !== null) {
    cursor = cursor.next
    count++
  }
  count++
  return count
}
