class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteNode(data) {
    let dummy = new Node(0); // Create a dummy node before head
    dummy.next = this.head;
    let current = dummy;

    while (current.next !== null) {
        if (current.next.data === data) {
            current.next = current.next.next; // Delete node by skipping it
            break;
        }
        current = current.next;
    }

    this.head = dummy.next; // Update head in case it was deleted
}


    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Testing the LinkedList
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log("Original List:");
list.printList();

list.deleteNode(2);

console.log("After Deleting 2:");
list.printList();
