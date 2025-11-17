# Estructura del Proyecto `proyectoLanding`

Este documento describe la estructura de directorios del proyecto `proyectoLanding` a la fecha 14 de noviembre de 2025.

```
C:\Users\PABLO\Desktop\landingGeneral\
└───frontend\
    └───proyectoLanding\
        ├───.editorconfig
        ├───.gitignore
        ├───angular.json
        ├───GEMINI.md
        ├───package-lock.json
        ├───package.json
        ├───tailwind.config.js
        ├───tsconfig.app.json
        ├───tsconfig.json
        ├───tsconfig.spec.json
        ├───.angular\
        │   └───cache...\
        ├───.git...\
        ├───.vscode\
        │   ├───extensions.json
        │   ├───launch.json
        │   └───tasks.json
        ├───dist...\
        ├───node_modules...\
        ├───public\
        │   └───favicon.ico
        └───src\
            ├───index.html
            ├───main.ts
            ├───styles.css
            └───app\
                ├───app.config.ts
                ├───app.css
                ├───app.html
                ├───app.routes.ts
                ├───app.spec.ts
                ├───app.ts
                └───landing\
                    ├───landing.css
                    ├───landing.html
                    ├───landing.spec.ts
                    ├───landing.ts
                    ├───about\
                    │   ├───about.css
                    │   ├───about.html
                    │   ├───about.spec.ts
                    │   └───about.ts
                    ├───contact\
                    │   ├───contact.css
                    │   ├───contact.html
                    │   ├───contact.spec.ts
                    │   └───contact.ts
                    ├───footer\
                    │   ├───footer.css
                    │   ├───footer.html
                    │   ├───footer.spec.ts
                    │   └───footer.ts
                    ├───header\
                    │   ├───header.css
                    │   ├───header.html
                    │   ├───header.spec.ts
                    │   └───header.ts
                    ├───hero\
                    │   ├───hero.css
                    │   ├───hero.html
                    │   ├───hero.spec.ts
                    │   └───hero.ts
                    ├───my-projects\
                    │   ├───my-projects.css
                    │   ├───my-projects.html
                    │   ├───my-projects.spec.ts
                    │   └───my-projects.ts
                    ├───my-services\
                    │   ├───my-services.css
                    │   ├───my-services.html
                    │   ├───my-services.spec.ts
                    │   └───my-services.ts
                    └───testimonials\
                        ├───testimonials.css
                        ├───testimonials.html
                        ├───testimonials.spec.ts
                        └───testimonials.ts
```

## Descripción General

El proyecto `proyectoLanding` es una aplicación web desarrollada con Angular. La estructura sigue las convenciones estándar de Angular, con un enfoque modular para los componentes de la página de aterrizaje (`landing`).

### Directorios Principales

-   `.angular/`: Contiene archivos de caché y configuración interna de Angular.
-   `.git/`: Repositorio Git local.
-   `.vscode/`: Configuraciones específicas para Visual Studio Code.
-   `dist/`: Directorio de salida para los archivos de construcción de la aplicación.
-   `node_modules/`: Dependencias del proyecto instaladas por npm.
-   `public/`: Contiene activos estáticos como `favicon.ico`.
-   `src/`: Contiene el código fuente de la aplicación.

### `src/`

Dentro de `src/`, la estructura es la siguiente:

-   `index.html`: El archivo HTML principal de la aplicación.
-   `main.ts`: El punto de entrada principal de la aplicación Angular.
-   `styles.css`: Estilos globales de la aplicación.
-   `app/`: Contiene los componentes y la lógica principal de la aplicación.
    -   `app.config.ts`: Configuración de la aplicación.
    -   `app.css`: Estilos específicos del componente raíz de la aplicación.
    -   `app.html`: Plantilla HTML del componente raíz de la aplicación.
    -   `app.routes.ts`: Definición de las rutas de la aplicación.
    -   `app.spec.ts`: Archivo de pruebas para el componente raíz.
    -   `app.ts`: Lógica del componente raíz de la aplicación.
    -   `landing/`: Este directorio contiene los componentes específicos que conforman la página de aterrizaje. Cada subdirectorio representa una sección de la landing page.
        -   `about/`: Componente para la sección "Acerca de".
        -   `contact/`: Componente para la sección de "Contacto".
        -   `footer/`: Componente para el pie de página.
        -   `header/`: Componente para el encabezado.
        -   `hero/`: Componente para la sección principal (hero).
        -   `my-projects/`: Componente para la sección de "Mis Proyectos".
        -   `my-services/`: Componente para la sección de "Mis Servicios".
        -   `testimonials/`: Componente para la sección de "Testimonios".

Cada componente dentro de `landing/` sigue un patrón consistente, incluyendo archivos `.css` para estilos, `.html` para la plantilla, `.spec.ts` para pruebas y `.ts` para la lógica del componente.

## Archivos de Configuración

-   `.editorconfig`: Configuración para editores de código.
-   `.gitignore`: Archivo para ignorar archivos y directorios en Git.
-   `angular.json`: Archivo de configuración principal de Angular CLI.
-   `GEMINI.md`: Documento específico para el agente Gemini.
-   `package-lock.json`: Registra las versiones exactas de las dependencias.
-   `package.json`: Define las dependencias del proyecto y scripts.
-   `tailwind.config.js`: Configuración de Tailwind CSS.
-   `tsconfig.app.json`, `tsconfig.json`, `tsconfig.spec.json`: Archivos de configuración de TypeScript para diferentes entornos (aplicación, general, pruebas).
