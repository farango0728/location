# Proyecto Location

El siguiente proyecto soportar las necesidades de buscar direcciones.

---
## Requerimientos

Para el desarrollo, solo necesitará Node.js y un paquete global de nodo, npm, instalado en su entorno.

### Node
- #### Node instalacion en widows

  simplemente [official Node.js website](https://nodejs.org/) y descargue el instalador.
Además, asegúrese de tener `git` disponible en su PATH,` npm` podría necesitarlo (puede encontrar (git [here](https://git-scm.com/)).

- #### Node instalacion en Ubuntu

  Puede instalar nodejs y npm fácilmente con apt install, simplemente ejecute los siguientes comandos..

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Otros sistemas operativos
  Puede encontrar más información sobre la instalación en el [official Node.js website](https://nodejs.org/) y ene [official NPM website](https://npmjs.org/).

Si la instalación fue exitosa, debería poder ejecutar el siguiente comando.

    $ node --version
    v

    $ npm --version
    v

Si necesita actualizar `npm`, puede hacerlo usando.
    
    $ npm install npm -g

---

## Instalacion

    $ https://github.com/farango0728/location.git
    $ cd location
    $ npm install

## Configure app

Crear el archivo .env y configurar las siguientes variables

- JWT_SECRET = 
- SALT = 
- EXPIRES_IN =
- TOKEN_HERE =
 

## Ejecutar en Desarrollo

    $ npm run dev

## Ejecutar en Produccion

    $ npm run build
    
---
## Tecnologias implementadas
- ### Nodejs
  [official Node.js website](https://nodejs.org/)
- ### Express
  [official Express website](https://expressjs.com/es/)
- ### Base de datos Mysql
  [official Mysql website](https://www.mysql.com/)
- ### TypeOrm
  [official Typeorm website](https://typeorm.io/)
- ### Typescript
  [official typescript website](https://www.typescriptlang.org/)

---
## Documentacion Api
- ### Insomnia Design
  [official Insomnia Design website](https://insomnia.rest/product/design)
---

## Edictor Codigo
- ### Visual Studio Code
  [official visual Studio code website](https://code.visualstudio.com/)
  
  ---

## Cliente HTTP
- ### Postman
  [official postman website](https://www.postman.com/)
  
    ---

## Autenticación y Autorización
- ### Autenticacion
-
![image](https://user-images.githubusercontent.com/20598508/113518342-5ff66080-954b-11eb-949e-30568139c2b3.png)

  
- ### Autorización

- se efectua en login, el sistema genera el token, ese token se debe de colocar en cada llamado de los enpoint
![image](https://user-images.githubusercontent.com/20598508/113518372-8d430e80-954b-11eb-831c-2f958c8fae1b.png)


- se validad el rol del usuario para los ingresos a los enpoint

