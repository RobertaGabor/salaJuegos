import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edades',
  templateUrl: './edades.component.html',
  styleUrls: ['./edades.component.css']
})
export class EdadesComponent implements OnInit {
  public promedio:number|undefined;
  public suma:number|undefined;
  public EdadUno:number;
  public EdadDos:number;
  
  constructor() {     
    this.EdadDos=0;
    this.EdadUno=0;
    this.suma=0;
    this.promedio=0;
  }

  ngOnInit(): void {
  }


  Calcular():void{
    this.suma=this.EdadDos+this.EdadUno;
    this.promedio=(this.EdadDos+this.EdadUno)/2;
    console.log(this.EdadUno);

  }
  LimpiarCuadros():void{
    this.EdadDos=0;
    this.EdadUno=0;
    this.suma=0;
    this.promedio=0;
  }
}
