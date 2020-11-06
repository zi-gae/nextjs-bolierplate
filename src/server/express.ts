import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'

export default (routes: express.Router) => {
  const app = express()

  app.use(cors())
  app.use(compression())
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }))
  app.use(bodyParser.json())

  app.use(function (req: Request, res: Response, next: NextFunction) {
    if (process.env.NODE_ENV !== 'production')
      res.header('Access-Control-Allow-Origin', `${req.protocol}://${req.hostname}`)
    else res.header('Access-Control-Allow-Origin', `https://${req.hostname}`)

    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, Content-Length, X-Requested-With'
    )

    // intercepts OPTIONS method
    if (req.method === 'OPTIONS') {
      // respond with 200
      res.status(200).end()
    } else {
      // move on
      next()
    }
  })

  app.use(routes)

  return app
}
