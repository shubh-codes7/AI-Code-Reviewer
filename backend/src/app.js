import express from 'express'
import { sendResponse } from './controllers/ai.controller.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({message : "Welcome to Ai Code Reviewer"})
})
app.post('/get-response', sendResponse)

export default app