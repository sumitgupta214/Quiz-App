const questions = [
  {
    title: "What is the time complexity of inserting an element at the end of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(n)"
  },
  {
    title: "Which data structure uses LIFO (Last In, First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correct: "Stack"
  },
  {
    title: "Which of the following is not a self-balancing binary search tree?",
    options: ["AVL Tree", "Red-Black Tree", "B-Tree", "Binary Heap"],
    correct: "Binary Heap"
  },
  {
    title: "What is the primary use of a hash table?",
    options: ["Sorting data", "Storing key-value pairs", "Implementing recursion", "Traversing graphs"],
    correct: "Storing key-value pairs"
  },
  {
    title: "Which of the following algorithms is used to find the shortest path in a graph?",
    options: ["Merge Sort", "Dijkstra's Algorithm", "Quick Sort", "Depth First Search"],
    correct: "Dijkstra's Algorithm"
  },
  {
    title: "In a binary search tree, what is the time complexity of searching for an element?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(log n)"
  },
  {
    title: "What is the height of a complete binary tree with n nodes?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: "O(log n)"
  },
  {
    title: "Which data structure is used for implementing recursion?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correct: "Stack"
  },
  {
    title: "What is the best case time complexity of quicksort?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    correct: "O(n log n)"
  },
  {
    title: "Which traversal method is used for Breadth-First Search in a graph?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correct: "Level Order"
  }
];



module.exports = {data:questions};
