import express from "express"
const app = express();
import dotenv from "dotenv";
dotenv.config();

//connect db and authenticate user
import connectDB from "./db/connect.js";

//Routes
import authRouter from "./routes/authRouter.js";
import jobsRouter from "./routes/jobsRouter.js"

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js"


app.use(express.json())

app.get('/',(req,res)=>{
    
    res.send('welcome home')
})

app.use("/api/v1/auth",authRouter)
app.use('/api/v1/jobs',jobsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;



const start = async()=>{
    try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
    }
    catch(err){
        console.log(err)
    }
}
start()