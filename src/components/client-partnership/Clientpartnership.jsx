import React from "react";

import ClientPartnerimages from './ClientPartnerimages';


const Partnershipimages1=[
  {id: "1",
  url:"images/client-partnership/pic1.png"
  },
  {id: "2",
  url:"images/client-partnership/pic2.png"
  },
  {id: "3",
  url:"images/client-partnership/pic3.png"
  },
  {id: "4",
  url:"images/client-partnership/pic4.png"
  },
  {id: "5",
  url:"images/client-partnership/pic5.png"
  },
  {id: "6",
  url:"images/client-partnership/pic6.png"
  },
];
const Partnershipimages2=[
 
  {id: "1",
  url:"images/client-partnership/pic7.png"
  },
  {id: "2",
  url:"images/client-partnership/pic8.png"
  },
  {id: "3",
  url:"images/client-partnership/pic9.png"
  },
  {id: "4",
  url:"images/client-partnership/pic10.png"
  },
  {id: "5",
  url:"images/client-partnership/pic11.png"
  },
];


const Partnershipimages3=[
  {id: "1",
  url:"images/client-partnership/Picture1.png",
  text:"Dhoni’s BioPic:Kingfisher"
  },
  {id: "2",
  url:"images/client-partnership/Picture2.jpg",
  text:"Virender Sehwag:Crizal"
  },
  {id: "3",
  url:"images/client-partnership/Picture3.jpg",
  text:"David Warner’s 666 Vodka Launch in India"
  },
  {id: "4",
  url:"images/client-partnership/Picture4.jpg",
  text:"Champions Tennis League with Crizal"
  },
  {id: "5",
  url:"images/client-partnership/Picture5.jpg",
  text:"Ben Stokes: London Pilsner"
  },
  {id: "6",
  url:"images/client-partnership/Picture6.jpg",
  text:"Dinesh Karthik with Khadim's"
  },
  {id: "7",
  url:"images/client-partnership/Picture7.png",
  text:"Ravichandran Ashwin:Moov"
  },
  {id: "8",
  url:"images/client-partnership/Picture8.jpg",
  text:"Dwayne Bravo: SBOTOP"
  },
  {id: "9",
  url:"images/client-partnership/Picture9.png",
  text:"Isa Guha with World Cricket Championship"
  },
  {id: "10",
  url:"images/client-partnership/Picture10.png",
  text:"Dinesh Karthik with Sky Sports"
  },
  {id: "11",
  url:"images/client-partnership/Picture11.png",
  text:"Wasim Jaffer with Cricket.com"
  },
  {id: "12",
  url:"images/client-partnership/Picture12.jpg",
  text:"Squash federation World Cup"
  },
];

function Clientpartnership() {


  return (

   <>
       <section id="partner"  className="partnership-area text-center pt-5">

             <div className='row'>
                <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2>Clientele <span>Partnership</span></h2>
                        <p class="subtitle">At Sportainment we know that keeping up to date with industry news and views is our lifeblood.</p>
                    </div>
                </div>
            </div>
           <div className="container">
        <ClientPartnerimages imageurls={Partnershipimages1}  imageurls1={Partnershipimages2} imageurls2={Partnershipimages3} />
        
        
        </div>
        </section>
               
   </>
  );
}

export default Clientpartnership;
