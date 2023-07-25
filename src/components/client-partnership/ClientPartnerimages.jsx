import React from "react";

function ClientPartnerimages(props) {
  console.log(props);

  return (

   <>
           
           <div className="row justify-content-between align-items-center">
                {props.imageurls.map((imageurl) => {
                    return (
                        <div className="col-xs-4 col-sm-2">
                            <img src={imageurl.url} className="img-thumbnail" alt="" />
                        </div>
                     );
                    })}
                        
                
            </div>   
            <div className="row justify-content-between align-items-center">
                {props.imageurls1.map((imageurl) => {
                    return (
                        <div className="col-xs-4 col-sm-2">
                            <img src={imageurl.url} className="img-fluid" alt="" />
                        </div>
                     );
                    })}
                        
                
            </div>
  
            <div className="row justify-content-between align-items-center">
                {props.imageurls2.map((imageurl) => {
                    return (
                        <div className="col-xs-12 col-sm-4 text-center">
                           <div class="card mx-auto d-block text-bg-primary pt-3 border border-0">
                            <img src={imageurl.url} className="img-thumbnail " alt={imageurl.text} />
                            <div class="card-body text-bg-info mt-5">
                                <h5 class="card-title">{imageurl.text}</h5>
                            </div>
                        </div>
                            
                        </div>
                     );
                    })}
                        
                
            </div>
            <div className="row justify-content-between align-items-center mall-img">
               
                    
                        <div className="col-xs-12 col-sm-12 text-center">
                           <div class="card mx-auto d-block text-bg-primary p-5 border border-0">
                            <img src="images/client-partnership/Picture13.png" className="img-fluid " alt="Mall Activation - Khadim's" />
                            <div class="card-body text-bg-info mt-5">
                                <h5 class="card-title">Mall Activation - Khadim's</h5>
                            </div>
                        </div>
                            
                        </div>
                   
                   
                        
                
            </div>
           
               
   </>
  );
}

export default ClientPartnerimages;
