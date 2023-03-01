// import { MoodController } from './controllers/MoodController';
import { router } from './routes';
import * as express from 'express';
// TODO dotenv segítségével a környezeti változókat visszavezetni (PORT)
import * as cors from 'cors';
// import * as path from 'path';

const app = express();

/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());
app.use(express.text());
/** handle browser preflight conditions */
app.use(cors());
app.options('*', cors())

/** RULES OF OUR API */
app.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

app.use('/', router);
// app.get('/api/mood', MoodController);

// Bind static content to server
// TODO replace relative path with absolute module name
// const pathToWebUI = path.dirname(require.resolve('../../../tstuto-web-client'));
// const staticDirToServer = path.join(pathToWebUI, 'public');
// console.log(staticDirToServer);
// app.use(express.static(staticDirToServer));

// TODO should reintroduce 'http' package? -->
// const httpServer = http.createServer(app);
const PORT: number = 3000;
app.listen(PORT, () => console.log(`*** Example app listening on port ${PORT}! ***`));
