import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import citizensRouter from './getCitizens/router';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/citizens', citizensRouter);

const start = async () => {
  try {
    config();
    await mongoose.connect(
      `mongodb+srv://SmDancho:PnCLngZLqr69j6gF@nodejstest.1whb64p.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
