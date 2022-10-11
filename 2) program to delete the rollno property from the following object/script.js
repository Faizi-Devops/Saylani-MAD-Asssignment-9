var userName = {
    name: "Faizan Ali",
    sclass: "BSCS",
    rollno: 49546
};
console.log("before deletion");
console.log(userName);
delete userName.rollno;
console.log("After deletetion");
console.log(userName);
