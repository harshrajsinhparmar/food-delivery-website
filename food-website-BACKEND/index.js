const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const PORT=5000;


const app=express();
app.use(cors());

app.use(express.static('public'))
app.use(express.json({ limit: "20mb" }));
const UserRouter =require('./routes/UserRoutes');
const ProductRouter= require('./routes/ProductRouter');

app.use('/user',UserRouter)
app.use('/product',ProductRouter)
mongoose.connect(
        "mongodb://localhost:27017/",
        {
            dbName:"foodyWebsite",
        }
).then(
    ()=>{console.log("our db connected successfully");
        app.listen(PORT,()=>{console.log("Our server started on port "+PORT);
        })
        }

).catch(
        (err)=>{
            console.log("error to connect with db",err.message);
                }



        )



                