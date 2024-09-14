const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if (url ==='/'){
        res.write("<html>");
        res.write("<title>Welcome Page</title>");
        res.write("<head><h1>Welcome to Node Js Server</h1></head>");
        res.write("<body>");
        res.write("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");
        res.write("<p></p>");
        res.write("<form action='/message' method='POST'><input type='text'><button>Send</button></form>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }else if (url ==='/list'){
        res.write("<html>");
        res.write("<title>List Page</title>");
        res.write("<head><h1>List of programming languages</h1></head>");
        res.write("<body>");
        res.write("<ul>");
        res.write("<li>Python</li>");
        res.write("<li>Java</li>");
        res.write("<li>JavaScript</li>");
        res.write("<li>TypeScript</li>");
        res.write("</ul>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }else if (url ==='/message' && method === 'POST'){
        console.log("Post message received");
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }
});

server.listen(3000);