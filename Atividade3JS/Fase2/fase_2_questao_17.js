// const arr = [10, 15, 22, 34, 45, 60];
// const processado = arr.filter(n => n % 3 === 0).map(n => ({ original: n, metade: n / 2 
// })).reduce((acc, obj) => acc + obj.metade, 0);
// console.log(processado);

const arr = [10, 15, 22, 34, 45, 60];
const filArr = [];
const mapArr = [];
let redArr = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0){
        filArr.push(arr[i]);
    };
};

for(let i = 0; i < filArr.length; i ++){
    mapArr.push(filArr[i]/2);
};

for(let i = 0; i < mapArr.length; i++){
    redArr = redArr + mapArr[i];
}

console.log(redArr);

