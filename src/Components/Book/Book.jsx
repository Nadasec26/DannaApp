import {useState} from "react";
import ch1 from "../../images/g.png";
import ch2 from "../../images/d.png";
import ch3 from "../../images/f.png";
import ch4 from "../../images/Frame 3359.png";

export default function Book() {
	const [sidebar, Setsidebar] = useState(false);
	const showData = () => Setsidebar(!sidebar);
	return (
		<div>
			<div className='container-fluid'>
				<div className='card border-0'>
					<div className='map' style={{height: "100vh"}}>
						<iframe
							width='100%'
							height='100%'
							frameborder='0'
							scrolling='no'
							marginheight='0'
							marginwidth='0'
							src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
						>
							<a href='https://www.gps.ie/'>gps vehicle tracker</a>
						</iframe>
					</div>
					<div className='card-img-overlay p-0'>
						<div className='position-absolute top-50' onClick={showData}>
							<i className='bi bi-caret-right-fill fs-5 bg-white p-2'></i>
						</div>
						{sidebar && (
							<div className='row'>
								<div className='col col-sm-12 bg-white' style={{width: "35%", height: "100vh", overflow: "hidden"}}>
									<div className='row border-bottom p-1'>
										<div className='col fw-bold'>Hoods</div>
										<div className='col' style={{color: "rgba(0, 0, 0, 0.33)"}}>
											Places
										</div>
										<div className='col' style={{color: "rgba(0, 0, 0, 0.33)"}}>
											Interaries
										</div>
										<div className='col' style={{color: "rgba(0, 0, 0, 0.33)"}}>
											Gudies
										</div>
										<div className='col' style={{color: "rgba(0, 0, 0, 0.33)"}} onClick={showData}>
											<i className='bi bi-x-circle-fill'></i>
										</div>
									</div>
									<div className='card overflow-auto' style={{height: "100vh"}}>
										<div className='card mt-2'>
											<img src={ch1} className='card-img-top' alt='...' />
											<div className='card-body'>
												<h5 className='card-title'>Serenity Wellness clinic</h5>
												<p className='card-text d-flex gap-2'>
													<h6 style={{color: "rgba(0, 0, 0, 0.33)"}}>Dental,baby</h6>
													<div>
														<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
														<small className='fw-bold'>6.4</small>
													</div>
												</p>
												<p className='card-text'>
													<div className='row'>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-geo-alt-fill text-primary'></i>
																<p>Medimentor can helo </p>
															</div>
														</div>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-clock-fill text-primary'></i>
																<p>Dental,baby </p>
															</div>
														</div>
													</div>
												</p>
											</div>
										</div>
										<div className='card mt-2'>
											<img src={ch2} className='card-img-top' alt='...' />
											<div className='card-body'>
												<h5 className='card-title'>Serenity Wellness clinic</h5>
												<p className='card-text d-flex gap-2'>
													<h6 style={{color: "rgba(0, 0, 0, 0.33)"}}>Dental,baby</h6>
													<div>
														<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
														<small className='fw-bold'>6.4</small>
													</div>
												</p>
												<p className='card-text'>
													<div className='row'>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-geo-alt-fill text-primary'></i>
																<p>Medimentor can helo </p>
															</div>
														</div>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-clock-fill text-primary'></i>
																<p>Dental,baby </p>
															</div>
														</div>
													</div>
												</p>
											</div>
										</div>
										<div className='card mt-2'>
											<img src={ch3} className='card-img-top' alt='...' />
											<div className='card-body'>
												<h5 className='card-title'>Serenity Wellness clinic</h5>
												<p className='card-text d-flex gap-2'>
													<h6 style={{color: "rgba(0, 0, 0, 0.33)"}}>Dental,baby</h6>
													<div>
														<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
														<small className='fw-bold'>6.4</small>
													</div>
												</p>
												<p className='card-text'>
													<div className='row'>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-geo-alt-fill text-primary'></i>
																<p>Medimentor can helo </p>
															</div>
														</div>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-clock-fill text-primary'></i>
																<p>Dental,baby </p>
															</div>
														</div>
													</div>
												</p>
											</div>
										</div>
										<div className='card mt-2'>
											<img src={ch4} className='card-img-top' alt='...' />
											<div className='card-body'>
												<h5 className='card-title'>Serenity Wellness clinic</h5>
												<p className='card-text d-flex gap-2'>
													<h6 style={{color: "rgba(0, 0, 0, 0.33)"}}>Dental,baby</h6>
													<div>
														<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
														<small className='fw-bold'>6.4</small>
													</div>
												</p>
												<p className='card-text'>
													<div className='row'>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-geo-alt-fill text-primary'></i>
																<p>Medimentor can helo </p>
															</div>
														</div>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-clock-fill text-primary'></i>
																<p>Dental,baby </p>
															</div>
														</div>
													</div>
												</p>
											</div>
										</div>
										<div className='card mt-2'>
											<img src={ch4} className='card-img-top' alt='...' />
											<div className='card-body'>
												<h5 className='card-title'>Serenity Wellness clinic</h5>
												<p className='card-text d-flex gap-2'>
													<h6 style={{color: "rgba(0, 0, 0, 0.33)"}}>Dental,baby</h6>
													<div>
														<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
														<small className='fw-bold'>6.4</small>
													</div>
												</p>
												<p className='card-text'>
													<div className='row'>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-geo-alt-fill text-primary'></i>
																<p>Medimentor can helo </p>
															</div>
														</div>
														<div className='col'>
															<div className='d-flex gap-2'>
																<i className='bi bi-clock-fill text-primary'></i>
																<p>Dental,baby </p>
															</div>
														</div>
													</div>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
