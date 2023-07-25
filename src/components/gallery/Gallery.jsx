import React from 'react';



const Galleryimages = [
    "images/gallery/Picture1.jpg",
    "images/gallery/Picture2.jpg",
    
    
    "images/gallery/Picture5.jpg",
    
    "images/gallery/Picture7.jpg",
    "images/gallery/Picture8.jpg",
    "images/gallery/Picture9.jpg",
    "images/gallery/Picture10.JPG",
    "images/gallery/Picture11.jpg",
    "images/gallery/Picture12.jpg",
   
    "images/gallery/Picture14.jpeg",
    "images/gallery/Picture4.png",
    
    
    
    "images/gallery/Picture17.png",
    "images/gallery/Picture15.jpg",
    
   
  ];

function Gallery() {
   return (
      < > 
    <section id="gallery"  className="gallery-area text-center pt-5">
        <div className='container'>
            <div className='row'>
                <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2>Our <span>Gallery</span></h2>
                    </div>
                </div>
            </div>
            <div className="row row-flex">
                {Galleryimages.map((img, i) => {
                    return (
                        <div key={i} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img src={img} className="w-100 shadow-1-strong rounded mb-4 img-thumbnail" alt="Boat on Calm Water" />
                        </div>
                     );
                    })}
                
            </div>
     
        </div>
    
        </section>
    </>
  );

}

export default Gallery;