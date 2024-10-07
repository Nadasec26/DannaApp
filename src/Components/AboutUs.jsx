import circle1 from "../images/Group 42.png";
import circle2 from "../images/circle2.png";
import circle3 from "../images/circle3.png";
import doctorimg1 from "../images/Frame 171.png";
import doctorimg2 from "../images/Frame 173.png";
import doctorimg3 from "../images/Frame 175.png";
import imgheader from "../images/Group 43.png";
import heart from "../images/image 104.png";
import cloud from "../images/image 95.png";
import docts from "../images/Frame 169.png";
import girlbaby from "../images/image 92.png";
import plane from "../images/image 103.png";
import brain from "../images/noto_brain.png";
import doccircle from "../images/Component 35.png";
import doctorimg4 from "../images/Frame 174.png";
import { Link } from "react-router-dom";

export default function AboutUs() {
	return (
		<div>
			<div
				className='AboutUs'
				style={{
					fontFamily: "PT Sans",
				}}
			>
				<div className='sec1'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-8 mt-3'>
								<div className='card mt-5' style={{border: "none"}}>
									<h1 className='card-title text-muted fw-bold'>
									Our responsibility to maintain <br />
									Your child's ideal health.
									</h1>
									<br />
									<p className='card-text text-muted fs-5'>
									After giving birth, the mother can expect some physical changes <br />
									and symptoms, but, they are usually mild and temporary. Severe <br />
									health problems are rare. However, the doctor, hospital staff, or <br />
									health care plan staff will prepare a follow-up program.
									</p>
									<br />
									<div className='w-75'>
										<Link to={`/doctors`}>
										<button
											className='btn text-white w-50'
											style={{
												backgroundColor: "rgba(50, 170, 144, 1)",
											}}
										>
											Go to Doctors
										</button>
										</Link>
									</div>
								</div>
							</div>
							<div className='col-sm-4'>
								<img src={imgheader} alt='' className='imgheader' />
							</div>
						</div>
					</div>
				</div>
				<div className='sec2 mt-5'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<div className='text-center text-muted'>
									<h1 className='fw-bold'>Why Choose us</h1>
									<p>
									The web helps you raise the level of service you provide in your medical institution <br /> and stay ahead of the competition. If you still have doubts about the <br /> importance of the web in management, I advise you to join us.
									</p>
								</div>
							</div>
							<div className='col-12'>
								<div className='row'>
									<div className='col-sm'>
										<div className='card border-0'>
											<img src={circle1} className='card-img' alt='...' />
											<div className='card-img-overlay'>
												<ul className='justify-content-center text-center position-absolute top-50 start-50 translate-middle'>
													<li className='fs-1 ' style={{color: "rgba(50, 170, 144, 1)"}}>
														<i className='bi bi-telephone-x'></i>
													</li>
													<li className=' fs-4'>Emergency</li>
												</ul>
											</div>
										</div>
									</div>
									<div className='col-sm'>
										<div className='card border-0'>
											<img src={circle2} className='card-img' alt='...' />
											<div className='card-img-overlay'>
												<ul className='justify-content-center text-center position-absolute top-50 start-50 translate-middle'>
													<li className='fs-1' style={{color: "rgba(50, 170, 144, 1)"}}>
														<i className='bi bi-calendar3'></i>
													</li>
													<li className='fs-4'>Services</li>
												</ul>
											</div>
										</div>
									</div>
									<div className='col-sm'>
										<div className='card border-0'>
											<img src={circle3} className='card-img' alt='...' />
											<div className='card-img-overlay'>
												<ul className='justify-content-center text-center position-absolute top-50 start-50 translate-middle'>
													<li className='fs-1' style={{color: "rgba(50, 170, 144, 1)"}}>
														<i className='bi bi-stars'></i>
													</li>
													<li className='fs-4'>Care</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className='sec3 mt-5'
					style={{
						backgroundColor: "#f8f8f8",
					}}
				>
					<div className='container'>
						<img src={cloud} alt='' className='mt-5' style={{width: "7%"}} />
						<div className='row gy-3'>
							<div className='col-md-6 col-sm-12'>
								<div className='card' style={{border: "none", textAlign: "center", background: "#f8f8f8"}}>
									<div className='d-flex justify-content-center align-items-center'>
										<h3 className='card-title fw-bold'>About Us</h3>
										<img src={heart} alt='' className='mb-5' style={{width: "7%"}} />
									</div>
									<br />
									<p className='card-text'>
									We are a community dedicated to children. <br />
									We provide the basics of child care, how <br />
									a mother can take care of her children, <br />
									and we provide everything a child needs.
									</p>
									<br />
									<br />
									<div className='justify-content-center'>
										<Link to={`/Book`}>
										<button className='btn text-white w-50' style={{backgroundColor: "rgba(50, 170, 144, 1)"}}>
											Book Incubation
										</button>
										</Link>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-sm-12'>
								<img src={docts} alt='' />
							</div>
						</div>
					</div>
				</div>
				<img
					src={girlbaby}
					className='ms-5'
					style={{
						width: "7%",
					}}
				/>
				<div className='sec4 mt-5'>
					<div className='container'>
						<div className='col-12'>
							<div className='text_section4_AboutUs'>
								<h2
									className='text-center fw-bold'
									style={{
										color: "rgba(50, 170, 144, 1)",
									}}
								>
									TEAM
								</h2>
								<h4 className='text-center'>Meet Our Professionals</h4>
								<p className='text-center text-muted fs-5'>
									An innovative platform for remote medical consultation services! <br /> Get quality health care anywhere and anytime.We are here <br /> to facilitate communication between you and doctors
								</p>
							</div>
							<div></div>
						</div>
						<div className='col-12'>
							<div className='row'>
								<div className='col col-md-5 col-lg-3 col-sm-6'>
									<div className='card border-0'>
										<img src={doctorimg1} className='card-img-top' alt='...' />
										<div className='card-body'>
											<h5
												className='card-title text-center fw-bold'
												style={{
													color: "rgba(50, 170, 144, 1)",
												}}
											>
												dr. Harman White
											</h5>
											<p className='card-text text-muted text-center fs-5'>CEO & Director</p>
										</div>
									</div>
								</div>
								<div className='col col-md-5 col-lg-3  col-sm-6 '>
									<div className='card border-0'>
										<img src={doctorimg2} className='card-img-top' alt='...' />
										<div className='card-body'>
											<h5
												className='card-title text-center fw-bold'
												style={{
													color: "rgba(50, 170, 144, 1)",
												}}
											>
												dr. Harman White
											</h5>
											<p className='card-text text-muted text-center fs-5'>CEO & Director</p>
										</div>
									</div>
								</div>
								<div className='col col-md-5 col-lg-3 col-sm-6 '>
									<div className='card border-0'>
										<img src={doctorimg3} className='card-img-top' alt='...' />
										<div className='card-body'>
											<h5
												className='card-title text-center fw-bold'
												style={{
													color: "rgba(50, 170, 144, 1)",
												}}
											>
												dr. Harman White
											</h5>
											<p className='card-text text-muted text-center fs-5'>CEO & Director</p>
										</div>
									</div>
								</div>
								<div className='col col-md-5 col-lg-3 col-sm-6 '>
									<div className='card border-0'>
										<img src={doctorimg4} className='card-img-top' alt='...' />
										<div className='card-body'>
											<h5
												className='card-title text-center fw-bold'
												style={{
													color: "rgba(50, 170, 144, 1)",
												}}
											>
												dr. Harman White
											</h5>
											<p className='card-text text-muted text-center fs-5'>CEO & Director</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='last-section' style={{textAlign: "center"}}>
					<div className='container'>
						<div className='card' style={{border: "none"}}>
							<div className=''>
								<img
									src={plane}
									alt=''
									style={{
										width: "3%",
									}}
								/>
								<h1
									className='card-title fw-bold'
									style={{
										color: "rgba(50, 170, 144, 1)",
									}}
								>
									Our Services
								</h1>
							</div>
							<p className='card-text'>Meet Our Professionals </p>
							<br />
							<br />
						</div>
						<div className='row gy-4'>
							<div className='col-md-6 col-sm-12'>
								<div>
									<img src={doccircle} alt='' />
								</div>
							</div>
							<div className='col-md-6 col-sm-12'>
								<div className='row gy-3'>
									<div className='col-md-6 col-sm-12'>
										<div
											className='card p-1 shadow border-0 text-center w-100 '
											style={{
												borderRadius: "7% 0 0 7%",
											}}
										>
											<div className='justify-content-center'>
											<i className="bi bi-card-checklist fs-1"style={{color: '#ff006a'}}></i>
											</div>
											<div className='card-body'>
												<h4 className='card-title fs-5 fw-bold'>Consultation details</h4>
												<p className='card-text'>
												the doctor to contact you
												Enter your condition details
												 to get a doctor's consultation.
												</p>
											</div>
										</div>
									</div>
									<div className='col-md-6 col-sm-12'>
										<div className='card p-1 shadow border-0 text-center w-100 ' style={{borderRadius: "0 7% 7% 0"}}>
											<div className='justify-content-center'>
											
											<i className="bi bi-credit-card-2-front  fs-1" style={{color:'#ff006a'}}></i>
											</div>
											<div className='card-body'>
												<h4 className='card-title fs-5 fw-bold'>payment method</h4>
												<p className='card-text'>
												Enter the card number to pay, and then click on the (approval) form to continue.
												</p>
											</div>
										</div>
									</div>
									<div className='col-md-6 col-sm-12'>
										<div className='card p-1 shadow border-0 text-center w-100 ' style={{borderRadius: "7% 0 0 7%"}}>
											<div className='justify-content-center'>
											<i className="bi bi-journal-check fs-1"  style={{color:'#ff006a'}}></i>
											</div>
											<div className='card-body'>
												<h4 className='card-title fs-5 fw-bold'>Booking incubation</h4>
												<p className='card-text'>
												To book a incubation, choose from Google Map the location closest to you
												</p>
											</div>
										</div>
									</div>
									<div className='col-md-6 col-sm-12'>
										<div className='card p-1 shadow border-0 text-center w-100 ' style={{borderRadius: "0 7% 7% 0"}}>
											<div className='justify-content-center'>
											<i className="bi bi-diagram-2 fs-1"  style={{color:'#ff006a'}}></i>
											</div>
											<div className='card-body'>
												<h4 className='card-title fs-5 fw-bold'>Your baby's supplies</h4>
												<p className='card-text'>
												Enter the product and choose everything related to your child’s needs
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

{
	/* <div className='card   shadow border-0 text-start w-75' style={{ border: 'none' }}>
                                    <img src={brain} alt="" className='mt-3 ms-3' style={{width: '15%'}}/>
                                    <div className='card-body'>
                                        <h4 className='card-title fs-5 fw-bold'>Neurology Care</h4>
                                        <p className='card-text'>etur adipiscing elit. Ut elit<br/> tellus, luctus nec etur adipiscing<br/> elit. Ut elit tellus, luctus nec </p>
                                    </div>
                                </div> */
}
