# FrancoMat - Landing Page del Proyecto

Este proyecto es una aplicación web de una sola página (SPA) desarrollada con Angular, diseñada como la página de presentación para la constructora "FrancoMat". La interfaz es moderna, responsive y está construida para ser fácilmente personalizable.

## ✨ Características

-   **Diseño Moderno y Responsive:** Totalmente adaptable a dispositivos móviles, tabletas y computadoras de escritorio.
-   **Componentes Modulares:** Estructura organizada en componentes de Angular para cada sección de la página (Inicio, Servicios, Proyectos, etc.).
-   **Estilizado con Tailwind CSS:** Utilidad de clases de CSS para un desarrollo rápido y un diseño consistente.
-   **Navegación Fluida:** Desplazamiento suave (`smooth scroll`) entre las diferentes secciones de la página.
-   **Preparado para Backend:** Estructura lista para integrar servicios y consumir una API REST para funcionalidades dinámicas (ej. formulario de contacto).

## 🚀 Tecnologías Utilizadas

-   **Angular (v17+):** Framework principal para la construcción de la interfaz de usuario.
-   **TypeScript:** Lenguaje de programación principal.
-   **Tailwind CSS:** Framework de CSS para el diseño y estilizado.
-   **Node.js y npm:** Entorno de ejecución y gestión de paquetes para el desarrollo.

## 🛠️ Guía de Desarrollo

Sigue estos pasos para levantar el proyecto en un entorno de desarrollo local.

### Prerrequisitos

-   Tener instalado [Node.js](https://nodejs.org/) (que incluye npm). Se recomienda la versión LTS.
-   Tener instalado el [Angular CLI](https://angular.io/cli) de forma global:
    ```bash
    npm install -g @angular/cli
    ```

### Instalación

1.  Clona el repositorio (o asegúrate de estar en el directorio `frontend`).
2.  Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

### Servidor de Desarrollo

Ejecuta el siguiente comando para iniciar el servidor de desarrollo de Angular:

```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## 🔗 Conexión con un Backend Real

Para que funcionalidades como el formulario de contacto funcionen, necesitas conectar la aplicación a un backend que pueda procesar las solicitudes.

### 1. Configurar la URL de la API

La mejor práctica es gestionar las URLs de la API a través de los archivos de entorno de Angular.

-   **Para desarrollo:** `src/environments/environment.ts`
-   **Para producción:** `src/environments/environment.prod.ts`

Añade una propiedad `apiUrl` en ambos archivos:

```typescript
// En src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // URL de tu backend de desarrollo
};

// En src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.francomat.com' // URL de tu backend de producción
};
```

### 2. Crear un Servicio para las Peticiones HTTP

Centraliza todas las llamadas a la API en un servicio de Angular.

1.  **Genera el servicio** con Angular CLI:
    ```bash
    ng generate service services/api
    ```

2.  **Configura el servicio** para usar `HttpClient` y la URL del entorno. Asegúrate de tener `provideHttpClient()` en tu `app.config.ts`.

    ```typescript
    // En src/app/services/api.service.ts
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { environment } from '../../environments/environment';

    @Injectable({
      providedIn: 'root'
    })
    export class ApiService {
      private apiUrl = environment.apiUrl;

      constructor(private http: HttpClient) { }

      // Ejemplo para enviar datos de un formulario de contacto
      enviarContacto(datos: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/contact`, datos);
      }

      // Puedes añadir más métodos para otros endpoints
      // obtenerProyectos(): Observable<any> {
      //   return this.http.get(`${this.apiUrl}/projects`);
      // }
    }
    ```

### 3. Usar el Servicio en un Componente

Inyecta el `ApiService` en el componente que necesite comunicarse con el backend (por ejemplo, el formulario de contacto).

```typescript
// En src/app/landing/contact/contact.ts

import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service'; // Asegúrate de que la ruta sea correcta
// Importa también ReactiveFormsModule si usas formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  // ...
})
export class Contact {
  contactForm: FormGroup;
  enviando = false;
  mensajeExito = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.enviando = true;
    this.mensajeExito = '';

    this.apiService.enviarContacto(this.contactForm.value).subscribe({
      next: (respuesta) => {
        console.log('Mensaje enviado con éxito', respuesta);
        this.mensajeExito = '¡Gracias por tu mensaje! Te contactaremos pronto.';
        this.contactForm.reset();
        this.enviando = false;
      },
      error: (error) => {
        console.error('Error al enviar el mensaje', error);
        // Aquí podrías mostrar un mensaje de error al usuario
        this.enviando = false;
      }
    });
  }
}
```

Con estos pasos, tu frontend estará listo para comunicarse con cualquier backend que exponga una API REST.