const express = require('express')
const path = require('path')

const startServer = (options) => {
    const {port, public_path = 'public'} = options
    //console.log('El puerto es ', port)
    // console.log('El path es ', public_path)
    const app = express()
    app.use(express.static(public_path)) // Contenido estático que ponemos disponible para uso

    app.get('/{*any}', (req,res)=>{
        const indexPath = path.join(__dirname, `../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, ()=>{
        console.log(`Escuchando en puerto ${port}`)
    })
}

module.exports = {
    startServer
}