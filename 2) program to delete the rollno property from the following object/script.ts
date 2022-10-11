interface user{
    name:string,
    sclass:string,
    rollno?:number
}

let userName:user= {
    name:"Faizan Ali",
    sclass:"BSCS",
    rollno:49546
}
console.log("before deletion");
console.log(userName)
delete userName.rollno;
console.log("After deletetion" )
console.log(userName)