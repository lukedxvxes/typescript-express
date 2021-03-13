import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import {router} from './routes/loginRoutes';

const app = express();
const port = 3000;
app.use(cookieSession({keys: ['string']}));
app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(port, () => {
    console.log(`app listening on http:localhost/${port}`);
});
