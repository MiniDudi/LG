const http = require('http')
const url = require('url')
const fs = require('fs')

//npm i mime-types
const lookup = require('mime-types').lookup

const server = http.createServer((req, res) => {
    let parsedURL = url.parse(req.url, true)
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "")
    if(path == ""){
        path = "index.html"
    }

    console.log(`Requested path ${path}`)

    let file = __dirname + "/src/" + path
    fs.readFile(file, function(err, content){
        if(err){
            console.log(`ERROR 404 ${file}`)
            res.writeHead(400)
            res.end()
        }else{
            console.log(`Returning ${path}`)
            res.setHeader("X-Content-Type-Options", "nosniff")
            let mime = lookup(path)
            res.writeHead(200, { "Content-type": mime })
            res.end(content)
        }
    })
})

server.listen(3000, "localhost", () => {
    console.log('Listening on port 3000')
})