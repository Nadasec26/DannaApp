import {Link} from "react-router-dom";
import Logo from "../images/LOGO 1.png";

const Footor = () => {
	return (
		<div className='footor shadow mt-5'>
			<div className='container'>
				<div className='row gy-4 ms-5'>
					<div className='col-lg-3 col-md-6'>
						<Link className='Footor-brand' to='/'>
							<img className='w-50' src={Logo} alt='' />
						</Link>
						<p className='fs-6 mt-4 text-muted'>
							Children are a joy and happiness that colors life, so follow Danna’s Website and Application to preserve them
						</p>
						<div className='d-flex gap-2 mt-4'>
							<i className='bi bi-geo-alt-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<p className='text-muted'>Ismailia , Egypt</p>
						</div>
					</div>
					<div className='col-lg-3 col-md-6'>
						<h6 className='fw-bold mb-4' style={{color: "rgba(62, 99, 176, 1)"}}>
							Novfigation
						</h6>
						<Link>
							<p className='text-muted mb-0'>Home</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>About Us</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Pages</p>
						</Link>
						<Link>
							<p className='text-muted'>Serives</p>
						</Link>
						<div className='d-flex gap-2 mt-5'>
							<i className='bi bi-telephone-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<p className='text-muted'>(+876)785 241</p>
						</div>
					</div>
					<div className='col-lg-3 col-md-6'>
						<h6 className='fw-bold mb-4' style={{color: "rgba(62, 99, 176, 1)"}}>
							Quick Link
						</h6>
						<Link>
							<p className='text-muted mb-0'>Contact Us</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Booking</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Product</p>
						</Link>
						<Link>
							<p className='text-muted'>ChatBot</p>
						</Link>
						<div className='d-flex gap-2 mt-5'>
							<i className='bi bi-envelope-paper-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<p className='text-muted'>Dana22../gmail.com</p>
						</div>
					</div>
					<div className='col-lg-3 col-md-6'>
						<h6 className='fw-bold mb-4' style={{color: "rgba(62, 99, 176, 1)"}}>
							Services
						</h6>
						<Link>
							<p className='text-muted mb-0'>Home</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Contact Us</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Product</p>
						</Link>
						<Link>
							<p className='text-muted'>ChatBot</p>
						</Link>
						<div className='d-flex gap-3 mt-5 ms-3'>
							<i className='bi bi-facebook' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<i className='bi bi-twitter' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<i className='bi bi-youtube' style={{color: "rgba(50, 170, 144, 1)"}}></i>
						</div>
					</div>
					<hr />
					<p className='text-center'>
						Made With Love <i className='bi bi-balloon-heart-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footor;
