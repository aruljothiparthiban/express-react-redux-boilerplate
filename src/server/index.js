import express from 'express';
import bodyParser from 'body-parser';
import { scopePerRequest } from 'awilix-express';
import path from 'path';
import routes from './routes';
import errorHandler from './middlewares/error-handler.middleware';
import container from './helpers/dependency-container.helper';
import ResponseHelper from './helpers/response.helper';

const app = express();

new ResponseHelper().init(app);
app.use(bodyParser.json());
app.use(scopePerRequest(container));
app.use((req, res, next) => {
    // create a scoped container
    req.scope = container.createScope();
    next();
});

routes.initializeRoutes(app);
app.use('/', express.static(path.join(__dirname , '../../dist')));
app.use(errorHandler);

app.listen(3000, function(){
    console.log('application is listening on port 3000');
});