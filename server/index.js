import express from 'express'
import { connection } from './postgres/postgres.js';
import cors from'cors';
import router from './view/routes.js';


const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})


connection()
