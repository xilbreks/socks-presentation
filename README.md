# Xilbreks

## Este Proyecto esta para controlar diapositovas desde otro dispositivo

El presente proyecto usa las siguentes tecnologias:
  - Socket.io
  - Revealjs
  - Nodejs
  - Express
  - ImageMagick

El ImageMagick es nativo al igual que Node, aqui que tendremos que instalarlos(omitir esto si ya lo tienen instalado)

    dnf install ImageMagick

Para instalar las dependencias del programa, ejecutar

    npm install

Para ejecutar el programa ejecutar, tener en cuenta que app.js lee un documento pdf llamado `document.pdf`, si este no existe no se mostrara nada en el navegador.

    Node app.js

En el navegador se ejecuta en el puerto 2500 y muestran dos URI, el primero es de la presentacion y el segundo para el control
    
    http://localhost:2500/presentation
    http://localhost:2500/control

Este proyecto es desarrollado por Xilbreks
