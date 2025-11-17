import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { MyServices } from './my-services/my-services';
import { MyProjects } from './my-projects/my-projects';
import { About } from './about/about';
import { Testimonials } from './testimonials/testimonials';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Header, Hero, MyServices, MyProjects, About, Testimonials, Contact, Footer,],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
