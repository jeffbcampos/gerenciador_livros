import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});