const http = require("http");
const fs = require("fs");
const port = 3000;

const app = http.createServer(function(req, res) {
    // res.writeHead(200, {"Content-type": "application'json"}); // setting the header 
    // res.write(req.url); // write a response to the client req.url has the endpoint

    // reading an html file and sending the data inside it to the response 
    /*fs.readFile("index.html", function(err, data) { // reading from the file 
        if (err) {
            res.end("Some error occured");
        }
        res.write(data);
        res.end();
    })*/

    // appends the provided text into the textFile.txt file
    /*fs.appendFile("textFile.txt", "added text ", function(err, data) {
        if (err) {
            res.end("Some error occured");
        }

        res.write("text appended");
        res.end();
    })*/

    //* if we want to replace the content from the given file, we use fs.writeFile()
    /*fs.writeFile("./textFile.txt", "new replaced text part 2", function(err, data) {
        if (err) {
            res.end("Some error occured");
        }

        res.write("Text replaced successfully");
        res.end();
    })*/

    //* fs.unlink() deletes the file
    /*fs.unlink("./textFile.txt", function(err, data) {
        if (err) {
            res.end("Some error occured");
        }

        res.end("File deleted successfully");
    })*/

    //* similarly there's fs.open() opens a file in the given mode, 
    //* if the file does not exist, it creates one (but only in the "w" mode)
    // fs.open("textFile.txt", "w", function(err, data) {
    //     if (err) {
    //         res.end("Some error occured");
    //     }
    //     res.end("File opened/created successfully");
    // })

    //* fs.rename() renames the given file

    //------------------------------------------------------------------------//
    /* HANDLING ENDPOINTS */
    if (req.url === "/") {
        fs.readFile("./index.html", function(err, data) {
            if (err) {
                res.end("Some error occured");
            } else {
                res.end(data);
            }
        })
    }
    if (req.url === "/admin") {
        res.end("ADMIN PAGE");
    }
})

app.listen(port, function() {
    console.log(`app listening at port number ${port}`);
})