// let value="prathap/ Srikanth, solution/ Prathap,newOne/ Run"
// // console.log(value.split(','))
// let splitData=value.split(',')
// let i=0;
// while(splitData.length>i){
//     let data=splitData[i].trim('')
//     let spaceCheck=/\//g.test(data)
//     if(!spaceCheck){
//         let spaceAfterSlash=data.replace(/\//g,'/ ')
//         splitData[i]=spaceAfterSlash
//     }else{
//         let result=splitData.join(',')

//     }
//     i++
// }
// console.log(result)


let value = "prathap/ Srikanth, solution/ Prathap,newOne/ Run";
let splitData = value.split(',');
let i = 0;
let result; // Declare result variable outside the loop

while (i < splitData.length) {
    let data = splitData[i].trim();
    let spaceIndex = data.indexOf('/');
    if (spaceIndex !== -1 && data[spaceIndex + 1] !== ' ') {
        // If there is a slash and there is no space after it
        let spaceAfterSlash = data.replace('/', '/ ');
        splitData[i] = spaceAfterSlash;
    }
    i++;
}

result = splitData.join(',');

console.log(result);




