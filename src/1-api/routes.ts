import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';
import * as morgan from 'morgan';
import * as createError from 'http-errors';
import { attachControllers } from '@decorators/express';
import { PersonController, TaskController, UserController } from './controllers';

class Routes {
  app: any;
  constructor(app) {
    this.app = app
  }

  async createRoutes() {
    const apiRouter = express.Router()
    apiRouter.use(cors())
    apiRouter.use(bodyParser.json())
    apiRouter.use(compression())
    apiRouter.use(morgan('dev'))

    attachControllers(apiRouter, [UserController, PersonController, TaskController])
    
    apiRouter.use((req, res, next) => {
      next(createError(404, 'Path not found 🌌.'))
    })

    apiRouter.use((error, req, res, next) => {
      if (res.headersSent) {
        return next(error)
      }
      res.status(error.status || 500)
      res.json({
        status: error.status,
        message: error.message,
      })
    })

    this.app.use('/api', apiRouter)
  }
}

export default Routes;
