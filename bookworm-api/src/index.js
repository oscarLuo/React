import express from 'express';
import path from 'path';
const app = express();

app.post('/api/auth', (req,res) => {
    res.status(400).json({
        errors : {
            globals: "Invalid credentials"
        }
    })
})
app.get('/*', (req,res) => {
    res.sendfile(path.join(__dirname, 'index.html'));
});



app.listen(8080, ()=> console.log("Server was running on the port 8080"));