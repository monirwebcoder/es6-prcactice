const ages = [1,6,8,32];
const ages2 = [45,40,37,35,30];
const ages3 = [65,55,40,80];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages,...ages2,5,...ages3];

//console.log(allAges2);

const monir  =39;
const sumi = 32;
const taiba = 8;
//const getMaximun = Math.max(monir,sumi,taiba);
const ourAge = [39,32,8];

const getMaximun = Math.max(... ourAge);

console.log(getMaximun);