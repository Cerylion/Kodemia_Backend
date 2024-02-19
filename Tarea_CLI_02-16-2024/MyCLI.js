//esta es la tarea del fin de semana:
/* 
Realizar un CLI que nos ayudara a crear los archivos necesarios para un proyecto web estatico conservando las buenas practicas en la estructura básicas
Las instrucciones son las siguientes:

Comando init <nombre_del_proyecto> : inicia un nuevo proyecto. Crea un directorio con el nombre del proyecto y dentro , el archivo llamado ‘index.html’
Comando html <nombre_de_archivo> : crea un archivo de extension .html en el directorio donde sea ejecutado (carperta html)
Comando js <nombre_de_archivo> : crea un archivo de extension .js dentro de una carpeta js
Comando css <nombre_de_archivo> : crea un archivo con extension css dentro del un directorio css - crea el directorio css si no existe previamente.
 */

const { scrypt } = require('crypto')
const fs = require('fs')

const args = process.argv.slice(2)
//console.log(args)

const CLIExec = () => {
  const func = args[0]
  const param = args[1]
    
  const init = (param) => {
    fs.mkdir(`./${param}`, (error) => {
      if (error) throw error
      console.log(`${param} directory succesfully created!`)
      fs.writeFile(`./${param}/index.html`, '<!DOCTYPE html>', (error) => {
        if (error) throw error
        console.log('index.html succesfully created')
      })
    })
  }

  const html = (param) => {
    if (fs.existsSync(`./${param}.html`)) {
      console.error('File already exist, DO NOT overwrite with empty file')
      return
    }
    fs.writeFile(`./${param}.html`, '<!DOCTYPE html>', (error) => {
      if (error) throw error
      console.log(`${param}.html file succesfully created`)
    })
  }

  const js = (param) => {
    if (fs.existsSync('./js') && fs.existsSync(`./js/${param}.js`)) {
      console.error('Path and file already exist, DO NOT overwrite with empty file')
      return
    } else if (!fs.existsSync('./js')) {
      fs.mkdir('./css', (error) => {
        if (error) throw error
        fs.writeFile(`./js/${param}.js`, "document.addEventListener('DOMContentLoaded', () => {}", (error) => {
          if (error) throw error
          console.log(`archivo ./js/${param}.js creado correctamente`)
        })
      })
    } else if (!fs.existsSync(`./js/${param}.js`)) {
      fs.writeFile(`./js/${param}.js`, "document.addEventListener('DOMContentLoaded', () => {}", (error) => {
        if (error) throw error
        console.log(`archivo ./js/${param}.js creado correctamente`)
      })
    }
  }

  const css = (param) => {

    if (fs.existsSync('./css') && fs.existsSync(`./css/${param}.css`)) {
      console.error('Path and file already exist, DO NOT overwrite with empty file')
    } else if (!fs.existsSync('./css')) {
      fs.mkdir('./css', (error) => {
        if (error) throw error
        fs.writeFile(`./css/${param}.css`, '#reset-this-root {all: initial;}', (error) => {
          if (error) throw error
          console.log(`archivo ./css/${param}.css creado correctamente`)
        })
      })
    } else if (!fs.existsSync(`./css/${param}.css`)) {
      fs.writeFile(`./css/${param}.css`, '#reset-this-root {all: initial;}', (error) => {
        if (error) throw error
        console.log(`archivo ./css/${param}.css creado correctamente`)
      })
    }
  }

  if (func == 'init') init(param) 
  else if (func == 'html') html(param)
  else if (func == 'js') js(param)
  else if (func == 'css') css(param)
  else return console.log(`No such thing as the ${func} command over here my friend`)
  
}
CLIExec()
