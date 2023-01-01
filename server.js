import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler, notFoundError } from './middlewares/error-handler.js'


const app = express();

const port = process.env.PORT || 9092;


import userRoutes from './routes/user.js';
import weddingRoutes from './routes/wedding.js';
import checklistRoutes from './routes/checklist.js';
import guestRoutes from './routes/guest.js';
import budgetRoutes from './routes/budget.js';

const database = 'SIM3'
mongoose.connect(`mongodb://localhost:27017/${database}`)
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // Pour analyser (parsing) les requetes application/json
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static('public/images/weds'));


app.use((req, ers, next) => {
    console.log("middleware just ran");
    next();
});

app.use("/gse", (req, ers, next) => {
    console.log("middleware just ran on a gse route");
    next();
});

// pr�fixe chaque route ici avec /game
app.use('/user', userRoutes);
app.use('/wedding', weddingRoutes);
app.use('/checklist', checklistRoutes); // Utiliser les routes cr��s
app.use('/guest', guestRoutes);
app.use('/budget', budgetRoutes);


app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});