const fs = require('fs')

// esto crea un archivo
/*fs.writeFile('./test.txt', 'Hola Koders!', (error) => {
  if (error) throw error
  console.log('archivo creado correctamente')
})*/


// esto muestra el contenido del archivo
/* fs.readFile('./test.txt', 'utf-8', (error, data) => {
  if (error) throw error
  console.log(data)
}) */

// agregar cosas a un archivo
/* fs.appendFile('./test.txt', ' Saludo desde NodeJs', (error) => {
  if (error) throw error
  console.log('el archivo se modificó de manera correcta')
}) */

// borrar un archivo
/* fs.unlink('./test.txt', (error) => {
  if (error) throw error
  console.log('el archivo se elimino mi brother')
}) */

// crear una carpeta
/* fs.mkdir('./newFolder', (error) => {
  if (error) throw error
  console.log('acarpeta creada correctamente')
})
 */
//leer directorio
/* fs.readdir('./examples', {withFileTypes: false}, (error, files) => {
  if (error) throw error
  files.forEach(file => {
    console.log(file)
  })
}) */

// para eliminar carpetas (directorios)
fs.rmdir('./newFolder', {recursive: false}, (error) => {
  if (error) throw error
  console.log('directorio eliminado tipo cool')
})

/* 
Este es el reto de hoy
Generar una funcion que obtenga info de un archivo local (practicaFileSystem.json) y agregue la clave ‘read’ con valor ‘true’

Criterios:
La ruta del archivo JSON debe obtenerse por argumentos
La clave read debe guardarse en el archivo, no solo en la pantalla

Se puede usar JSON.stringify y JSON.parse

 */