import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc-ngstyle',
  templateUrl: './poc-ngstyle.component.html',
  styleUrls: ['./poc-ngstyle.component.scss']
})
export class PocNgstyleComponent implements OnInit{

  @Input()
  public title: any = 'Texto'
 
  @Input()
  public link: string = '' 
 
  @Input()
  public tag: string = ''
 
  
  @Input()
  public img: string = 'https://scontent.fssz3-1.fna.fbcdn.net/v/t39.30808-6/339568709_571455941630584_3110705974367314717_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH9noce8QjR5s7z0gCI_L0d-yg1i4H3w1n7KDWLgffDWfBVM5Us8Oi7oqu9tEIWLF8&_nc_ohc=IXGSapKz6ogAX-HUHjM&_nc_ht=scontent.fssz3-1.fna&oh=00_AfBd_TRfCycppQYIWX7NbD5qZs_q8I9ckpfX0x-cjmHr6A&oe=642DDEAA'
  
  ngOnInit(): void {
    
  }

}
