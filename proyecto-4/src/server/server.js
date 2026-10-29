import express  from 'express'
import path  from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

// El objeto __dirname no está definido cuando trabajamos con type: module
// en el package.json, por eso debemos crearlo nosotros de esta manera
const __filename = fileURLToPath(import.meta.url) 
const __dirname = dirname(__filename)

 export const startServer = (options) => {
    const {port, public_path = 'public'} = options
    //console.log('El puerto es ', port)
    // console.log('El path es ', public_path)
    const app = express()
    app.use(express.static(public_path)) // Contenido estático que ponemos disponible para uso

    app.get('/{*any}', (req,res)=>{
        const indexPath = path.join(__dirname, `../../${public_path}/index.html`)
        // const indexPath = path.join(pathname, '/index.html')
        res.sendFile(indexPath)
    
    })

    app.listen(port, ()=>{
        // console.log(pathname)
        console.log(fileURLToPath)
        console.log(dirname)
        console.log(__filename)
        console.log(__dirname)
        console.log(`Escuchando en puerto ${port}`)
    })
}

