class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = (list1, list2) => {
    let dummyHead = new Node(0);
    let current = dummyHead;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes
    current.next = list1 !== null ? list1 : list2;

    return dummyHead.next;
};

// Creating linked lists
const l1 = new Node(1, new Node(3, new Node(5))); // 1 -> 3 -> 5
const l2 = new Node(2, new Node(4, new Node(6))); // 2 -> 4 -> 6
const mergedList = mergeTwoLists(l1, l2);

// print the linked list
const printList = (head) => {
    let current = head;
    let output = [];
    while (current !== null) {
        output.push(current.val);
        current = current.next;
    }
    console.log(output.join(" -> "));
};


printList(mergedList);  // 1 -> 2 -> 3 -> 4 -> 5 -> 6
