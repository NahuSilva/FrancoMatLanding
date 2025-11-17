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
        const scrollThreshold = 50;
        this.isScrolled = scrollPosition > scrollThreshold;

        const headerElement = this.el.nativeElement.querySelector('header');
        const navLinks = this.el.nativeElement.querySelectorAll('nav.hidden.lg\\:flex a');
        const mobileMenuButton = this.el.nativeElement.querySelector('#mobile-menu-button');

        if (headerElement) {
            if (this.isScrolled) {
                this.renderer.removeClass(headerElement, 'bg-transparent');
                this.renderer.addClass(headerElement, 'bg-white');

                navLinks.forEach((link: HTMLElement) => {
                    this.renderer.removeClass(link, 'text-white');
                    this.renderer.addClass(link, 'text-black');
                });

                if (mobileMenuButton) {
                    this.renderer.removeClass(mobileMenuButton, 'text-white');
                    this.renderer.addClass(mobileMenuButton, 'text-black');
                }

            } else {
                this.renderer.removeClass(headerElement, 'bg-white');
                this.renderer.addClass(headerElement, 'bg-transparent');

                navLinks.forEach((link: HTMLElement) => {
                    this.renderer.removeClass(link, 'text-black');
                    this.renderer.addClass(link, 'text-white');
                });

                if (mobileMenuButton) {
                    this.renderer.removeClass(mobileMenuButton, 'text-black');
                    this.renderer.addClass(mobileMenuButton, 'text-white');
                }
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
