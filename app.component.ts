import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(){}
courses:any=['Mechanical Engineering','Electronic Engineering ','civil Engineering','computer Engineering','Information Technology Engineering','electrical Engineering']


ngOnInit(): void {
}
onSubmitForm(formData:any){
  console.log(formData.value);
}
  title = 'task';
}
