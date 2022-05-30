# Ripio Challenge

<div styles={"display: inline"}> 
   <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
   <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
   <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
   <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
   <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
   <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
   <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
   <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" />
</div>

## Para arrancar el proyecto


    git clone https://github.com/NicolasBiondini/Ripio-Challenge
    cd Ripio-Challenge

Para crear las imagenes

    docker-compose build

Para arrancar el proyecto

    docker-compose up

## Sobre el proyecto
Dada la consigna asignada decidí hacer el challenge un poquito más complejo realizando una estructura con frontend, backend (con simulacion de base de datos por medio de un archivo JSON) y, finalmente, el deploy usando docker, docker-compose y nginx.
Actualmente se encuentra disponible el deploy realizado en AWS. 
El frontend fue realizado con React js / TypeScript / Redux.
El backend fue realizado con Node js / Express y sirvó especificamente como proxy a la hora de realizar las request a las diversas APIs de Ripio, y también para manejar peticiones GET y PUT de una pequeña base de datos creada con un archivo JSON.

## Tecnologías aplicadas

 1. React js
 2. Redux Toolkit (con redux-thunk)
 3. TypeScript
 4. Styled-Components
 5. Axios
 6. Node js
 7. Express
 8. Docker
 9. Docker-Compose
 10. Nginx
 11. AWS

## Imagenes
![Screenshot](https://github.com/NicolasBiondini/Ripio-Challenge/blob/main/assets/screen1.png)
![Screenshot](https://github.com/NicolasBiondini/Ripio-Challenge/blob/main/assets/screen2.png)
![Screenshot](https://github.com/NicolasBiondini/Ripio-Challenge/blob/main/assets/screen3.png)
![Screenshot](https://github.com/NicolasBiondini/Ripio-Challenge/blob/main/assets/screen4.png)
![Screenshot](https://github.com/NicolasBiondini/Ripio-Challenge/blob/main/assets/screen5.png)
![Screenshot](https://github.com/NicolasBiondini/Ripio-Challenge/blob/main/assets/screen6.png)


## Estructura del proyecto

    ├── **backend**
    │   ├── app.js
    │   ├── config
    │   │   └── config.js
    │   ├── controllers
    │   │   ├── getCoins.controller.js
    │   │   ├── getPrices.controller.js
    │   │   ├── getTransactions.controller.js
    │   │   ├── getWallet.controller.js
    │   │   └── index.js
    │   ├── database
    │   │   └── DB.json
    │   ├── Dockerfile
    │   ├── helpers
    │   │   ├── getData.js
    │   │   ├── getDB.js
    │   │   └── writeDB.js
    │   ├── package.json
    │   ├── package-lock.json
    │   └── routes
    │       └── dataRoutes.routes.js
    ├── docker-compose.yml
    ├── **frontend**
    │   ├── Dockerfile
    │   ├── nginx
    │   │   └── default.conf
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── manifest.json
    │   │   └── robots.txt
    │   ├── src
    │   │   ├── api
    │   │   │   ├── axios.ts
    │   │   │   └── config.ts
    │   │   ├── app
    │   │   │   ├── slices
    │   │   │   │   ├── buyCoinsSlice.ts
    │   │   │   │   ├── coinsSlice.ts
    │   │   │   │   ├── converterSlice.ts
    │   │   │   │   ├── locationSlice.ts
    │   │   │   │   └── walletSlice.ts
    │   │   │   └── store.ts
    │   │   ├── App.test.tsx
    │   │   ├── App.tsx
    │   │   ├── components
    │   │   │   ├── accountCards
    │   │   │   │   ├── AccountCards.styles.ts
    │   │   │   │   └── AccountCards.tsx
    │   │   │   ├── exchangeForm
    │   │   │   ├── fieldset
    │   │   │   ├── layout
    │   │   │   ├── layoutConverter
    │   │   │   │   ├── converter
    │   │   │   ├── loader
    │   │   │   ├── messageContainer
    │   │   │   ├── movementsTable
    │   │   │   │   └── TableOperations
    │   │   │   ├── navbar
    │   │   │   │   ├── account
    │   │   │   │   ├── hamburger
    │   │   │   │   ├── logo
    │   │   │   ├── sideNavBar
    │   │   │   │   ├── button
    │   │   │   └── totalMoneyAccount
    │   │   ├── fonts
    │   │   │   ├── lato-v23-latin-300.woff
    │   │   ├── fontStyles.ts
    │   │   ├── globalStyles.ts
    │   │   ├── hooks
    │   │   ├── images
    │   │   ├── index.tsx
    │   │   ├── pages
    │   │   │   ├── billeteraPage
    │   │   │   ├── cotizacionesPage
    │   │   │   ├── exchangePage
    │   │   │   ├── homePage
    │   │   │   │   ├── HomePage.styles.ts
    │   │   │   │   └── HomePage.tsx
    │   │   │   └── movimientosPage
    │   │   ├── react-app-env.d.ts
    │   │   ├── reportWebVitals.ts
    │   │   ├── setupTests.ts
    │   │   ├── theme.ts
    │   │   ├── types
    │   │   └── util
    │   │       ├── getData
    │   │       ├── handlers
    │   │       ├── putData
    │   │       ├── toConverter.ts
    │   │       └── toPesos.ts
    │   └── tsconfig.json
    └── **nginx**
        ├── configs
        │   └── default.conf
        └── Dockerfile

