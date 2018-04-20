import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageShow } from '../../../models/imageShow';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  auto="Automotive";
  deco="Decorative";
  wood="Wood";
  indust="Industrial";
  type:string="automotive";
  sub:any;
  images:ImageShow[];
  autoImgs:ImageShow[]=[
    {image:"Sketch001", text:"sketch1"},
    {image:"Sketch002", text:"sketch2"},
    {image:"Sketch003", text:"sketch2"},
    {image:"Sketch004", text:"sketch2"},
    {image:"Sketch005", text:"sketch2"},
    {image:"Sketch006", text:"sketch2"},
    {image:"Sketch007", text:"sketch2"},
    {image:"Sketch008", text:"sketch2"},
    {image:"Sketch009", text:"sketch2"},
    {image:"Sketch010", text:"sketch2"},
    {image:"Sketch011", text:"sketch2"},
    {image:"Sketch012", text:"sketch2"},
    {image:"Sketch013", text:"sketch2"}
  ]
  decoImgs=[
    {image:"Sketch014", text:""},
    {image:"Sketch015", text:""},
    {image:"Sketch017", text:""},
    {image:"Sketch018", text:""},
    {image:"Sketch019", text:""},
    {image:"Sketch020", text:""},
    {image:"Sketch021", text:""},
    {image:"Sketch022", text:""},
    {image:"Sketch023", text:""},
    {image:"Sketch024", text:""},
    {image:"Sketch025", text:""},
    {image:"Sketch026", text:""},
    {image:"Sketch027", text:""}
  ]
  woodImgs=[
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""}
  ]
  industImgs=[
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""},
    {image:"", text:""}
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.type = params['type']; 
     
   });
   if (this.type==this.auto){
     this.images=this.autoImgs;
    }
    else if(this.type==this.deco){
      this.images=this.decoImgs;
    }
  }

}
