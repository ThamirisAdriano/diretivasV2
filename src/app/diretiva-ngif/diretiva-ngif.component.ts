import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent {

  cursos: string[] = ["Js"];

  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
}

}


