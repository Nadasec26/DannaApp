import React from 'react'
import "../styles/Home.css"
import homing1 from '../images/section1.png';
import homing2 from '../images/Component 21.png';
import Rectangle1 from '../images/Rectangle 14.png';
import dricon from '../images/Component 39.png';
import chaticon from '../images/Component 34.png';
import videosicon from '../images/videos.png';
import prodicon from '../images/product.png';
import quesicon from '../images/Component 38.png';
import articon from '../images/Component 37.png';
import icons from '../images/Component 22.png'
import unsplash from '../images/unsplash_xT0TfNMn4Tk.png'
import imgdoctor from '../images/image 11.png'
import imgvideo from '../images/video.png'
import imgdoctor2 from '../images/image 13.png'
import Carousel from 'react-bootstrap/Carousel';
import heart from "../images/heart.png"
import doctor from "../images/Ellipse 1.png"
import sticker from "../images/image 12.png"
import babyvedio1 from '../images/Rectangle 23.png'
import imgchat from '../images/Componentchat.png'
import stickersec5 from '../images/image 5.png'
import stickersec7 from '../images/image 14.png'
import app from '../images/app.png'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='home'>
          {/* section1 */}
          <div className='homepage'>
        <div className='container'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='content-home'>
              <h1>Book your child's incubation <span>now</span></h1>
              <p>Therefore, moments will make a difference with your child.<br/> From the Danna application, you can book the nearest<br/> nursery to you</p>
              <Link to={`/Book`}>
                <button className='btn text-white fw-bold rounded-5 mt-3' style={{
                  backgroundColor: '#32AA90',
                  marginLeft: '3%'
                }}>Book Now</button>
              </Link>
            </div>
            <div className='img-home'>
              <img src={homing2} alt="" className='homing2' />
            </div>
          </div>
        </div>
      </div>
      
{/* section2 */}
        <div className='section2 mt-5'>
          <div className='container'>
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <Link to={`/doctors`}>
                    <div className="card text-center border-0 shadow mb-5 rounded-5 w-75">
                      <div className="card-body mt-3" >
                        <img src={dricon} className='w-75' alt="" srcset="" />
                        <h5 className="card-title mt-2 fs-5 fw-bold" style={{ color: '#3E63B0' }}>Doctors</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <Link to={`/chatbot`}>
                    <div className="card  text-center border-0 shadow mb-5 rounded-5 w-75">
                      <div className="card-body mt-3" >
                        <img src={chaticon} className='w-75' alt="" srcset="" />
                        <h5 className="card-title mt-2 fs-5 fw-bold" style={{ color: '#3E63B0' }}>Chatbot</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <Link to={`/videos`}>
                    <div className="card  text-center border-0 shadow mb-5 rounded-5 w-75">
                      <div className="card-body mt-3" >
                        <img src={videosicon} className='w-75' alt="" srcset="" />
                        <h5 className="card-title mt-2 fs-5 fw-bold" style={{ color: '#3E63B0' }}>Videos</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6    ">
                  <Link to={`/productpage`}>
                    <div className="card text-center border-0 shadow mb-5 rounded-5 w-75">
                      <div className="card-body mt-3" >
                        <img src={prodicon} className='w-75' alt="" srcset="" />
                        <h5 className="card-title mt-2 fs-5 fw-bold" style={{ color: '#3E63B0' }}>Products</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <Link to={`/Questions`}>
                    <div className="card  text-center border-0 shadow mb-5 rounded-5 w-75">
                      <div className="card-body mt-3" >
                        <img src={quesicon} className='w-75' alt="" srcset="" />
                        <h5 className="card-title mt-2 fs-5 fw-bold" style={{ color: '#3E63B0' }}>Questions</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <Link to={`/articles`}>
                    <div className="card  text-center border-0 shadow mb-5 rounded-5 w-75">
                      <div className="card-body mt-3" >
                        <img src={articon} className='w-75' alt="" srcset="" />
                        <h5 className="card-title mt-2 fs-5 fw-bold" style={{ color: '#3E63B0' }}>Articles</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
          </div>
            <div className="col-lg-5 col-md-5 ">
              <div className="card border-0 shadow rounded-5" >
                <img src={Rectangle1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-center fw-bolder p-1">Therefore, moments will make a difference with your child. From the Danna application, you can book the nearest nursery to you.</p>
                  <div className='text-center'>
                    <Link to={`/Book`}>
                      <a href="#" className="btn mt-3 rounded-4 fw-bold" style={{ background: '#32AA90', color: 'white' }}>BOOK  YOUR INCUBATION</a>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
            </div>
            </div>
            {/* section3 */}
            <br/>
      <div className='question mt-2'>
        <div className='container'>
          <img src={sticker} alt='' className='mt-3' style={{ width: '15%' }} />
                <div className='card-question text-center'>
                  <div className='main-heading'>
                    <img src={heart} alt='' className='heart' />
                    <h1 className='head_P'>Community & <br /> Medical Questions</h1>
                  </div>
            <br /><br />
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card w-75 border-0 rounded-4" style={{marginLeft: '15%'}}>
                    <div className="card-body">
                      <div className="d-flex gap-3">
                        <img src={doctor} className="" style={{width: '50px',height: '50px'}} alt="..." />
                        <h5 className='text-dark'>Omar Samer <br /> <small className='text-muted fs-6'>25-11-2023</small></h5>
                      </div>
                      <div className=' mt-3'>
                        <p className="card-text text-dark fw-bold">What services are provided to children in primary health care <br /> centers?</p>
                        <Link to={``}><button className='btn rounded-5 fw-bold' style={{
                          color: '#3E63B0',
                          backgroundColor: '#BAD9FA'
                        }}>Dr Answered</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card w-75 border-0 rounded-4" style={{ marginLeft: '15%' }}>
                    <div className="card-body">
                      <div className="d-flex gap-3">
                        <img src={doctor} className="" style={{ width: '50px', height: '50px' }} alt="..." />
                        <h5 className='text-dark'>Omar Samer <br /> <small className='text-muted fs-6'>25-11-2023</small></h5>
                      </div>
                      <div className=' mt-3'>
                        <p className="card-text text-dark fw-bold">What services are provided to children in primary health care <br /> centers?</p>
                        <Link to={``}><button className='btn rounded-5 fw-bold' style={{
                          color: '#3E63B0',
                          backgroundColor: '#BAD9FA'
                        }}>Dr Answered</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card w-75 border-0 rounded-4" style={{ marginLeft: '15%' }}>
                    <div className="card-body">
                      <div className="d-flex gap-3">
                        <img src={doctor} className="" style={{ width: '50px', height: '50px' }} alt="..." />
                        <h5 className='text-dark'>Omar Samer <br /> <small className='text-muted fs-6'>25-11-2023</small></h5>
                      </div>
                      <div className=' mt-3'>
                        <p className="card-text text-dark fw-bold">What services are provided to children in primary health care <br /> centers?</p>
                        <Link to={``}><button className='btn rounded-5 fw-bold' style={{
                          color: '#3E63B0',
                          backgroundColor: '#BAD9FA'
                        }}>Dr Answered</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                {/* <div className="row">
                <Carousel>
                  <Carousel.Item>
                   <div className="col">
                   <div className="card mb-3" >
                      <div className="row g-0">
                        <div className="md-4 d-flex">
                          <img src={doctor} className="img-doctor" alt="..."/>
                          <div className='content-img'>
                            <p className='name-img'>Omar Samer</p>
                            <p className='date-img'>25-11-2023</p>
                      </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body card-txt">
                            <p className="card-text">What services are provided to children in primary health care centers?</p>
                            <a href="#"><button className='btn-answer'>Dr Answered</button></a>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
                   </Carousel.Item>
                   <Carousel.Item>
                   <div className="col">
                   <div className="card mb-3">
                      <div className="row g-0">
                        <div className="md-4 d-flex">
                          <img src={doctor} className="img-doctor" alt="..."/>
                          <div className='content-img'>
                            <p className='name-img'>Omar Samer</p>
                            <p className='date-img'>25-11-2023</p>
                      </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body card-txt">
                            <p className="card-text">What services are provided to children in primary health care centers?</p>
                            <a href="#"><button className='btn-answer'>Dr Answered</button></a>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
                   </Carousel.Item>
                   <Carousel.Item>
                   <div className="col">
                   <div className="card mb-3">
                      <div className="row g-0">
                        <div className="md-4 d-flex">
                          <img src={doctor} className="img-doctor" alt="..."/>
                          <div className='content-img'>
                            <p className='name-img'>Omar Samer</p>
                            <p className='date-img'>25-11-2023</p>
                      </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body card-txt">
                            <p className="card-text">What services are provided to children in primary health care centers?</p>
                            <a href="#"><button className='btn-answer'>Dr Answered</button></a>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
                   </Carousel.Item>
                   <Carousel.Item>
                   <div className="col">
                   <div className="card mb-3">
                      <div className="row g-0">
                        <div className="md-4 d-flex">
                          <img src={doctor} className="img-doctor" alt="..."/>
                          <div className='content-img'>
                            <p className='name-img'>Omar Samer</p>
                            <p className='date-img'>25-11-2023</p>
                      </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body card-txt">
                            <p className="card-text">What services are provided to children in primary health care centers?</p>
                            <a href="#"><button className='btn-answer'>Doctor Answered</button></a>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
                   </Carousel.Item>
                   <Carousel.Item>
                   <div className="col">
                   <div className="card mb-3">
                      <div className="row g-0">
                        <div className="md-4 d-flex">
                          <img src={doctor} className="img-doctor" alt="..."/>
                          <div className='content-img'>
                            <p className='name-img'>Omar Samer</p>
                            <p className='date-img'>25-11-2023</p>
                      </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body card-txt">
                            <p className="card-text">What services are provided to children in primary health care centers?</p>
                            <a href="#"><button className='btn-answer'>Doctor Answered</button></a>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
                   </Carousel.Item>
                   <Carousel.Item>
                   <div className="col">
                   <div className="card mb-3">
                      <div className="row g-0">
                        <div className="md-4 d-flex">
                          <img src={doctor} className="img-doctor" alt="..."/>
                          <div className='content-img'>
                            <p className='name-img'>Omar Samer</p>
                            <p className='date-img'>25-11-2023</p>
                      </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body card-txt">
                            <p className="card-text">What services are provided to children in primary health care centers?</p>
                            <a href="#"><button className='btn-answer'>Doctor Answered</button></a>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
                   </Carousel.Item> 
                   </Carousel>
                   </div> */}
                   
              <Link to={`/Questions`}>
              <button className='btn text-white fw-bold rounded-5' style={{
                backgroundColor: '#32AA90',
                marginTop: '8%',
                marginLeft: '3%'
              }}>More Doctors Answer</button>
            </Link>
          </div>
          </div>
      </div>
      {/* Section 4 */}
      <br/><br/><br/><br/><br/> 
      <div className='Articles text-center mt-2'>
            <div className='container'>
                <div className='main-heading'>
                    <img src={heart} alt='' className='heart' />
                    <h1 className='head_P'>Medical Articles</h1>
                </div>
                <br/>
                <div className='grid'>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="card border-0" style={{background:"#EDBA64"}}>
                                <div className='image'>
                                    <img src={icons} style={{width:'20%'}} alt="" className='icon-baby' />
                                    <img src={unsplash} style={{width:'45%'}} alt="" className='img-baby' />
                                </div>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold mt-1">Talk to the child</h5>
                                <p className="card-text">The mother must communicate with her child. You will notice that your child hears you and begins to memorize your words.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className="card border-0" style={{background:"#D49778"}}>
                            <div className='image'>
                                    <img src={icons} style={{width:'20%'}} alt="" className='icon-baby' />
                                    <img src={unsplash} style={{width:'45%'}} alt="" className='img-baby' />
                                </div>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold mt-1">Child care</h5>
                                <p className="card-text">Calm your baby, massage him, and cuddle him gently. You will see your baby calm and happy to be held and rocked.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className="card border-0" style={{background:"#83BBF6"}}>
                              <div className='image'>
                                    <img src={icons} style={{width:'20%'}} alt="" className='icon-baby' />
                                    <img src={unsplash} style={{width:'45%'}} alt="" className='img-baby' />
                                </div>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold mt-1">Treat the child</h5>
                                <p className="card-text">Look at the child, and smile back. You should see your child reacting positively to your facial expressions.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Link to={`/art`}>
              <button className='btn text-white fw-bold rounded-5' style={{
                backgroundColor: '#32AA90',
                marginTop: '8%'
              }}>All Articles</button>
                        </Link>
                </div>
            </div>
        </div>
      {/* Section 5 */}
      <img src={stickersec5} className='ms-5' style={{width: '15%'}} alt="" />
      <div className='section5 mt-5' >
        <div className="container ">
          <div className="row gy-5">
            <div className="col-sm-6 p-4">
              <h3 className="card-title fw-bold" style={{ color: '#3E63B0' }}>Request a medical consultation now</h3>
              <h4 className="card-text mt-5" style={{ color: '#32AA90' }}>Enter your diseases or symptoms in minutes</h4>
              <p className="card-text mt-3">In our busy world, it is difficult for a person to find time
                to get to the <br /> doctor's office and then wait until he enters. Now you can
                visit the <br /> doctor without leaving your place</p>
              <div className="d-flex gap-3 mt-5">
                <div className='d-flex gap-3'>
                  <img src={imgvideo} style={{ width: '40px', height: '40px' }} alt="" />
                  <div>
                    <h6 className='fw-bold'>Video Call</h6>
                    <p className='text-muted'>Talk to a doctor</p>
                  </div>
                </div>
                <div className='d-flex gap-3'>
                  <img src={imgchat} style={{ width: '40px', height: '40px' }} alt="" />
                  <div>
                    <h6 className='fw-bold'>ChatBot</h6>
                    <p className='text-muted'>Talk to Chatbot</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='justify-content-center' style={
                {
                  position: 'relative',
                  marginTop: '-19%',
                  marginLeft: '20%'
                }}>
                <img src={imgdoctor} className='w-75' alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* section 6 */}
        <div className='homepagesection6' style={{marginTop: '13%'}}>
        <div className='container'>
          <div className='videoschildrens'>
            <div className='main-heading'>
              <img src={heart} alt='' className='heart' />
              <h1 className='head_P'>Watch Our Children Wellbeing</h1>
            </div>
            <br/>
            <div className='videosbody'>
              <div className="container">
                <div className="row row-cols-2 mt-2">
                  <div className="col">
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={babyvedio1} alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Growth</h5>
                            <p className="card-text">Changing diapers
                              frequently is an</p>
                            <p className="btnvideo"><small className="text-muted">PLAY NOW</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={babyvedio1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Growth</h5>
                            <p className="card-text">Changing diapers
                              frequently is an</p>
                            <p className="btnvideo"><small className="text-muted">PLAY NOW</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col"> <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={babyvedio1} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Growth</h5>
                          <p className="card-text">Changing diapers
                            frequently is an</p>
                          <p className="btnvideo"><small className="text-muted">PLAY NOW</small></p>
                        </div>
                      </div>
                    </div>
                  </div></div>
                  <div className="col"> <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={babyvedio1} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Growth</h5>
                          <p className="card-text">Changing diapers
                            frequently is an</p>
                          <p className="btnvideo"><small className="text-muted">PLAY NOW</small></p>
                        </div>
                      </div>
                    </div>
                  </div></div>
                </div>
              </div>     
            </div>
                <Link to={`/videos`}>
              <button className='btn text-white fw-bold rounded-5' style={{
                backgroundColor: '#32AA90',
                marginTop: '5%',
                marginLeft: '3%'
              }}>See All Videos</button>
                    </Link>

          </div>
        </div>
      </div>
      {/* section 7 */}
      <br /><br />
      <div className='position-relative'>
        <img src={stickersec7} className='position-absolute top-0 end-0 me-5' style={{ width: '15%' ,marginTop: '-8%'}} alt="" />
      </div>
      <div className='section5 mt-5' >
        <div className="container ">
          <div className="row">
            <div className="col-sm-6 p-4 mt-5">
              <h3 className="card-title fw-bold" style={{ color: '#3E63B0' }}>Are You a Doctor ?</h3>
              <h4 className="card-text mt-5" style={{ color: '#32AA90' }}>Join now the largest child-medical community
                <br />online</h4>
              <p className="card-text mt-3 fw-bold text-muted">If you would like to join the medical community and <br />
                benefit from the many services that medical doctors <br />
                provide, do not hesitate and start registering now</p>
              <button className='w-50 text-white fw-bold p-2 rounded-4 mt-3' style={{ backgroundColor: '#32AA90' }}>Register as a doctor</button>

            </div>
            <div className="col-sm-6">
              <div className='justify-content-center'>
                <img src={imgdoctor2} className='w-100' alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 8 */}
      <br /><br />
      <div className='section8 mt-5'>
        <div className='container'>
          <div className='row gy-3'>
            <div className='col-lg-6'>
              <img src={app} className='w-75' alt="" />
            </div>
            <div className='col-lg-6 text-center'>
              <div className='ms-5'>
              <h1 style={{ color: '#32AA90' }}>Danna App</h1>
              <p className='text-muted fw-bold'>Our project, "Danna App" <br /> represents a milestone in infant care <br />
                technology, offering a comprehensive <br /> community platform designed to cater to the <br /> diverse needs of parents and caregivers. From <br /> monitoring developmental milestones to <br /> providing a supportive network for parents, <br /> Danna App aims to revolutionize the way we <br /> approach infant care.</p>
              <div className="d-flex gap-5 mt-5 justify-content-center">
                <div className="d-flex gap-2 text-white p-2 rounded-4" style={{ height: '52px', backgroundColor: '#32AA90' }}>
                  <i className="bi bi-google-play fs-3 ms-1" style={{ marginTop: '-5%' }}></i>
                  <p style={{ fontSize: '10px' }}>Get iT ON <br /> <span className='fw-bold fs-6 '>Google Play</span></p>
                </div>
                <div className="d-flex gap-2  text-white p-2 rounded-4" style={{ height: '52px', backgroundColor: '#32AA90' }}>
                  <i className="bi bi-apple fs-3" style={{marginTop: '-5%'}}></i>
                  <p style={{ fontSize: '10px' }}>Get iT ON <br /> <span className='fw-bold fs-6 '>Apple Store</span></p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <br /><br />
        </div>
  )
}






