const {envs} = require('./config/env')
const { startServer} = require('./server/server')

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