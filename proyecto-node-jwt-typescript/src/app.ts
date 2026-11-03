import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

const app = express()

app.use(express.json())

// Routes
// autenticación
// user

console.log('Esto esá siendo ejecutado')

export default app