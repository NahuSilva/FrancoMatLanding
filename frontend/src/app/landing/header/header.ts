import { CommonModule } from '@angular/common'; // ¡Añadido!
import { Component, AfterViewInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule], // Necesario para la directiva ngClass si la vas a usar en el futuro, pero no estrictamente para este ejemplo con Renderer2
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header implements AfterViewInit {
    private mobileMenu: HTMLElement | null = null;
    public isScrolled: boolean = false; // Nueva propiedad para el estado de scroll

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit(): void {
        const mobileMenuButton = this.el.nativeElement.querySelector('#mobile-menu-button');
        this.mobileMenu = this.el.nativeElement.querySelector('#mobile-menu');

        if (mobileMenuButton && this.mobileMenu) {
            this.renderer.listen(mobileMenuButton, 'click', () => {
                this.toggleMobileMenu();
            });
        }

        // Ejecutar al inicio para comprobar si ya hay scroll
        this.onWindowScroll();
    }

    // Escucha el evento 'scroll' en el objeto 'window'
    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

        // Define un umbral (por ejemplo, 50px) para cambiar el color
        const scrollThreshold = 50;

        // Actualiza la propiedad isScrolled
        this.isScrolled = scrollPosition > scrollThreshold;

        // Obtener la etiqueta header
        const headerElement = this.el.nativeElement.querySelector('header');

        // Aplicar/remover clases con Renderer2
        if (headerElement) {
            if (this.isScrolled) {
                // Si hay scroll, queremos el fondo sólido (bg-black en este caso)
                this.renderer.removeClass(headerElement, 'lg:bg-transparent');
                this.renderer.addClass(headerElement, 'lg:bg-black'); // Clase sólida
            } else {
                // Si no hay scroll, queremos el fondo transparente
                this.renderer.removeClass(headerElement, 'lg:bg-black'); // Remover clase sólida
                this.renderer.addClass(headerElement, 'lg:bg-transparent');
            }
        }
    }


    toggleMobileMenu(): void {
        if (this.mobileMenu) {
            this.mobileMenu.classList.toggle('hidden');
        }
    }

    scrollTo(sectionId: string): void {
        if (this.mobileMenu && !this.mobileMenu.classList.contains('hidden')) {
            this.toggleMobileMenu();
        }

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    }
}
