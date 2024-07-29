import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import adminRoutes from './routes/adminRoutes';
dotenv.config();
const app = express();
const mongoURI = process.env.MONGO_URI as string;


  mongoose.connect(`${mongoURI}`,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as mongoose.ConnectOptions).then(() => console.log('conected to db'))
  .catch(err => console.error(err));
  
  app.use(cors());
  app.use(express.json());
  
  app.get('/', async(req: Request, res: Response) => {
    res.send(req.headers);
  })


  app.use('/api/admin', adminRoutes);
  app.use('/api', userRoutes);

  const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})