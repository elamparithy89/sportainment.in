import "./services.css";

const servicestext=[
 
    {id: "1",
    text:"In-Stadia Marketing"
    },
    {id: "2",
    text:"Sports Events Representations"
    
    },
    {id: "3",
    text:"Football Club Partnerships"
   
    },
    {id: "4",
    text:"Global Sponsorship & Media Management"
   
    },
    {id: "5",
    text:"Brand Association With Movies & Celebrities"
   
    },
    {id: "6",
    text:"Brand Representations"
   
    },
    {id: "7",
    text:"Officiation Of Numerous Award Ceremonies"
   
    },
    {id: "8",
    text:"Brand Partnerships For Sports"
   
    },
    {id: "9",
    text:"Sports Management Consulting"
   
    },
  ];

function Services() {
  return (
    <>
        <section  id ="services" className="we-offer-area text-center bg-gray">
            <div  className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <h2 id="services" className="pt-4">Our <span>Services</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row our-offer-items less-carousel">
                {servicestext.map((subtext) => {
                    return (
                        <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fa-solid fa-gears"></i>
                            <h4>{subtext.text} </h4>
                        </div>
                    </div>
                      
                     );
                    })}
           
                    
                  
                </div>
            </div>
        </section>
    </>
    
  );
}

export default Services;
