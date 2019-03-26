const pointsJ = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y:  7 /  8 },
  { x: 1 / 4, y:  7 /  8 },
];

const pointsFormattedJ = [];

pointsJ.forEach(o => pointsFormattedJ.push(`${o.x.toPrecision(3)},${o.y.toPrecision(3)}`));

/*
for (var i = 0; i < pointsJ.length; i++) {
  pointsFormattedJ[i] = `${pointsJ[i].x},${pointsJ[i].y}`;
}
*/

const points = pointsFormattedJ.join(' ');
console.log(points);
