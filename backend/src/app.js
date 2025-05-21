import express from 'express'
import { sendResponse } from './controllers/ai.controller.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

app.post('/get-response', sendResponse)

export default app