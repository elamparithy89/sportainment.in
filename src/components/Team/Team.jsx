import "./team.css";

function Team() {
    return (
      <>
                      <section id="team" class="team-area text-center pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="site-heading text-center">
                            <h2> <span>Team</span></h2>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4 d-flex align-items-stretch">
                            <img src="images\aboutus\NG DP.jpg" class="img-fluid rounded-start" alt="Navneet Ganapathi" />
                        </div>
                        <div class="col-md-8 d-flex align-items-center">
                            <div class="card-body">
                                <h5 class="card-title">Navneet Ganapathi</h5>
                                <p class="card-text"><strong> Managing partner</strong></p>
                                <p class="card-text"><small class="text-muted">Navneet Ganapathi, the former CEO of Advent Sports is a young and enterprising leader who’s extremely passionate about helping brands leverage sports partnerships. Prior to starting Advent Sports, Navneet was part of the marketing team at Delhi Daredevils, one of India’s top cricketing teams in the IPL League. He was part of the brand management team that drove strategic tie-ups and sponsorships for the team and created new revenue streams. An Engineer with an MBA from Great Lakes, he will be driving business development, client engagement and event representations for Sportainment.
                                    </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="contact-area text-center pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="site-heading text-center">
                            <h2> Get in touch!</h2>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="stats d-flex align-items-center justify-content-evenly">
                        <div class="stats1">
                            <span><i class="fa fa-mobile"></i></span>
                            <span>+91 9840271749</span>
                        </div>
                        <div class="stats1">
                            <span><i class="fa fa-phone"></i></span>
                            <span> 044-28344351</span>
                        </div>
                        <div class="stats1">
                            <span><i class="fa fa-envelope"></i></span>
                            <span>navneet@sportainment.in</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 pt-2">
                        <div class="d-flex justify-content-center align-items-center">
                            <p> © Sportainment all right reserved 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
      
    );
  }
  
  export default Team;
  