import express from 'express'
import cors from 'cors'
import { StatusCodes } from 'http-status-codes'

const app = express()

require('express-async-errors')

//middleware
app.use(express.json())
app.use(cors())

import { notFound } from '../config/middleware/notFound-err'


app.get('/', (req, res) => {
    res.status(StatusCodes.OK).send(res.send("Bienvenu a l'api de la santé"))
  })

  app.use(notFound)

const port = process.env.PORT || 2019

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)
})