import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cancion: any;
  inputToSearch: string;
  lista: any;
  constructor() {
    this.lista =[];


    this.cancion={
      nombre: "Super Chivas",
      autor: "Jose Manuel Correa",
      album: "assets/albums/chivas.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Otherside",
      autor: "Red Hot Chili Peppers",
      album: "assets/albums/californication.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Its Alright",
      autor: "Mother Mother",
      album: "assets/albums/dance.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Immortals",
      autor: "Fall Out Boy",
      album: "assets/albums/american.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Sometimes",
      autor: "bo en",
      album: "assets/albums/sometimes.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Sleep Tight",
      autor: "Matt Watson",
      album: "assets/albums/ouch.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Cool as Me",
      autor: "fredo disco",
      album: "assets/albums/cool.jfif",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "The Art of Hearthbreak",
      autor: "Kitsune",
      album: "assets/albums/days.jfif",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Queen of hearts",
      autor: "We The Kings",
      album: "assets/albums/somewhere.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Face to face",
      autor: "Daft Punk",
      album: "assets/albums/discovery.jfif",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Only As Good As My God",
      autor: "Everything Everything",
      album: "assets/albums/Heaven.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "7:06",
      autor: "The Happy Yew",
      album: "assets/albums/7.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Heavydirtysoul",
      autor: "Twenty One Pilots",
      album: "assets/albums/blurr.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Somebody That I Used To Know",
      autor: "Gotye",
      album: "assets/albums/Gotye.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Do I Wanna Know?",
      autor: "Arctic Monkeys",
      album: "assets/albums/AM.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Cant Be Love",
      autor: "Whales Talk",
      album: "assets/albums/baby.jfif",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Cancion de Amor",
      autor: "El Cuarteto De Nos",
      album: "assets/albums/refri.jfif",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Anywhere the Wind Blows",
      autor: "The Boulevard",
      album: "assets/albums/wind.jfif",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Thunderstruck",
      autor: "AC/DC",
      album: "assets/albums/ac.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Gimme The Power",
      autor: "Molotov",
      album: "assets/albums/molotov.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Mr. Brightside",
      autor: "The killers",
      album: "assets/albums/hot.png",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Goodbye To A world",
      autor: "Porter Robinson",
      album: "assets/albums/worlds.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Bismarck",
      autor: "Sabaton",
      album: "assets/albums/war.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Orphans",
      autor: "Coldplay",
      album: "assets/albums/orphans.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Up and Up",
      autor: "Hollow Pledge",
      album: "assets/albums/up.jfif",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Better Days",
      autor: "LAKEY INSPIRED",
      album: "assets/albums/city.jfif",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Radioactive",
      autor: "Imagine Dragons",
      album: "assets/albums/drragons.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Mr. Hollywood",
      autor: "Joji",
      album: "assets/albums/joji.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Art School Wannabe",
      autor: "Sorority Noice",
      album: "assets/albums/noice.jpg",
      mostrar: true
    };
    this.lista.push(this.cancion);
    this.cancion={
      nombre: "Ship in a Bottle",
      autor: "fin",
      album: "assets/albums/ship.jfif",
      mostrar: true
    };
    this.lista.push(this.cancion);


  }

  onChange(event){
    // let inputValue=event.detail.value;
    // console.log(inputValue);
    console.log(this.inputToSearch);
    let input;
    let cancion;
    let autor;
    for (let index = 0; index < this.lista.length; index++) {
      input=this.inputToSearch.toLowerCase();
      cancion=this.lista[index].nombre.toLowerCase();
      autor=this.lista[index].autor.toLowerCase();
      if (cancion.includes(input) || autor.includes(input)) {
        this.lista[index].mostrar=true;
      }else{
        this.lista[index].mostrar=false;
      }
    }
  }

  onClear(){
    console.log("Buscador limpiado");
    for (let index = 0; index < this.lista.length; index++) {
      this.lista[index].mostrar=true;
    }
  }
  //.includes()
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
}
