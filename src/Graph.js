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
 * @param {*} root
 * @description Breadth-first search algorithm for a graph
 */
function bfs(graph, root) {
  const nodesLen = {}

  for (let i = 0; i < graph.length; i++) {
    nodesLen[root] = 0;

    const Q = [root];
    let current;

    while (Q.length != 0) {
      current = Q.shift();

      const curConnected = graph[current];
      const neighborIdx = [];
      let idx = curConnected.indexOf(1);
      while (idx != -1) {
        neighborIdx.push(idx);
        idx = curConnected.indexOf(1, idx + 1);
      }

      for (let j = 0; j < neighborIdx.length; j++) {
        if (nodesLen[neighborIdx[j]] == Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          Q.push(neighborIdx[j]);
        }
      }
    }
  }
  return nodesLen
}

module.exports = { bfs }
