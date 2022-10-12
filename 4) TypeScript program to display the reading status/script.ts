interface user{
    author:string,
    title:string,
    readingStatus:boolean,
}
let usesName:user[] = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]
usesName.forEach((value)=>{
    console.log( value)


})


