let PriorityQueue = require("/js/priorityqueue.js");

describe("pushing", () => {

    beforeEach(() => {
        pq = new PriorityQueue();
        pq.push(10, 15);
        pq.push(11, 40);
        pq.push(33, 20);
    });

    it("has correct size", () => {
        expect(pq.size()).toBe(3);
    });

    it("has correct ordering of priorities", () => {
        expect(pq.heap[0]['p']).toBe(10);
        expect(pq.heap[1]['p']).toBe(11);
        expect(pq.heap[2]['p']).toBe(33);
    });

    it("has correct ordering of elements", () => {
        expect(pq.location.get(15)).toBe(0);
        expect(pq.location.get(40)).toBe(1);
        expect(pq.location.get(20)).toBe(2);
    });

});

describe("change priority", () => {
    beforeEach(() => {
        pq = new PriorityQueue();
        pq.push(10, 15);
        pq.push(11, 40);
        pq.push(33, 20);
    });

    it("maintains same order if root priority is increased", () => {
        pq.changePriority(1, 15);
        expect(pq.topElement()).toBe(15)
        expect(pq.topPriority()).toBe(1)
    });

    it("properly increases priority of a leaf ", () => {
        pq.changePriority(1, 20);

        expect(pq.topElement()).toBe(20);
        expect(pq.topPriority()).toBe(1);
    });

});

describe("popping", () => {

    beforeEach(() => {
        pq = new PriorityQueue();
        pq.push(10, 15);
        pq.push(11, 40);
        pq.push(33, 20);
        pq.push(1, 100);
        pq.push(2, 103);
    });

    it("has correct size", () => {
        expect(pq.size()).toBe(5);
    });

    it("has correct ordering after 1st pop", () => {
        pq.pop();
        expect(pq.heap[0]['p']).toBe(2);
        expect(pq.heap[1]['p']).toBe(10);
        expect(pq.heap[2]['p']).toBe(33);
        expect(pq.heap[3]['p']).toBe(11);
        expect(pq.location.get(103)).toBe(0);
        expect(pq.location.get(15)).toBe(1);
        expect(pq.location.get(20)).toBe(2);
        expect(pq.location.get(40)).toBe(3);
    });

    it("has correct ordering after 2nd pop", () => {
        pq.pop();
        pq.pop();
        expect(pq.heap[0]['p']).toBe(10);
        expect(pq.heap[1]['p']).toBe(11);
        expect(pq.heap[2]['p']).toBe(33);
        expect(pq.location.get(15)).toBe(0);
        expect(pq.location.get(40)).toBe(1);
        expect(pq.location.get(20)).toBe(2);
    });

    it("has correct ordering after 3rd pop", () => {
        pq.pop();
        pq.pop();
        pq.pop();
        expect(pq.heap[0]['p']).toBe(11);
        expect(pq.heap[1]['p']).toBe(33);
        expect(pq.location.get(40)).toBe(0);
        expect(pq.location.get(20)).toBe(1);
    });

    it("has correct ordering after 4th pop", () => {
        pq.pop();
        pq.pop();
        pq.pop();
        pq.pop();
        expect(pq.heap[0]['p']).toBe(33);
        expect(pq.location.get(20)).toBe(0);
    });

    it("in valid state after last pop", () => {
        pq.pop();
        pq.pop();
        pq.pop();
        pq.pop();
        pq.pop();
        expect(pq.heap.length).toBe(0);
        expect(pq.location.size).toBe(0);
    });

});