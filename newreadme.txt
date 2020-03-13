const app=require('./backend/app')
const http=require('http');
const port=process.env.PORT || 3000;


const server=http.createServer(app);


app.set('port',port);
const runServer=((err)=>{
    if(err)
        console.error(err);
    else
        server.listen(port);
});
runServer();