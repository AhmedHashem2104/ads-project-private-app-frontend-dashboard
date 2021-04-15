import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Lightbox } from "react-modal-image";
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css';

const Slider = () => {
   const [open , setOpen] = useState(false)
   const [isOpen, setIsOpen] = useState(false)
   const [previewImage , setPreviewImage] = useState('')
   const [previewVideo , setPreviewVideo] = useState('YozAF3-mIRg')
   const closeLightbox = () => {
    setPreviewImage('')
    setOpen(false)
   };
   const closeModalVideo = () => {
    setPreviewVideo('')
    setIsOpen(false)
   };
    return (
        <section className="pt-0 pb-0">
             {
             open ?
             <Lightbox
      medium={previewImage}
      large={previewImage}
      showRotate={true}
      onClose={(e) => closeLightbox()}
    />
    :
    <></>
          } 
            <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={previewVideo} onClose={() => closeModalVideo(false)} />
            </React.Fragment>
        <div className="container-fluid px-0">
           <div className="row no-gutters">
              <div className="col-12">
                 <div className="gen-banner-movies banner-style-2">
                    {/* <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="1"
                       data-lap_num="1" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                       data-loop="true" data-margin="0"> */}
                       <OwlCarousel className='owl-theme' 
                       items={1} 
                       nav
                       loop
                       dots={false}
                       navText={['<i class="fas fa-chevron-left" style="font-size: 25px;"></i>' , '<i class="fas fa-chevron-right" style="font-size: 25px;"></i>']}
                       >
                       <div className="item" style={{ backgroundImage: `url('images/background/asset-1.jpeg')` }}>
                          <div className="gen-movie-contain-style-2 h-100">
                             <div className="container h-100">
                                <div className="row flex-row-reverse align-items-center h-100">
                                   <div className="col-xl-6">
                                      <div className="gen-front-image">
                                         <img src="images/background/asset-1.jpeg" alt="owl-carousel-banner" />
                                         <Link to="#" onClick={() => {
                                             setPreviewVideo(`gbt6cTZSKgo`)
                                             setIsOpen(true)
                                         }} className="playBut">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="213.7px"
                                               height="213.7px" viewBox="0 0 213.7 213.7"
                                               enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                               <polygon className="triangle" id="XMLID_17_" fill="none" strokeWidth="7"
                                                  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                  points="
                                                              73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                               <circle className="circle" id="XMLID_18_" fill="none" strokeWidth="7"
                                                  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                  cx="106.8" cy="106.8" r="103.3">
                                               </circle>
                                            </svg>
                                            <span>Watch Ad</span>
                                         </Link>
                                      </div>
                                   </div>
                                   <div className="col-xl-6">
                                      <div className="gen-tag-line"><span>Most Viewed</span></div>
                                      <div className="gen-movie-info">
                                         <h3>King of Skull</h3>
                                      </div>
                                      <div className="gen-movie-meta-holder">
                                         {/* <ul className="gen-meta-after-title">
                                            <li className="gen-sen-rating">
                                               <span>
                                                  12A</span>
                                            </li>
                                            <li> <img src="images/asset-2.png" alt="rating" />
                                               <span>
                                                  0 </span>
                                            </li>
                                         </ul> */}
                                         <p>Streamlab is a long established fact that a reader will be distracted
                                            by the readable content of a page The point of using Lorem Streamlab.
                                         </p>
                                         <div className="gen-meta-info">
                                            <ul className="gen-meta-after-excerpt">
                                               <li>
                                                  <strong>Cast :</strong>
                                                  Anna Romanson,Robert Romanson
                                               </li>
                                               <li>
                                                  <strong>Genre :</strong>
                                                  <span>
                                                     <Link to="action.html">
                                                        Action, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="animation.html">
                                                        Annimation, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        Family </Link>
                                                  </span>
                                               </li>
                                               <li>
                                                  <strong>Tag :</strong>
                                                  <span>
                                                     <Link to="#">
                                                        4K Ultra, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        Brother, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        Dubbing, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        Premieres </Link>
                                                  </span>
                                               </li>
                                            </ul>
                                         </div>
                                      </div>
                                      <div className="gen-movie-action">
                                         <div className="gen-btn-container">
                                            <Link to="#" onClick={() => {
                                             setPreviewVideo(`gbt6cTZSKgo`)
                                             setIsOpen(true)
                                         }} className="gen-button .gen-button-dark playBut">
                                               <i aria-hidden="true" className="fas fa-play"></i> <span className="text">Play
                                                  Now</span>
                                            </Link>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="item" style={{ backgroundImage: `url('images/background/asset-3.jpeg')` }}>
                          <div className="gen-movie-contain-style-2 h-100">
                             <div className="container h-100">
                                <div className="row flex-row-reverse align-items-center h-100">
                                   <div className="col-xl-6">
                                      <div className="gen-front-image ">
                                         <img src="images/background/asset-3.jpeg" alt="owl-carousel-banner" />
                                         <Link to="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="playBut popup-youtube popup-vimeo popup-gmaps">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="213.7px"
                                               height="213.7px" viewBox="0 0 213.7 213.7"
                                               enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                               <polygon className="triangle" id="XMLID_19_" fill="none" strokeWidth="7"
                                                  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                  points="
                                                              73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                               <circle className="circle" id="XMLID_20_" fill="none" strokeWidth="7"
                                                  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                  cx="106.8" cy="106.8" r="103.3">
                                               </circle>
                                            </svg>
                                         <span>Watch Trailer</span>
                                         </Link>
                                      </div>
                                   </div>
                                   <div className="col-xl-6">
                                      <div className="gen-tag-line"><span>Best Of 2021</span></div>
                                      <div className="gen-movie-info">
                                         <h3>The Express</h3>
                                      </div>
                                      <div className="gen-movie-meta-holder">
                                         <ul className="gen-meta-after-title">
                                            <li className="gen-sen-rating">
                                               <span>
                                                  PG-14</span>
                                            </li>
                                            <li> <img src="images/asset-2.png" alt="rating" />
                                               <span>
                                                  8.5 </span>
                                            </li>
                                         </ul>
                                         <p>Streamlab is a long established fact that a reader will be distracted
                                            by the readable content of a page when Streamlab at its layout
                                            Streamlab.
                                         </p>
                                         <div className="gen-meta-info">
                                            <ul className="gen-meta-after-excerpt">
                                               <li>
                                                  <strong>Cast :</strong>
                                                  Robert Romanson,Anne Good
                                               </li>
                                               <li>
                                                  <strong>Genre :</strong>
                                                  <span>
                                                     <Link to="action.html">
                                                        Action, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="adventure.html">
                                                        Adventure, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="biography.html">
                                                        Biography </Link>
                                                  </span>
                                               </li>
                                               <li>
                                                  <strong>Tag :</strong>
                                                  <span>
                                                     <Link to="#">
                                                        4K Ultra, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        King, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        Premieres, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        viking </Link>
                                                  </span>
                                               </li>
                                            </ul>
                                         </div>
                                      </div>
                                      <div className="gen-movie-action">
                                         <div className="gen-btn-container">
                                            <Link to="single-movie.html" className="gen-button gen-button-dark">
                                               <i aria-hidden="true" className="fas fa-play"></i> <span className="text">Play
                                                  Now</span>
                                            </Link>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="item" style={{ backgroundImage: `url('images/background/asset-4.jpeg')` }}>
                          <div className="gen-movie-contain-style-2 h-100">
                             <div className="container h-100">
                                <div className="row flex-row-reverse align-items-center h-100">
                                   <div className="col-xl-6">
                                      <div className="gen-front-image ">
                                         <img src="images/background/asset-4.jpeg" alt="owl-carousel-banner" />
                                         <Link to="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="playBut popup-youtube popup-vimeo popup-gmaps">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="213.7px"
                                               height="213.7px" viewBox="0 0 213.7 213.7"
                                               enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                               <polygon className="triangle" id="XMLID_21_" fill="none" strokeWidth="7"
                                                  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                  points="
                                                              73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                               <circle className="circle" id="XMLID_22_" fill="none" strokeWidth="7"
                                                  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                  cx="106.8" cy="106.8" r="103.3">
                                               </circle>
                                            </svg>
                                            <span>Watch Trailer</span>
                                         </Link>
                                      </div>
                                   </div>
                                   <div className="col-xl-6">
                                      <div className="gen-tag-line"><span>High Rated</span></div>
                                      <div className="gen-movie-info">
                                         <h3>thieve the bank</h3>
                                      </div>
                                      <div className="gen-movie-meta-holder">
                                         <ul className="gen-meta-after-title">
                                            <li className="gen-sen-rating">
                                               <span>
                                                  TV-MA</span>
                                            </li>
                                            <li> <img src="/images/asset-2.png" alt="rating" />
                                               <span>
                                                  9.5 </span>
                                            </li>
                                         </ul>
                                         <p>Streamlab is a long established fact that a reader will be distracted
                                            by the readable content of a page when Streamlab at its layout
                                            Streamlab.
                                         </p>
                                         <div className="gen-meta-info">
                                            <ul className="gen-meta-after-excerpt">
                                               <li>
                                                  <strong>Cast :</strong>
                                                  Jennifer Lonez,Mars Shelley
                                               </li>
                                               <li>
                                                  <strong>Genre :</strong>
                                                  <span>
                                                     <Link to="action.html">
                                                        Action, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="action.html">
                                                        Mystery </Link>
                                                  </span>
                                               </li>
                                               <li>
                                                  <strong>Tag :</strong>
                                                  <span>
                                                     <Link to="#">
                                                        Brother, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        Hero, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        Premieres, </Link>
                                                  </span>
                                                  <span>
                                                     <Link to="#">
                                                        viking </Link>
                                                  </span>
                                               </li>
                                            </ul>
                                         </div>
                                      </div>
                                      <div className="gen-movie-action">
                                         <div className="gen-btn-container">
                                            <Link to="single-movie.html" className="gen-button gen-button-dark">
                                               <i aria-hidden="true" className="fas fa-play"></i> <span className="text">Play
                                                  Now</span>
                                            </Link>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       </OwlCarousel>
                    {/* </div> */}
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}

export default Slider
