// aynchronous
// setInterval(()=>{
//     console.log("hello setTimeinterval ");
// } , 5000)


// // 1st parameter is callback
// setTimeout(()=>{
//     console.log("hello setTimeout");

// }, 3000)


//setTimeout and setTInerval can be used tomake synchronius function to async
function greetings(params) {
    
    setTimeout(() => {
        console.log("hello greetings function!!")
        
    }, 5000);
    
}


greetings()