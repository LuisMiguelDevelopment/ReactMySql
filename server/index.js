import  express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app =express();
app.use(express.json());
app.use(cors());


app.listen(8800,()=> console.log('Servidor on 8800'))

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'reactcrud'
});

app.get("/libros",(req,res)=>{
    const q ="SELECT * FROM libros"
    db.query(q, (err,data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})

app.post("/libros",(req, res)=>{
    const q = "INSERT INTO libros(`titulo`,`descrip`,`precio`,`portada`)values(?)";
    const values =[
        req.body.titulo,
        req.body.descrip,
        req.body.precio,
        req.body.portada
    ]

    db.query(q,[values],(err ,data)=>{
        if(err) return res.json(err)
        return res.json("Almacenado")
    })
})