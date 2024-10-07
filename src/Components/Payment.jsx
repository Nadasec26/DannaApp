import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import img from "../images/image 21.png";

const Payment = () => {
	const [Dateobj, setDateobj] = useState(null);
	const [DatSav, setDateSav] = useState(null);
	const handleDate = (dt) => {
		setDateobj(dt);
		let normaldate = dt === null ? "" : console.log(normaldateFormatted(dt));
		setDateSav(normaldate);
	};
	const normaldateFormatted = (d) => {
		if (d) {
			return ("0" + d.getDate()).slice(-2) + "/" + ("0" + (Number(d.getDate()) + 1)).slice(-2) + "/" + d.getFullYear();
		}
	};
	return (
		<div className='Payment p-5'>
			<div className='container '>
				<div className='row justify-content-center gy-3'>
					<div
						className='col-lg-4 mt-5 div1 border h-75'
						style={{
							backgroundColor: "rgba(50, 170, 144, 1)",
						}}
					>
						<div className='text-center p-5'>
							<img src={img} alt='' className='img-fluid' />
						</div>
					</div>
					<div className='col-lg-5 border div2 shadow'>
						<div className='card border-0 p-4'>
							<h2 className='card-title'>Payment Method</h2>
							<div className='card-text mt-3'>
								<small className='text-muted'>Credit Card Number</small>
								<br />
								<input type='text' className='form-control' placeholder='+223-2222-4444-22' />
							</div>
							<div className='card-text mt-3'>
								<small className='text-muted'>Card Holder</small>
								<br />
								<input type='text' className='form-control' placeholder='Mohamed Mohamed' />
							</div>
							<div className='card-text mt-4'>
								<small className='text-muted'>Select Date</small>
								<br />
								<DatePicker
									className='form-control w-100'
									selected={Dateobj}
									dateFormat='dd/MM/yyyy'
									onChange={(date) => handleDate(date)}
									placeholderText='9/9/2002'
								/>
							</div>
							<div className='card-text mt-3'>
								<small className='text-muted'>Code CVV</small>
								<br />
								<input type='text' className='form-control' placeholder='XXXXXXX' />
							</div>
							<div className='mt-5 text-center'>
								<button
									className='btn fs-6 w-50 text-white'
									style={{
										backgroundColor: "rgba(50, 170, 144, 1)",
									}}
								>
									Pay
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Payment;
