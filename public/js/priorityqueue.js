
/**
 A min priority queue. 
 * 
 * Elements have an associated integer priority. High priority is assigned to the smallest integer values. 
 * Priorities cannot be negative so 0 is the highest priority an element can have.    
 *  
 * @author {America Chambers}
 * @version
 *
 */
class PriorityQueue {

    /**
     *  Constructs an empty priority queue
     */
    constructor() {
        this.location = new Map();
        this.heap = [];
    }

    /**
     *  Insert a new element into the queue with the
     *  given priority.
     *
     *	@param {number} priority priority of element to be inserted
     *	@param {number} element element to be inserted
     *
     *	<dt><b>Preconditions:</b><dd>
     *	<ul>
     *	<li> The element does not already appear in the priority queue.</li>
     *	<li> The priority is non-negative.</li>
     *	</ul>
     *  
     */
    push(priority, element) {

        if (priority < 0) {
            throw "Negative priority";
        }

        if (this.location.has(element)) {
            throw "Non-unique element";
        }

        this.heap.push({ 'p': priority, 'e': element });
        this.location.set(element, this.heap.length - 1)

        // percolate up newly added value
        this.#percolateUp(this.heap.length - 1);
    }

    /**
     *  Remove the highest priority element
     *  
     * @return {number} The highest priority element
     *	<dt><b>Preconditions:</b><dd>
     *	<ul>
     *	<li> The priority queue is non-empty.</li>
     *	</ul>
     *  
     */
    pop() {
        // heap must be non-empty
        if (this.heap.length == 0) {
            throw "Heap is empty";
        }

        let element;

        // only 1 element in heap
        if (this.heap.length == 1) {
            element = this.heap[0]['e']
            this.location.delete(element);
            this.heap.pop();
        }
        // more than 1 element in heap
        else {
            element = this.heap[0]['e']
            this.location.delete(element);

            // copy leaf node to root (overwriting the old root value)
            // and update its location in map
            let last_leaf = this.heap[this.heap.length - 1];
            this.heap[0] = last_leaf;

            let new_root_element = this.heap[0]['e']
            this.location.set(new_root_element, 0);



            // now we can remove leaf node from heap
            //TODO        
            //this.heap.remove(this.heap.length - 1);
            this.heap.pop();

            // push new root down to proper place
            this.#pushDown(0);
        }

        return element;
    }


    /**
     *  Returns the highest priority in the queue
     *  @return {number} highest priority value
     *  
     *	<dt><b>Preconditions:</b><dd>
     *	<ul>
     *	<li> The priority queue is non-empty.</li>
     *	</ul>
     */
    topPriority() {
        if (this.heap.length == 0) {
            throw "Priority queue is empty";
        }
        return this.heap[0]['p']
    }


    /**
     *  Returns the element with the highest priority
     *  @return {number} element with highest priority
     *
     *	<dt><b>Preconditions:</b><dd>
     *	<ul>
     *	<li> The priority queue is non-empty.</li>
     *	</ul>
     */
    topElement() {
        if (this.heap.length == 0) {
            throw "Priority queue is empty";
        }
        return this.heap[0]['e']
    }


    /**
     *  Change the priority of an element already in the
     *  priority queue.
     *  
     *  @param {number} newpriority the new priority
     *  @param {number} element element whose priority is to be changed  
     *  
     *	<dt><b>Preconditions:</b><dd>
     *	<ul>
     *	<li> The element exists in the priority queue</li>
     *	<li> The new priority is non-negative </li>
     *	</ul>
     */
    changePriority(newpriority, element) {
        // make sure this element exists in the priority queue

        if (!this.location.has(element)) {
            throw "Element does not exist in the priority queue";
        }

        let original_index = this.location.get(element);

        // update the priority
        this.heap[original_index]['p'] = newpriority;

        // given this new priority, try to percolate up
        let new_index = this.#percolateUp(original_index);

        // if percolating up did not move the element, then
        // try pushing it down
        if (new_index == original_index) {
            this.#pushDown(original_index);
        }
    }


    /**
     *  Gets the priority of the element
     *  
     *  @param {number} element the element whose priority is returned
     *  @return {number} the priority value
     *
     *	<dt><b>Preconditions:</b><dd>
     *	<ul>
     *	<li> The element exists in the priority queue</li>
     *	</ul>
     */
    getPriority(element) {
        if (!this.location.has(element)) {
            throw "Element does not exist in the priority queue";
        }
        let index = this.location.get(element);
        return this.heap[index]['p']
    }

    /**
     *  Returns true if the priority queue contains no elements
     *  @return {boolean} true if the queue contains no elements, false otherwise
     */
    isEmpty() {
        return this.heap.length == 0;
    }

    /**
     *  Returns true if the element exists in the priority queue.
     *  @return {boolean} true if the element exists, false otherwise
     */
    isPresent(element) {
        return this.location.has(element);
    }

    /**
     *  Removes all elements from the priority queue
     */
    clear() {
        this.heap = [];
        this.location = new Map();
    }

    /**
     *  Returns the number of elements in the priority queue
     *  @return {number} number of elements in the priority queue
     */
    size() {
        return this.heap.length;
    }

    /**
     * Push down the root element
     * @return {number} the index in the list where the element is finally stored
     */
    #pushDownRoot() {
        return this.#pushDown(0);
    }

    /*
     * Percolate up the last leaf in the heap, i.e. the most recently 
     * added element which is stored in the last slot in the list
     * 
     * @return the index in the list where the element is finally stored
     */
    #percolateUpLeaf() {
        return this.#percolateUp(this.heap.length - 1);
    }

    /*
     * Push down a given element 
     * @param start_index the index of the element to be pushed down
     * @return the index in the list where the element is finally stored
     */

    #pushDown(start_index) {
        let curr = start_index;
        let l = this.#left(curr);
        let r = this.#right(curr);
        let swap_index = -1;

        while (this.#hasTwoChildren(curr)) {

            swap_index = (this.heap[l]['p'] < this.heap[r]['p']) ? l : r;

            // swap_index now holds the index of the child with the smallest priority			

            // if curr's priority is smaller than its smallest child, then curr has found its proper place
            if (this.heap[curr]['p'] < this.heap[swap_index]['p']) {
                break;
            }
            else {

                // move curr to the position of its smallest child
                // move its smallest child up to now occupy the parent spot
                this.#swap(curr, swap_index);

                // update in preparation for the next iteration
                curr = swap_index;
                l = this.#left(curr);
                r = this.#right(curr);
            }
        }

        // Check if curr needs to be swapped with its one (left) child
        if (l < this.heap.length && this.heap[l]['p'] < this.heap[curr]['p']) {
            this.#swap(curr, l);
            curr = l;
        }
        return curr;
    }

    /*
     * Percolate up a given element
     * @param start_index the element to be percolated up
     * @return the index in the list where the element is finally stored
     */
    #percolateUp(start_index) {
        let curr = start_index;
        let p = this.#parent(curr);

        while (curr > 0 && this.heap[curr]['p'] < this.heap[p]['p']) {
            this.#swap(curr, p);
            curr = p;
            p = this.#parent(curr);
        }
        return curr;
    }

    /*
     * Returns true if element is a leaf in the heap
     * @param i index of element in heap
     * @return true if element is a leaf
     */
    #isLeaf(i) {
        return (this.#left(i) > this.heap.length) && (this.#right(i) > this.heap.length);
    }

    /*
     * Returns true if element has two children in the heap
     * @param i index of element in the heap
     * @return true if element in heap has two children
     */
    #hasTwoChildren(i) {
        return (this.#left(i) < this.heap.length) && (this.#right(i) < this.heap.length);
    }

    /*
     * Swaps two elements in the priority queue by updating BOTH
     * the list representing the heap AND the map
     * @param i element to be swapped
     * @param j element to be swapped
     */
    #swap(i, j) {
        let temp = this.heap[i]

        this.heap[i] = this.heap[j];
        this.heap[j] = temp;

        let element = this.heap[j]['e'];
        this.location.set(element, j);

        element = this.heap[i]['e']
        this.location.set(element, i);
    }

    /*
     * Computes the index of the element's left child
     * @param parent index of element in list
     * @return index of element's left child in list
     */
    #left(parent) {
        return 2 * parent + 1;

    }

    /*
     * Computes the index of the element's right child
     * @param parent index of element in list
     * @return index of element's right child in list
     */
    #right(parent) {
        return 2 * parent + 2;

    }

    /*
     * Computes the index of the element's parent
     * @param child index of element in list
     * @return index of element's parent in list
     */

    //TODO
    #parent(child) {
        return Math.trunc((child - 1) / 2);
    }
}

module.exports = PriorityQueue;