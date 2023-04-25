import * as express from 'express';
import { mainRoute } from './IMS/router/mainRoute';
import * as bodyParser  from 'body-parser'
import * as cors from 'cors';

const app:any = express();
const router:any = express.Router();

const port = 9090;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.__basedir = __dirname;
app.use('/', mainRoute(router))

app.listen(port, () => {
  console.log(` server is listening on port ${port}`)
})

export {app};