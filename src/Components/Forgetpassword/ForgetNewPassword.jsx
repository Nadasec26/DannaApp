import forget from "../../images/image 7.png";

const ForgetNewPassword = () => {
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
								New Password
							</h4>
							<p className='text-secondary'>Set the new password for your account so you can login and access all featuress.</p>
							<form action=''>
								<div className='p-3'>
									<label for='exampleInputEmail1' className='form-label'>
										Enter new password
									</label>
									<input type='password' className='form-control' id='exampleInputPassword1' />
								</div>
								<div className='p-3'>
									<label for='exampleInputEmail1' className='form-label'>
										Confirm password
									</label>
									<input type='password' className='form-control' id='exampleInputPassword1' />
								</div>
								<div className='d-flex justify-content-center'>
									<button type='submit' className='btn text-white fs-5 w-50 rounded-pill' style={{background: "rgba(50, 170, 144, 1)"}}>
										submit
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

export default ForgetNewPassword;
