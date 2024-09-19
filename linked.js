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

    print() {
        let str = '' ;
        let curr = this.head
        while(curr !== null) {
            str += curr.val + '->'
            curr = curr.next;
        }
        console.log (str);
    }
}

const list = new linkedlist();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.print();