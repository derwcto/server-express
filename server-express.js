const express = require('express')
const app = express()

// Middleware para que tu servidor entienda archivos JSON
app.use(express.json())

const port = process.env.PORT ?? 3000

const proyectos = [
  { id: 1, nombre: 'E-commerce React', estado: 'En progreso' },
  { id: 2, nombre: 'App de Clima', estado: 'Completado' }
]

// Endpoint 1
app.get('/proyectos', (req, res) => {
  res.json(proyectos)
})

// Endpoint 2:
app.post('/proyectos', (req, res) => {
  const { nombre, estado } = req.body
  const nuevoProyecto = {
    id: proyectos.length + 1,
    nombre,
    estado: estado ?? 'Planeado'
  }
  proyectos.push(nuevoProyecto)
  res.status(201).json(nuevoProyecto)
})

// Inicializar el servidor
app.listen(port, () => {
  console.log(` Express API corriendo en http://localhost:${port}`)
})
