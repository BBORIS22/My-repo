class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class linkedlist {
    constructor () {
        this.head = null ;
    }

    append(val) {
        if (this.head === null) {
            this.head = new Node(val);
            return;
        }

        let curr = this.head
        while(curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new Node(val);
    }

}

const list = new linkedlist();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
console.log (list.head);