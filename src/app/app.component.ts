import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Northwind';
  //Angular.json da scripts arrayindekileri ekle.(jquery)
  // npm install ngx-toastr ekle.
  //npm install @angular/animations hata alınırsa bunları yaz npm install --save --legacy-peer-deps  npm config set legacy-peer-deps true 
}
