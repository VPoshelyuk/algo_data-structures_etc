// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

// Example:

// int k = 3;
// int[] arr = [4,5,8,2];
// KthLargest kthLargest = new KthLargest(3, arr);
// kthLargest.add(3);   // returns 4
// kthLargest.add(5);   // returns 5
// kthLargest.add(10);  // returns 5
// kthLargest.add(9);   // returns 8
// kthLargest.add(4);   // returns 8
// Note: 
// You may assume that nums' length ≥ k-1 and k ≥ 1.

// Credit: https://leetcode.com/problems/kth-largest-element-in-a-stream/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = new MinHeap();
    nums.forEach(n => this.add(n));
  };
  
  /**
   * @param {number} val
   * @return {number}
   */
  KthLargest.prototype.add = function(val) {
    if (this.heap.size() < this.k) {
      this.heap.offer(val);
    } else if (this.heap.peek() < val) {
      this.heap.offer(val);
      this.heap.poll();
    }
    return this.heap.peek();
  };
  
  class MinHeap {
    constructor(data = []) {
      this.data = data;
      this.comparator = (a, b) => a - b;
      this.heapify();
    }
  
    // O(nlog(n))
    heapify() {
      if (this.size() < 2) return;
      for (let i = 1; i < this.size(); i++) {
        this.bubbleUp(i);
      }
    }
  
    // O(1)
    peek() {
      if (this.size() === 0) return null;
      return this.data[0];
    }
  
    // O(log(n))
    offer(value) {
      this.data.push(value);
      this.bubbleUp(this.size() - 1);
    }
  
    // O(log(n))
    poll() {
      if (this.size() === 0) return null;
      const result = this.data[0];
      const last = this.data.pop();
      if (this.size() !== 0) {
        this.data[0] = last;
        this.bubbleDown(0);
      }
      return result;
    }
  
    // O(log(n))
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = (index - 1) >> 1;
        if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
          this.swap(index, parentIndex);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // O(log(n))
    bubbleDown(index) {
      const lastIndex = this.size() - 1;
      while (true) {
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        let findIndex = index;
        if (
          leftIndex <= lastIndex &&
          this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
        ) {
          findIndex = leftIndex;
        }
        if (
          rightIndex <= lastIndex &&
          this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
        ) {
          findIndex = rightIndex;
        }
        if (index !== findIndex) {
          this.swap(index, findIndex);
          index = findIndex;
        } else {
          break;
        }
      }
    }
  
    // O(1)
    swap(index1, index2) {
      [this.data[index1], this.data[index2]] = [
        this.data[index2],
        this.data[index1]
      ];
    }
  
    // O(1)
    size() {
      return this.data.length;
    }
  }