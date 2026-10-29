import {envs}  from './config/env.js'
import { startServer} from './server/server.js'

const main = ()=>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

( async ()=>{
    main() 
})() // esta es una función autoconvocada (la ejecutamos con los paréntesis al final) 
// y es agnóstica (no tiene nombre) 