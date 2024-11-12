const { getUser } = require("./jobs");

const findMostCommonTitle = (myId, degreesOfSeparation) => {
  const me = getUser(myId); 
  const queue = [me];
  const seen = [];
  const tallies = {};
  let currentDegreeOfSeparation = 0;

  while(currentDegreeOfSeparation <= degreesOfSeparation) {
    const tempQueueLength = queue.length;

    for(let i = 0; i < tempQueueLength; i++) {
      const dequeueingUser = queue.shift();

      if(!seen.includes(dequeueingUser.id)) {
        const newTally = (tallies[dequeueingUser.title] || 0) + 1;
        const dequeueingConnections = dequeueingUser.connections.map(id => getUser(id));
        
        tallies[dequeueingUser.title] = newTally;
        
        seen.push(dequeueingUser.id);
        queue.push(...dequeueingConnections)
      }
    }

    currentDegreeOfSeparation++;
  }

  let highestTally = {};

  for ([title, tally] of Object.entries(tallies)) {
    if(!highestTally?.tally || tally >= highestTally.tally) {
      highestTally = { title, tally };
    }
  }

  return highestTally.title;
};

findMostCommonTitle(1, 4)