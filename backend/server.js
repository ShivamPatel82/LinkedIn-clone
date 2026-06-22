import express    from 'express';
import cors       from 'cors';
import dotenv     from 'dotenv';
import postRoutes from './routes/posts.routes.js';
import userRoutes from './routes/user.routes.js';
import connToDB   from './config/intiDB.js';

dotenv.config();
const port = process.env.PORT || 3030;  

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://linked-in-clone-lake-omega.vercel.app"
    ],
    credentials: true
  })
);
app.use(express.json());

//db connection
connToDB();

//routes
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads"))


app.listen(port,()=>{
     console.log(`Server is running on ${port}`)
 })

