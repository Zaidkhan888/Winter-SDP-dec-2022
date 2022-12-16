const http = require("http");
const qs = require('qs');
let data = []


//first -1st
// http.createServer((req, res) => {

//     console.log("pathname : ", req.url);
//     console.log("method : ", req.method);

//     // if(req.url === "/users" && req.method=="GET")
//     if (req.url === "/users") {
//         if (req.method == "GET") {

//             res.write("hello GET")
//         }
//         if (req.method == "POST") {
            
//             res.on("data"  ,(chunk)=>{
//                 data.push(chunk);
//             })

//             res.on("end" , ()=>{
//                 console.log(data)

//             })
//             res.write("Hello Post")
//         }
//         // res.write("hello server zaid is here!!")  //agar comment nhi rha toh yeh bhi chalega by default


//         //returning the end -- aagey nhi jaayega
//         return res.end();


//     }
//     res.write("hello server")
//     res.end();
// }).listen(8000)



//second --2nd
http.createServer((req, res) => {

    console.log("pathname : ", req.url);
    console.log("method : ", req.method);

    // if(req.url === "/users" && req.method=="GET")
    if (req.url === "/users") {
        if (req.method == "GET") {
            res.write(JSON.stringify(data));
            return res.end();

        }
        if (req.method == "POST") {
            let body = "";
            
            req.on("data"  ,(chunk)=>{
                body = chunk.toString(); //convert buffer too string
            })

            return req.on("end" , ()=>{
                console.log(body)
                data.push(qs.parse(body))
                res.write("user created sucesfully")
                res.end('.OK');


            })
        }
        // res.write("hello server zaid is here!!")  //agar comment nhi rha toh yeh bhi chalega by default


        //returning the end -- aagey nhi jaayega
        return res.end();


    }
    res.write("hello server")
    res.end();
}).listen(8000)

