import cors from 'cors';
import express from 'express';
import {router} from './routes'

export const app = express()
app.use(express.json())
app.use(cors())

//para criar novas rotas
app.use('',router)
app.use('/update',router)
