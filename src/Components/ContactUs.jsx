import imgcontact from "../images/image 112.png";
import union3 from "../images/Union3.png";
import union2 from "../images/Union2.png";
import union1 from "../images/Union.png";

const ContactUs = () => {
	return (
		<div>
			<div className='card' style={{width: "100%", border: "none"}}>
				<img src={imgcontact} className='card-img' alt='...' />
				<div className='card-img-overlay container' style={{marginTop: "5%"}}>
					<h4 className='card-title mt-5 fs-1'>Contact Us</h4>
					<h1 className='card-text fs-5'>
						<span style={{color: "rgba(50, 170, 144, 1)"}}>Contact</span>
					</h1>
				</div>
			</div>
			<div className='container mt-5'>
				<div className='row gy-3'>
					<div className=' col-md-6 col-lg-4 '>
						<div className='card border-0'>
							<img src={union1} className='card-img' alt='...' />
							<div className='card-img-overlay text-center mt-3'>
								<i className='bi bi-envelope text-white p-2 rounded-circle fs-5' style={{background: "rgba(142, 117, 75, 0.13)"}}></i>
								<p className='card-text mt-2 fs-5'>This is the heading</p>
								<p className='card-text text-white'>
									1750 Hoffman Fullbariget <br />
									1750 Hoffman Fullbariget
								</p>
							</div>
						</div>
					</div>
					<div className=' col-md-6 col-lg-4 '>
						<div className='card border-0'>
							<img src={union2} className='card-img' alt='...' />
							<div className='card-img-overlay text-center mt-3'>
								<i className='bi bi-envelope text-white p-2 rounded-circle fs-5' style={{background: "rgba(142, 117, 75, 0.13)"}}></i>
								<p className='card-text mt-2 fs-5'>This is the heading</p>
								<p className='card-text text-white'>
									1750 Hoffman Fullbariget <br />
									1750 Hoffman Fullbariget
								</p>
							</div>
						</div>
					</div>
					<div className=' col-md-6 col-lg-4 '>
						<div className='card border-0'>
							<img src={union3} className='card-img' alt='...' />
							<div className='card-img-overlay text-center mt-3'>
								<i className='bi bi-envelope text-white p-2 rounded-circle fs-5' style={{background: "rgba(142, 117, 75, 0.13)"}}></i>
								<p className='card-text mt-2 fs-5'>This is the heading</p>
								<p className='card-text text-white'>
									1750 Hoffman Fullbariget <br />
									1750 Hoffman Fullbariget
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='card mt-5 border-0  '>
				<div className=' bg-white container rounded-3  shadow p-4'>
					<h5 className='card-title text-center fs-1'>Contact Us</h5>
					<p className='card-text text-center fs-6'>
						This is a wider card with supporting text below as a natural
						<br />
						lead-in to additional content. This content is a little bit longer.
					</p>
					<form className='row g-3'>
						<div className='col-12'>
							<input type='text' className='form-control border-0 bg-light' placeholder='Name*' aria-label='First name' />
						</div>
						<div className='col-md-6'>
							<input type='email' className='form-control border-0 bg-light' id='inputEmail4' placeholder='Your Email' />
						</div>
						<div className='col-md-6'>
							<input type='text' className='form-control border-0 bg-light' id='inputnumber' placeholder='Your Phone' />
						</div>

						<div className='col-12'>
							<textarea id='w3review' className='form-control border-0 bg-light' name='w3review' rows='4' cols='50' placeholder='Your Message*' />
						</div>
						<div className='col-12'>
							<button type='submit' className='btn text-white p-2' style={{background: "rgba(50, 170, 144, 1)"}}>
								Book Appointment
							</button>
						</div>
					</form>
				</div>
			</div>
			<div
				className='container text-white mt-5 w-50 rounded-3 p-3'
				style={{
					backgroundColor: "rgba(50, 170, 144, 1)",
				}}
			>
				<div className='row'>
					<div className='col-lg-6 col-sm-12'>
						<h6>Join Our Newsletter</h6>
						<h5>Subscribe For Any News Update</h5>
					</div>
					<div className='col-lg-6 col-sm-12'>
						<div className='input-group mt-3'>
							<input
								type='email'
								className='form-control text-white'
								placeholder='Your Email'
								style={{
									backgroundColor: "rgba(50, 170, 144, 1)",
								}}
							/>
							<span
								className='input-group-text'
								style={{
									color: "rgba(50, 170, 144, 1)",
								}}
							>
								Subscribe
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContactUs;
