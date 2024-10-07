import forget from "../../images/image 7.png";

const ForgetPassword = () => {
	return (
		<div className='forgetpassward' style={{background: "rgba(50, 170, 144, 1)"}}>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6'>
						<img className='mx-auto d-block w-100 p-5' src={forget} alt='' />
					</div>
					<div className='col-sm-6 p-5'>
						<div className='card border-0 bg-white shadow h-100 w-100 p-5' style={{borderRadius: "16px"}}>
							<h4 className='text-center fw-bold mt-5 p-3' style={{color: "rgba(50, 170, 144, 1)"}}>
								Forgot password
							</h4>
							<p className='text-secondary'>Enter your email for the verification proccess,we will send 4 digits code to your email.</p>
							<form action=''>
								<div className='p-4'>
									<label for='exampleInputEmail1' className='form-label'>
										E-mail
									</label>
									<input
										type='email'
										placeholder='Please Enter Email'
										className='form-control'
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
									/>
								</div>
								<div className='d-flex justify-content-center'>
									<button type='submit' className='btn text-white fs-5 w-50 rounded-pill' style={{background: "rgba(50, 170, 144, 1)"}}>
										Continue
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
