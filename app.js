/*
https://www.youtube.com/watch?v=VShtPwEkDD0
*/

// require http library
// Going to be used to start the server
const http = require('http')
const fs = require('fs')
const port = 3000 //tells code what port to listen to


//takes a single function with request and response paramaters
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile("index.html", function(error, data){
        if(error){
            res.writeHead(404)
            res.write('err: file not found')
        } else{
            res.write(data)
        }
        res.end()
    })   
})

//set up server so it will listen on selected port
server.listen(port, function(error){
    if(error) {
        console.log("oops, something went wrong", error)
    } else {
        console.log("server listening on port " + port)
    }
})