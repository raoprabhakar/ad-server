import * as express from 'express';
import { mainRoute } from './IMS/router/mainRoute';
import * as bodyParser  from 'body-parser'
const app:any = express();
const router:any = express.Router();

const port = 9090;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.__basedir = __dirname;
console.log(global.__basedir+'\\images\\outlet_1.PNG');
app.use('/', mainRoute(router))

app.listen(port, () => {
  console.log(` server is listening on port ${port}`)
})

export {app};