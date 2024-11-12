// write in a function thats a X by X array of arrays of numbers
// as well two x/y combinations and have it return the shortest
// length (you don't need to track the actual path) from point A
// to point B.
//
// the numbers in the maze array represent as follows:
// 0 – open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points
//
// you will almost certainly need to transform the maze into your own
// data structure to keep track of all the meta data

// this is a little tool I wrote to log out the maze to the console.
// it is opinionated of how to do that and you do not have to do it
// the way I did. however feel free to use it if you'd like

// similar to a 3d version of the array node tree problem used 2n + 1 to find the children (not really helpful)
const logMaze = require("./logger");


// instead of using recursion use a for loop and queue the elements once you find the point where the spaces meet mark that space/save coordinates and then down|right|up|left priority depending on the direction the point where they meet is 
// function fillOutMap (maze, [xA, yA] = [undefined, undefined], [xB, yB] = [undefined, undefined]) {
//   console.table(maze)
//   const northA = [xA, (yA + 1)];
//   const southA = [xA, (yA - 1)];
//   const eastA = [(xA - 1), yA];
//   const westA = [(xA + 1), yA];

//   const northB = [xB, (yB + 1)];
//   const southB = [xB, (yB - 1)];
//   const eastB = [(xB - 1), yB];
//   const westB = [(xB + 1), yB];

//   const withinBounds = ([x,y]) => {
//     return maze[x] !== undefined && maze[y][x] !== undefined && x >= 0 && y >= 0 && y < maze.length && x < maze.length && maze[y][x] !== 'a' && maze[x, y] !== 'b' && maze[x, y] !== 'x';
//   }

//   const cardinalValuesA = [northA, southA, eastA, westA].filter(coordinates => withinBounds(coordinates));
//   const cardinalValuesB = [northB, southB, eastB, westB].filter(coordinates => withinBounds(coordinates));
//   const endCondition = cardinalValuesB.some(([x, y]) => maze[y][x] === 'a') || cardinalValuesA.some(([x, y]) => maze[y][x] === 'b');

//   if(endCondition) {
//     const midPointCoordinate = cardinalValuesA.find(([x, y]) => {
//       return maze[y][x] === 'b';
//     }) || cardinalValuesB.find(([x, y]) => {
//       return maze[y][x] === 'a';
//     })

//     const midPointX = midPointCoordinate[0];
//     const midPointY = midPointCoordinate[1];
    
//     maze[midPointY][midPointX] = 'x';

//     return maze;
//   }

//   cardinalValuesA.forEach(([x, y]) => {
//     if(maze[y][x] !== undefined ) {
//       maze[y][x] = 'a'
//     }
//   })

//   cardinalValuesB.forEach(([x, y]) => {
//     if(maze[y][x] !== undefined) {
//       maze[y][x] = 'b'
//     }
//   })

//   if(!endCondition) {
//     for (let i = 0; i < Math.min(cardinalValuesA.length, cardinalValuesB.length); i++) {
//       fillOutMap(maze, cardinalValuesA[i], cardinalValuesB[i]);
//     }
//   }

//   return maze;
// }
// const path = [pointA];
// maze[yA][xA] = 'a';

// const foundPointB = () => {
//   const [x, y] = path[path.length - 1];
//   return x === xB && y === yB;
// }

// while (!foundPointB()) {
//   const [x, y] = [path[path.length - 1][0], path[path.length - 1][1]];
//   const diffX = x - pointB[0];
//   const diffY = y - pointB[1];
//   const nextXCoordinate = diffX > 0 ? x - 1 : x + 1;
//   const nextYCoordinate = diffY > 0 ? y - 1 : y + 1;

//   if(diffX !== 0) {
//     path.push([nextXCoordinate, y]);
//     maze[y][nextXCoordinate] = path.length - 1;
//   } else if(diffY !== 0) {
//     path.push([x, nextYCoordinate]);
//     maze[nextYCoordinate][x] = path.length - 1;
//   }
// }
// fillOutMap(maze, [xA, yA], [xB, yB]);

//  !issues:
// *- should be getting 16 but is getting 22

// main issue
// *- looks as though point on of the points is getting farther in less loops than the other 


// possible solutions: 
//   *- for each element as opposed to dequeueing one from both
//   *- dequeue one at a time and switch off


// function findShortestPathLength(maze, pointA, pointB) {
//   const visitedA = [];
//   const visitedB = [];

//   const queueA = [pointA];
//   const queueB = [pointB];

//   let pathFound = false
//   let distance = 0;

//   while(!pathFound) {
//     const [xA, yA] = queueA.shift();
//     const [xB, yB] = queueB.shift();

//     const dequeuedValueA = maze[yA][xA];
//     const dequeuedValueB = maze[yB][xB];

//     const markA = dequeuedValueA + 1;
//     const markB = dequeuedValueB + 1;

//     const pointsAroundA = getPointsAround(maze, [xA, yA], visitedA);
//     const pointsAroundB = getPointsAround(maze, [xB, yB], visitedB);
    
//     pointsAroundA.forEach(point => {
//       markCoordinate(maze, point, markA, visitedA)

//       const foundOtherSide = !!visitedB.find(([x, y]) => {
//         return point[0] === x && point[1] === y;
//       })

//       if(foundOtherSide) {
//         distance = (markA - 3) + (markB - 3);
//         pathFound = true;
//       }
//     })

//     if(pathFound) {
//       return distance;
//     }

//     pointsAroundB.forEach(point => {
//       markCoordinate(maze, point, markB, visitedB)

//       const foundOtherSide = !!visitedA.find(([x, y]) => {
//         return point[0] === x && point[1] === y;
//       })

//       if(foundOtherSide) {
//         distance = (markA - 3) + (markB - 3);
//         pathFound = true;
//       }
//     })
    
//     if(pathFound) {
//       return distance;
//     }

//     queueA.push(...pointsAroundA);
//     queueB.push(...pointsAroundB);

//     visitedA.push([xA, yA]);
//     visitedB.push([xB, yB]);

//     console.table(maze)
//   }

//   return 0;
// }

// function markCoordinate(maze, [x, y], mark, visited) {
//   if(withinBounds(maze, [x,y], visited)) {
//     maze[y][x] = mark;
//   }  
// }

// function withinBounds(maze, [x,y], visited) {
//   const withinMaze = x < maze.length && y < maze[0].length && x >= 0 && y >= 0;
//   const unseen = !visited.some(([visitedX, visitedY]) => { return x === visitedX && y === visitedY });

//   return withinMaze && unseen && maze[y][x] !== 1;
// }

// function getPointsAround(maze, [x, y], visited) {
//   const up = [x, y + 1];
//   const down = [x, y - 1];
//   const left = [x - 1, y];
//   const right = [x + 1, y];
//   const pointsAround = [up, down, left, right];

//   let centerPoint = null;

//   for(point of pointsAround) {
//     if(point[0] === x && point[1] === y) {
//       centerPoint = point;
//       break;
//     }
//   }

//   const filteredPointsAround = pointsAround.filter(point => withinBounds(maze, point, visited))

//   return centerPoint || filteredPointsAround;
// }

// there is a visualization tool in the completed exercise
// it requires you to shape your objects like I did
// see the notes there if you want to use it

const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

function generateVisited (maze) {
  // ! visited is supposed to be a 2d array
  //  * It starts as a 2d array of objects has: 
  //  - closed: keeps track of the ones the walls
  //  - length: of the distance from the original point (current iteration)
  //  - openedBy: Initially none then 0 | 1 representing each user
  //  - x & y coordinates: 
  const visited = maze;
  for(let y = 0; y < maze.length; y++) {
    for(let x = 0; x < maze[y].length; x++) {
      const origin = maze[y][x];
      visited[y][x] = {
        closed: origin === 1,
        length: 0,
        opened_by: NO_ONE,
        x,
        y,
      }
    }
  }

  return visited;
}

function findShortestPathLength(maze, [xA, yA], [xB, yB]) {
  const visited = generateVisited(maze);

  visited[xA][yA].opened_by = BY_A;
  visited[xB][yB].opened_by = BY_B;

  let queueA = [visited[xA][yA]];
  let queueB = [visited[xB][yB]];
  let iteration = 0;

  while(queueA.length && queueB.length) {
    iteration++;

    const aNeighbors = [];

    for(let neighbor of queueA) {
      const neighbors = getNeighbors(visited, neighbor.x, neighbor.y);
      aNeighbors.push(...neighbors);
    }

    queueA = [];

    for(let i = 0; i < aNeighbors.length; i++) {
      const neighbor = aNeighbors[i];
      if(neighbor.opened_by === BY_B) {
        return neighbor.length + iteration;
      } else if(neighbor.opened_by === NO_ONE) {
        neighbor.length = iteration;
        neighbor.opened_by = BY_A;
        queueA.push(neighbor);
      }
    }

    const bNeighbors = [];

    for(let neighbor of queueB) {
      const neighbors = getNeighbors(visited, neighbor.x, neighbor.y);
      bNeighbors.push(...neighbors);
    }

    queueB = [];

    for(let i = 0; i < bNeighbors.length; i++) {
      const neighbor = bNeighbors[i];
      if(neighbor.opened_by === BY_A) {
        return neighbor.length + iteration;
      } else if(neighbor.opened_by === NO_ONE) {
        neighbor.length = iteration;
        neighbor.opened_by = BY_B;
        queueB.push(neighbor);
      }
    }
  }

  return -1;
}

const getNeighbors = (visited, x, y) => {
  const neighbors = [];

  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    neighbors.push(visited[y - 1][x]);
  }

  if (y + 1 < visited[0].length && !visited[y + 1][x].closed) {
    neighbors.push(visited[y + 1][x]);
  }

  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    neighbors.push(visited[y][x - 1]);
  }

  if (x + 1 < visited.length && !visited[y][x + 1].closed) {
    neighbors.push(visited[y][x + 1]);
  }

  return neighbors;
};
// unit tests
// do not modify the below code
  // const fourByFour = [
  //   [2, 0, 0, 0],
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 2]
  // ];
    const eightByEight = [
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 2, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 2]
  ];

  console.log('distance :>> ', findShortestPathLength(eightByEight, [1, 7], [7, 7]))

//   const sixBySix = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 2, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 2, 0, 0, 0]
//   ];
//   it("should solve a 6x6 maze", () => {
//     expect(findShortestPathLength(sixBySix, [1, 1], [2, 5])).toEqual(7);
//   });

//   const eightByEight = [
//     [0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 2, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1, 2]
//   ];
//   it("should solve a 8x8 maze", () => {
//     expect(findShortestPathLength(eightByEight, [1, 7], [7, 7])).toEqual(16);
//   });

//   const fifteenByFifteen = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
//     [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
//     [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   ];
//   it("should solve a 15x15 maze", () => {
//     expect(findShortestPathLength(fifteenByFifteen, [1, 1], [8, 8])).toEqual(
//       78
//     );
//   });
// });

// // I care far less if you solve these
// // nonetheless, if you're having fun, solve some of the edge cases too!
// // just remove the .skip from describe.skip
// describe.skip("pathfinding – edge cases", function () {
//   const byEachOther = [
//     [0, 0, 0, 0, 0],
//     [0, 2, 2, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0]
//   ];
//   it("should solve the maze if they're next to each other", () => {
//     expect(findShortestPathLength(byEachOther, [1, 1], [2, 1])).toEqual(1);
//   });

//   const impossible = [
//     [0, 0, 0, 0, 0],
//     [0, 2, 0, 0, 0],
//     [0, 0, 1, 1, 1],
//     [1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 2]
//   ];
//   it("should return -1 when there's no possible path", () => {
//     expect(findShortestPathLength(impossible, [1, 1], [4, 4])).toEqual(-1);
//   });
// });
