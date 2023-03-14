import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

  cursos: string[] = ['Angular2', 'Java', 'Python'];

  constructor() {}

  ngOnInit() {
    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }
}
