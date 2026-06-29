/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 9 9 9 9 9 9 9
    // 9 9 9 9
    // 8 9 9 9 0 0 0 1

    let stack = [];
    let output = [];
    let sum = 0;
    let val = 0
    let head = new ListNode();
    let main = head;

    while(l1!==null || l2!==null){

        if(l1!==null || l2!==null){
            
            let carry = stack.length > 0 ? stack.pop() : 0;
            sum = (l1 !== null && l2 !== null)
                ? l1.val + l2.val + carry
                : (l1 === null)
                    ? l2.val + carry
                    : (l2 === null)
                        ? l1.val + carry
                        : carry;
            val = Math.floor(sum / 10);
            stack.push(val);
            sum = (sum) % 10;
            head.val=sum;
            // console.log(sum);
            if(l1) l1 = l1.next;
            if(l2) l2  = l2.next;
            if(l1!=null || l2!=null){
            head.next = new ListNode();
            head = head.next;
            }
        }

    }

    if(stack.length>0 && stack.at(-1)!==0){
            head.next = new ListNode();
            head = head.next;
            head.val=stack.pop();
    }
    

    // for(let i=0; i<output.length; i++){
    //     head.val = output[i];
    //     if(i !== output.length-1){
    //     head.next = new ListNode();
    //     head = head.next;
    //     }
    // }

    return main;
};