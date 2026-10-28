import {config} from 'dotenv'
import env from 'env-var'

config()
const PORT = env.get('PORT').asPortNumber()


console.log(PORT)

console.log(process.env.PORT)