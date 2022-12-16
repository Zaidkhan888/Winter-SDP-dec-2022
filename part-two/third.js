const fs = require("fs")


const dumyobj  = {
    "name" : "Zaid" , 
    "age" : "20" ,
    "add" : "mum"

}

//parsing ==> to the strng
// fs.writeFile("result.txt"  , JSON.stringify(dumyobj) , (error)=>{
//     console.log("error: " , error);
// })  


// synchr

try {
    const data =  fs.writeFileSync("result.txt"  , JSON.stringify(dumyobj))
    // console.log(data);
    
} catch (error) {
    console.log(error)
}