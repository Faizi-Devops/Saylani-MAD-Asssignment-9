interface user{
    name:string,
    sclass:string,
    rollno:number,
}
let userName:user = {
    name:"Faizan Ali",
    sclass:"BSCS",
    rollno:49546,

} 
let total=Object.keys(userName).length;
console.log(total)