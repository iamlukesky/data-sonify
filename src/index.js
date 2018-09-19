import { scales, scale } from "scribbletune";
import { scaleQuantize } from "d3-scale";

console.log(scales());

const octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const dorian = octaves.reduce((array, octave) => {
  return [...array, ...scale(`c${octave} dorian`)];
}, []);

const dorianScale = scaleQuantize()
  .domain([0, 2000])
  .range(dorian);

console.log(dorian);
console.log(dorianScale(200));
