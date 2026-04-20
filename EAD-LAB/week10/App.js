const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Home page</h1>');
        res.end();
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>About page</h1>');
        res.end();
    } 
    else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>contact page</h1>');
        res.end();
    }
    
})
server.listen(3000,()=>{
    console.log('started at 3000');
});