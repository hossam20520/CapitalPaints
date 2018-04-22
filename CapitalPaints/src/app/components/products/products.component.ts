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
  isAuto:boolean=true;
  isDeco=false;
  isWood=false;
  isIndust=false;
  type:string="automotive";
  sub:any;
  images:ImageShow[];
  autoImgs:ImageShow[]=[
    {
      image:"Sketch001", 
      header:"Polyester Putty",
      text:"It is a two-component unsaturated polyester putty, used to fill dents and irregularities,pinholes, sand scratches, hail damage or small dents in car body."
    },
    {
      image:"Sketch002",
      header:"POLYESTER Polyester Putty",
      text:"It is a two-component unsaturated polyester putty, used to fill dents and irregularities, pinholes, sand scratches, ha l damage or small dents in ca r body."
    },
    {
      image:"Sketch003",
      header:"FIBER Fiber Putty",
      text:"A polyester-based putty which contains glass fibers.Its higher amount of glass fiber provides thick layers in filling of deeper dents, small holes and bridging of cracks."
    },
    {
      image:"Sketch004",
      header:"N.C Paint Nitrocellulose Enamel Paint",
      text:"It is high gloss nitrocellulose enamel paint based on a special alkyd resin. It includes high quality nitrocellulose and special ingredients of additives to provide a perfect gloss with abrasion and weathering resistance."
      },
    {
      image:"Sketch005",
      header:"N.C Paint Nitrocellulose Enamel Paint",
      text:"It is high gloss nitrocellulose enamel paint based on a special alkyd resin. It includes high quality nitrocellulose and special ingredients of additives to provide a perfect gloss with abrasion and weathering resistance."
    },
    {
      image:"Sketch006",
      header:"THINNER",
      text:"it is especially designed to suite the application viscosity of car refinishes products."
    },
    {
      image:"Sketch007",
      header:"HARDENER",
      text:"It is a medium solid polyisocyanate hardener for all air and forced dry/ stoving applications and it is characterized by perfect spraying and flow properties, plus excellent leveling, quick drying, maximum hardness and gloss."
    },
    {
      image:"Sketch008",
      header:"CLEAR COAT",
      text:"It is a high solid clearcoat suitable for use in all type of repairs. It offers long lasting resistance and easy application with good drying properties."
    },
    {
      image:"Sketch009",
      header:"BASE COAT",
      text:"Ready mixed base coat that offers solid color base coat (pigmented), metallic and pearlescent/special effect base coat."
    },
    {
      image:"Sketch010",
      header:"ACRYLIC PAINT",
      text:"It is a 2k acrylic paint based on best acrylic resin, used to car refinishing offers high gloss top coats."
    },
    {
      image:"Sketch011",
      header:"FILLER 1K",
      text:"It is one component filler manufactured from the best resins, additives, and solvents for car refinishes."
    },
    {
      image:"Sketch012",
      header:"UNDER COAT",
      text:"It is an air drying under coat with gives surfaces an ultimate protection against corrosion and abrasion as w ell as a perfect adhesion ability."
    },
    {
      image:"Sketch013",
      header:"PRIMER Metal Surfaces Paint",
      text:"It is a high-quality matt synthetic paint with perfect hiding power and high coverage used as anticorrosion paint."
    }
  ]
  decoImgs:ImageShow[]=[
    {
      image:"Sketch014",
      header:"Ready to use 200",
      text:"It is a high-grade quality based on latex emulsion, and high solid content to provide excellent smoothing and filling properties to small halls cracks.It can be used as a repair filler or for full skim coat application."
    },
    {
      image:"Sketch015",
      header:"EMULSION 1015",
      text:"It is emulsion paint based on polyvinyl acetate emulsion with excellent quality interior emulsion paint :easy to apply, good flow, levelling, excellent hiding power and high spreading rate ."
    },
    {
      image:"Sketch017",
      header:"EMULSION JUMBO 1015",
      text:"It is emulsion paint based on polyvinyl acetate emulsion with excellent quality interior emulsion paint :easy to apply, good flow, levelling, excellent hiding power and high spreading rate ."
    },
    {
      image:"Sketch018",
      header:"EMULSION 2030",
      text:"It is emulsion paint based on polyvinyl acetate emulsion with excellent quality interior emulsion paint :easy to apply, good flow, levelling, excellent hiding power and high spreading rate ."
    },
    {
      image:"Sketch019",
      header:"COATEX 20000 - Semi Gloss Emulsion Paint",
      text:"It is acrylic emulsion paint gives the appearance of attractive semi-gloss. Characterized by high hiding power with excellent resistance to washing with soap and water. The advantage of being flexible and elastic to cover cracks in wall. And also it featured easily colouring and easy cleaning with high ability to resist yellowing and alkali resistance."
    },
    {
      image:"Sketch020",
      header:"EMULSION 1030 - Emulsion Washable Paint",
      text:"It is a washable emulsion paint based on acrylic latix, with excellent interior emulsion paint: easy to apply, good flow, levelling, excellent rate and resistance to wash-ability, alkali, yellowing and weathering."
    },
    {
      image:"Sketch021",
      header:"SEALER 1000",
      text:"It is ideal as a dual-purpose sealing covering undercoat for interior and exterior concrete or plaster walls."
    },
    {
      image:"Sketch022",
      header:"PEARLY Luxury Decorative Paints",
      text:"It is a high-quality paint decorative effect gives final pearly leading to show new dimensions for walls and different degrees of illumination allowing the appearance of different effects of colours."
    },
    {
      image:"Sketch023",
      header:"CHAMOIS - Decorative Chamois Effect Paint",
      text:"It is a washable acrylic paint, used to work on the effect of chamois for Interior surfaces.With the appearance of matt finish and gives the a appearance of a velvet decorative gorgeous.It uses as a decorative paint for interior applications on different surfaces in the palaces and offices and exhibitions, hotels and restaurants and the entrances of luxury homes."
    },
    {
      image:"Sketch024",
      header:"COLORANTS - Universal Colorants",
      text:"They are highly concentrated, binder and solvent free. Pigment pastes are suited best for water-based polymers. They don't alter the original properties of the coatings and thus reaches an outstanding level of performance in the tinting of all water based decorative and architectural paints (gloss, stain and matt), as well as other water-based coatings."
    },
    {
      image:"Sketch025",
      header:"GLOSS - Synthetic Glossy Paint",
      text:"It is a high quality glossy synthetic paint manufactured from the best quality materials."
    },
    {
      image:"Sketch026",
      header:"MATT - Matt Synthetic Paint",
      text:"It is white synthetic matt paint with perfect hiding power and high coverage ability."
    },
    {
      image:"Sketch027",
      header:"MATT - Matt Synthetic Paint",
      text:"It is a jumbo white synthetic matt paint with perfect hiding power and high coverage ability."
    }
  ]
  woodImgs:ImageShow[]=[
    {
      image:"Sketch028",
      header:"WOOD SEALER",
      text:"It is a specially manufactured product to fill wood pores to obtain smooth surface before varnish is applied ."
    },
    {
      image:"Sketch029",
      header:"WOOD SEALER",
      text:"It is a specially manufactured product to fill wood pores to obtain smooth surface before varnish is applied ."
    },
    {
      image:"Sketch030",
      header:"POLYESTER SEALER ",
      text:"It is transparent polyester sealer specialty manufactured product to fill the pores and sanding properties of wood or veneer to be prepared before varnish is applied for obtaining fine smooth surface.It has covering power, flow and adhesion on wood."
    },
    {
      image:"Sketch031",
      header:"POLYUERTHANE VARNISH ",
      text:"It is a specially manufactured varnish from polyurethane resin used for wood furniture to give high gloss finish and high abrasion resistance and excellent adhesion ."
    },
    {
      image:"Sketch032",
      header:"VARNISH",
      text:"It is a specially manufactured product from the best synthetic alkyds that is why it is remarkably characterized  by  its high  gloss ."
    },
    {
      image:"Sketch033",
      header:"FAST VARNISH ",
      text:"It is a specially manufactured varnish product from the best alkyds that is why it is remarkably characterized by its high gloss ."
    },
    {
      image:"Sketch034",
      header:"COAT 999",
      text:"Polyurethane  gloss  varnish is a one of component transparent varnish based on urethane alkyd resin."
    },
    {
      image:"Sketch035",
      header:"MATT WOOD VARNISH ",
      text:"It is a high quality cellulose varnish based on high quality alkyd resin characterized by fast drying ."
    },
    {
      image:"Sketch036",
      header:"POLYURETHANE VARNISH 2K 2:1",
      text:"It is a high-quality polyuret hane varnish based on two components of high- quality polyurethane resins and special additives to give maximum performance .It is high hardness, high gloss ."
    },
    {
      image:"Sketch037",
      header:"POLYURETHANE HARDNER ",
      text:"Coatex Varnish Hardener polyisocyanate is a high - quality polyisocyanate  resin ."
    },
    {
      image:"Sketch038",
      header:"POLYURETHANE VARNISH 2K 1:1",
      text:"It is a high-quality polyurethane varnish based on two components of high- quality polyurethane resins and special additives to give maximum performance .It is high hardness, high gloss ."
    },
    {
      image:"Sketch039",
      header:"POLYURETHANE HARDNER",
      text:"Coatex Varnish Hardener polyisocyanate is a high - quality polyisocyanate  resin ."
    },
    {
      image:"Sketch040",
      header:"WOOD STAIN",
      text:"Coatex Stain is a wood stain used for furniture to give beauty and attractive  appeareance ."
    }
  ]
  industImgs:ImageShow[]=[
    {
      image:"Sketch041",
      header:"MARBLE ADHESIVE ",
      text:"It is polyester putty to marble joints and casting application."
    }
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.type = params['type']; 
     
   });
   if (this.type==this.auto){
     this.images=this.autoImgs.slice();
     this.isAuto=true;
     this.isDeco=false;
     this.isIndust=false;
     this.isWood=false;
     
    }
    else if (this.type==this.deco){
      this.images=this.decoImgs.slice();
      this.isAuto=false;
     this.isDeco=true;
     this.isIndust=false;
     this.isWood=false;
     }
     else if (this.type==this.wood){
      this.images=this.woodImgs.slice();
      this.isAuto=false;
     this.isDeco=false;
     this.isIndust=false;
     this.isWood=true;
     }
     else if (this.type==this.indust){
      this.images=this.industImgs.slice();
      this.isAuto=false;
     this.isDeco=false;
     this.isIndust=true;
     this.isWood=false;
     }
    
  }
  toShowAuto(){
    
    this.images.length=0;
     this.images=this.autoImgs.slice();
     this.isAuto=true;
     this.isDeco=false;
     this.isIndust=false;
     this.isWood=false;
   }
  toShowDeco(){
    
   this.images.length=0;
    this.images=this.decoImgs.slice();
    this.isAuto=false;
     this.isDeco=true;
     this.isIndust=false;
     this.isWood=false;
  }
  toShowWood(){
    
    this.images.length=0;
    this.images=this.woodImgs.slice();
    this.isAuto=false;
     this.isDeco=false;
     this.isIndust=false;
     this.isWood=true;
  }
  toShowIndust(){
    
    this.images.length=0;
    this.images=this.industImgs.slice();
    this.isAuto=false;
     this.isDeco=false;
     this.isIndust=true;
     this.isWood=false;
  }

}
