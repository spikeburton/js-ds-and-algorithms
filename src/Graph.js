/**
 * @file Graph.js
 * @module Graph
 */

/*
  ADJACENCY MATRIX

  GIVEN GRAPH (UNDIRECTED):
    A---B---C
  MATRIX REPRESENTATION:
      a b c
    a 0 1 0
    b 1 0 1
    c 0 1 0

  GIVEN GRAPH (DIRECTED):
    A<--B<--C
  MATRIX REPRESENTATION:
      a b c
    a 0 0 0
    b 1 0 0
    c 0 1 0

  ---------- ----------

  INCIDENCE MATRIX

  GIVEN GRAPH (UNDIRECTED):
    a--1--b
    |\3  /
   4| \ /2
    d  c
  MATRIX REPRESENTATION:
      1 2 3 4
    a 1 0 1 1
    b 1 1 0 0
    c 0 1 1 0
    d 0 0 0 1
*/

/**
 * @function bfs
 * @param {Array} graph
 * @param {number} root
 * @description Breadth-first search algorithm for a graph
 */
function bfs(graph, root) {
  const nodesLen = {};

  // INIT all distances to Infinity
  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;

  const Q = [root];
  let current;

  while (Q.length != 0) {
    current = Q.shift();

    // GET all nodes connected to the current node
    const curConnected = graph[current];
    const neighborIdx = [];
    // FIND first occurence of a connected node, signified by a 1 in the array
    let idx = curConnected.indexOf(1);
    // WHILE a connected node is found ...
    while (idx != -1) {
      neighborIdx.push(idx);
      // FIND next occurence, starting from the index of the last found
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (let j = 0; j < neighborIdx.length; j++) {
      // IF the key for the index has a value of Infinity, that means we have not set the value yet
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        Q.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

module.exports = { bfs };
