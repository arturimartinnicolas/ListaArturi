import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista-interfaz';
import localeES from '@angular/common/locales/es-AR'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES);


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public ESTUDIANTES: Array<Lista> = [

  {
    nombreYApellido: 'Carla Cruz',
    edad: 20,
    fechaDeNacimiento: new Date (2002, 1, 12),
    materiasAprobadas: ['Química', 'Física', 'Matemática'],
    img: 'https://w7.pngwing.com/pngs/198/679/png-transparent-computer-icons-education-student-school-student-child-face-hand.png'
  },
  {
    nombreYApellido: 'Juan Pérez',
    edad: 19,
    fechaDeNacimiento: new Date (2003, 4, 15),
    materiasAprobadas: ['Historia', 'Álgebra', 'Matemática'],
    img: 'https://banner2.cleanpng.com/20180512/wse/kisspng-computer-icons-student-education-school-5af7836897cc59.1524978415261704726218.jpg'
  },
  {
    nombreYApellido: 'Martín Rodriguez',
    edad: 23,
    fechaDeNacimiento: new Date (1999, 2, 24),
    materiasAprobadas: ['Literatura', 'Álgebra', 'Biología'],
    img: 'https://banner2.cleanpng.com/20180512/wse/kisspng-computer-icons-student-education-school-5af7836897cc59.1524978415261704726218.jpg'
  },
  {
    nombreYApellido: 'Eugenia Sánchez',
    edad: 21,
    fechaDeNacimiento: new Date (2001, 11, 19),
    materiasAprobadas: ['Historia', 'Literatura', 'Biología'],
    img: 'https://w7.pngwing.com/pngs/198/679/png-transparent-computer-icons-education-student-school-student-child-face-hand.png'
  },
  {
    nombreYApellido: 'Manuel García',
    edad: 18,
    fechaDeNacimiento: new Date (2004, 6, 4),
    materiasAprobadas: ['Física', 'Biología', 'Química'],
    img: 'https://banner2.cleanpng.com/20180512/wse/kisspng-computer-icons-student-education-school-5af7836897cc59.1524978415261704726218.jpg'
  },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
