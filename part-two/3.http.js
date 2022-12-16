const  http = require("http")

//url for practing hte data caming from the server ==> if i do hit at the wrong instance of use or xyz then error code  404
const URL =  "http://jsonplaceholder.typicode.com/users "      

http.get(URL , (response)=>{
    const data = [];
    console.log("status code: " , response.statusCode);

    //event driven hai  ==> it is sending the response but  we had to listen
    //http sends data in a stream or chunks... we have to create a buffer
    //listening and stroing
    response.on("data"  ,(chunk)=>{
        data.push(chunk);
    })


console.log("data :"  , data ); // displaing the data in the array


response.on("end"  , ()=>{
    console.log("request eded")
    // concat is just convertin buffer to the string
    //parsing the data into the string
    console.log(JSON.parse(Buffer.concat(data).toString()));
})
   
})
