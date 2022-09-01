import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  public user:Usuario = new Usuario();
  public user2:Usuario|undefined;
  constructor() { 
    this.user.nombre="";
  }

  ngOnInit(): void {
    this.user.nombre="Roby";
    console.log(this.user.nombre);
    this.user2=new Usuario();
  }

  cambiarNombre():void{
    this.user.nombre="Lara";

  }
  aceptar():void{
    console.log(this.user.nombre);

  }
}
