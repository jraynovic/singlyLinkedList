class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //this function takes in data and inserts our data at the end of our linked list
  insertEnd(data) {
    if (this.head) {
      // check if the list is NOT empty
      let lastNode = this.head; // lets grab a variable to store the last known node
      while (lastNode.next) {
        lastNode = lastNode.next;
        /* 
              When we hit the last node the value of lastnode.next will = null
              This will cause us to exit the while loop leaving lastNode at the
              end of the list 
          */
      }
      lastNode.next = new ListNode(data); //assign the data passed to the last nodes .next
    } else {
      //ie list is empty
      this.head = new ListNode(data);
    }
  }

  display() {
    let currentNode = this.head; // lets grab a variable to store the last known node again
    while (currentNode) {
      // make sure current node is NOT null.

      console.log(currentNode.data);
      currentNode = currentNode.next;
      /*
              As we go through each node we assign its value of currentNode to <instance.next>
              when we reach the end(tail) <instance.next> will be null and exit the loop.  
        */
    }
  }

  insertAtStart(data) {
    if (this.head) {
      //check if head exists
      let oldHead = this.head; //create a placeholder for the current head
      this.head = new ListNode(data); //make the new head the data we just passed
      this.head.next = oldHead; //set the head.next to our previous head from line 49
    } else {
      this.head = new ListNode(data); // list is empty just set head to data
    }
  }

  getListLength() {
    let length = 0; // somewhere to store out length
    let currentNode = this.head; // lets grab a variable to store the last known node again
    while (currentNode) {
      // **reference display
      length++; //increment length by 1
      currentNode = currentNode.next; //get the next node for the next iteration
    }
    return length;
  }

  insertAtIndex(data, index) {
    if (index === 0) {
      this.insertAtStart(data); // reuse insert at 0
      return;
    }
    if (index > this.getListLength() || index < 0) {
      // make sure index isnt larger than our list or negative
      console.log("INDEX OUT OF RANGE OR LIST IS EMPTY");
      return;
    }

    let currentNode = this.head; // lets grab a variable to store the last known node again
    let prevNode; // lets grab a variable to store the previous known node again
    for (let i = 0; i < index; i++) {
      //iterate list until we reach the index requested
      prevNode = currentNode; //store out prevous node
      currentNode = currentNode.next; //get the next node for the next iteration
    }
    prevNode.next = new ListNode(data); //add our data to prev.next
    prevNode.next.next = currentNode; //make next on our new data that last known, currentNode
  }
}

const list = new LinkedList(); //create an instance of our class
list.insertEnd("First data!"); // Because this.head is null we skip to the else clause and run this.head = new ListNode(data);
list.insertEnd(
  "Second data!"
); /*now that this.head is no longer null we will iterate through each node until we find
                                    the one with next as null. Then we will assign the value to its next property.*/

list.insertAtStart("Stole first place!"); //insert data as the first node

list.insertAtIndex("Oh yeah! Inserted at index 1!", 1); //insert at index 1

list.display(); //console.logs each node
