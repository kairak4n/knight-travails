class Node {
    constructor(parent, position) {
        this.parent = parent;
        this.position = position;
    }
}

function knightMoves(start, end) {
    const visited = [new Node(null, start)]
    let res = 0;
    let i = 0;
    let target = findVisited(visited, end);
    while (target === null) {
        const length = visited.length;
        while (i < length) {
            const nextPositions = findNextPositions(visited[i].position)
            for (const np of nextPositions) {
                visited.push(new Node(visited[i], np))
            }
            i++;
        }
        res++;
        target = findVisited(visited, end);
    }
    let curr = target;
    const path = [];
    while (curr !== null) {
        path.unshift(curr);
        curr = curr.parent;
    }
    console.log(`You made it in ${res} moves! Here's your path:`)
    for (const node of path) {
        console.log(node.position);
    }
    return path;
}

function findNextPositions(start) {
    const res = [];
    for (let i = 0; i < 5; i++) {
        const x = i -  2;
        if (start[0] + x < 0) {
            continue;
        }
        for (let j = 0; j < 5; j++) {
            const y = j - 2;
            if (start[1] + y < 0) {
                continue;
            }
            if (Math.abs(x) * Math.abs(y) === 2) {
                res.push([start[0] + x, start[1] + y]);
            }
        }
    }
    return res;
}

function findVisited(visited, target) {
    for (const node of visited) {
        if (node.position[0] === target[0] && node.position[1] === target[1] ) {
            return node;
        }
    }
    return null;
}

knightMoves([0,0], [7,7]);
