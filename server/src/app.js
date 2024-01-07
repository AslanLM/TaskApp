import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

const allowedOrigins = [
    'http://localhost:5173',
    'https://task-app-ecru-six.vercel.app'
  ];

app.use(cors({
origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
    callback(null, true);
    } else {
    callback(new Error('Domain not allowed by CORS'));
    }
},
credentials: true
}));


app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

app.get('/', (req, res) => {
  res.send('TaskAPI');
});

export default app;
