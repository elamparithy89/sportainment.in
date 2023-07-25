
import "./awards.css";

const Awardsimg=[
 
    {id: "1",
    url:"images/spiaasia/spiaasia2.jpg"   },
    {id: "2",
    url:"images/spiaasia/spiaasia7.jpeg"    },
    {id: "3",
    url:"images/spiaasia/spiaasia3.jpeg"    },
    {id: "4",
    url:"images/spiaasia/spiaasia6.jpeg"    },
    {id: "5",
    url:"images/spiaasia/spiaasia5.jpeg"    },
    {id: "6",
    url:"images/spiaasia/spiaasia1.jpeg"    },
    {id: "7",
    url:"images/spiaasia/spiaasia4.jpeg"    },
  ];

  function Awards() {
    return (
      <>
          <section  className="we-offer-area text-center bg-gray">
              <div  className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="site-heading text-center">
                              <h2 id="services" className="pt-4">SPIA <span>AWARDS 2017</span></h2>
                              <h3 >Best Sponsorship of a Sport Team or Event under 250,000$</h3>
                          </div>
                      </div>
                  </div>
                  <div className="flexbin flexbin-margin">
                  {Awardsimg.map((img) => {
                      return (
                      <div>
                       
                        <img src={img.url}  alt="" />
                   
                 </div>
                       );
                      })}
             
                      
                    
                  </div>
              </div>
          </section>

          <section className="festival-area text-center mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <h2>World Sacred Spirit Festival - <span>Jodhpur</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 py-2">
                        <div className="">
                                <img  className="img-fluid" src="images\spirit festival\spirit festival 1.jpeg" alt="" /> </div>
                    </div>
                    <div className="col-md-4 py-2">
                        <div className="">
                                <img className="img-fluid" src="images\spirit festival\spirit festival 2.jpeg" alt="" /> </div>
                    </div>
                    <div className="col-md-4 py-2">
                        <div className="">
                                <img className="img-fluid" src="images\spirit festival\spirit festival 3.jpeg" alt="" /> </div>
                    </div>
                </div>
            </div>
        </section>
      </>
      
    );
  }
  
  export default Awards;
  