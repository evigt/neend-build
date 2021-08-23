import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import man from '../../images/Photo 1.png';
import men from '../../images/Photo 2.png';
import girl from '../../images/Photo 3.png';
import rectangle from '../../images/Rectangle.png';
import frame from '../../images/frame.png';
import '../Reviewsection/Review.css';

const Coursel = () =>{
return(
    <>
    <div id="Testimonial" className="container">
    <h1 id="review">Reviews</h1>
<Carousel>
    <CarouselItem>
    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="row">
                                    <div id="lgf" className="col-lg-4">
                                        <img id="Rectangle" src={rectangle} />
                                        <img id="lady" src={men} />
                                        <img id="frame" src={frame} />
                                    </div>
                                    <div id="lgs"  className="col-lg-6 ">
                                        <div className="column">
                                            <h1 id="TestimonailContent"> I was dependent on sleeping pills for a long time, one fine night my Insomnia led me to the Neend app. Since then I put on a story and fall into a deep slumber. Thanking my lucky stars that I found my NEEND.</h1>
                                            <div className="margin">
                                                <p id="name">-Randeep  </p>
                                                <p id="names">Software Engineer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </CarouselItem>
    <CarouselItem>
    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="row">
                                    <div id="lgf" className="col-lg-4">
                                        <img id="Rectangle" src={rectangle} />
                                        <img id="lady" src={man} />
                                        <img id="frame" src={frame} />
                                    </div>
                                    <div id="lgs"  className="col-lg-6 ">
                                        <div className="column">
                                            <h1 id="TestimonailContent"> I have never made it to the end of any story!!! You guys are doing a fabulous job. It helps me tame my overactive mind at night and have better sleep </h1>
                                            <div className="marginD">
                                                <p id="name">-Kavya</p>
                                                <p id="names">Assitant Lawyer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </CarouselItem>
    <Carousel.Item>
                     <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="row">
                                    <div id="lgf" className="col-lg-4">
                                        <img id="Rectangle" src={rectangle} />
                                        <img id="lady" src={girl} />
                                        <img id="frame" src={frame} />
                                    </div>
                                    <div id="lgs" className="col-lg-6">
                                        <div className="column">
                                            <h1 id="TestimonailContent">I used to spend a lot of my evening hours surfing the web, but when I stumbled upon the Neend YouTube channel, and decided to give it a try. I could not help, but download the app and use it regularly. It has a very nice and in-depth description of the scenery. Also, I loved the fact that it was narrated in my native language.</h1>
                                            <div className="marginB">
                                                <p id="name">-Tanya</p>
                                                <p id="names">Entrepreneur</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </Carousel.Item>
</Carousel>
</div>
        </>
)
}
export default Coursel;