import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import "../styles/Signup.css";
import logo from "../images/LOGO 1.png";
import img from "../images/form-img 2.png";
import axios from "axios";
import {baseURL} from "../utils/baseURL.js";
import {useFormik} from "formik";
import * as Yup from "yup";
import {jwtDecode} from "jwt-decode";

const UpdateProfile = () => {
	const [loading, setLoading] = useState(true);
	const [id, setId] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		try {
			const decoded = jwtDecode(token);
			setId(decoded.userId);
		} catch (error) {}
	});

	function sendDataToApi(values) {
		setLoading(false);

		axios
			.put(baseURL + `users/${id}`, values, {
				headers: {
					token: localStorage.getItem("token"),
				},
			})
			.then(({data}) => {
				if (data.message == "success") {
					toast.success(`${data.message}`);
					setLoading(true);
				} else {
					toast.error(`${data.map((err) => err)}`, {
						position: "bottom-center",
					});
					setLoading(true);
				}
			})
			.catch((err) => {
				setLoading(true);
				toast.error(`${err.response.data.message}`, {
					position: "bottom-center",
				});
			});
	}

	function validationSchema() {
		const schema = new Yup.object({
			fName: Yup.string()
				.min(3, "First Name must be at least 3 characters")
				.max(20, "First Name must be at most 20 characters")
				.transform((value, originalValue) => originalValue.replace(/\s/g, ""))
				.trim()
				.required("First Name is required"),
			lName: Yup.string()
				.min(3, "Last Name must be at least 3 characters")
				.max(20, "Last Name must be at most 20 characters")
				.transform((value, originalValue) => originalValue.replace(/\s/g, ""))
				.trim()
				.required("Last Name is required"),
			email: Yup.string().email().min(5).max(100).trim().required(),
		});
		return schema;
	}

	const register = useFormik({
		initialValues: {
			fName: "",
			lName: "",
			email: "",
		},
		validationSchema,
		onSubmit: (values) => {
			sendDataToApi(values);
		},
	});

	return (
		<div className='signUpForm'>
			<div className='container-fluid px-5'>
				<div className='row gy-5 py-5'>
					<div className='col-md-6 bg-white rounded-4 p-5 text-center '>
						<form onSubmit={register.handleSubmit}>
							<h2>Update Profile</h2>
							<p className='subtitle mb-5'>Update ...</p>

							<div className='row gy-4 mb-4'>
								<div className='col-md-6 position-relative'>
									<input
										type='text'
										onChange={register.handleChange}
										onBlur={register.handleBlur}
										placeholder='First Name'
										className={`form-control ${
											register.errors.fName && register.touched.fName ? "is-invalid" : register.touched.fName ? "is-valid" : ""
										}`}
										name='fName'
									/>
									{register.errors.fName && register.touched.fName ? (
										<div className='error-message'>
											<i className='fa-solid fa-caret-up' style={{color: "#df0016"}} />
											<p className='m-0 py-1'>{register.errors.fName}</p>
										</div>
									) : (
										""
									)}
								</div>
								<div className='col-md-6 position-relative'>
									<input
										type='text'
										onChange={register.handleChange}
										onBlur={register.handleBlur}
										placeholder='Last Name'
										className={`form-control ${
											register.errors.lName && register.touched.lName ? "is-invalid" : register.touched.lName ? "is-valid" : ""
										}`}
										name='lName'
									/>
									{register.errors.lName && register.touched.lName ? (
										<div className='error-message'>
											<i className='fa-solid fa-caret-up' style={{color: "#df0016"}} />
											<p className='m-0 py-1'>{register.errors.lName}</p>
										</div>
									) : (
										""
									)}
								</div>
							</div>
							<div className='position-relative mb-4'>
								<input
									type='email'
									onChange={register.handleChange}
									onBlur={register.handleBlur}
									placeholder='Email'
									className={`form-control email ${
										register.errors.email && register.touched.email ? "is-invalid" : register.touched.email ? "is-valid" : ""
									}`}
									name='email'
								/>
								<i
									className={`fa-solid fa-envelope position-absolute ${
										register.errors.email && register.touched.email ? "iconError" : register.touched.email ? "iconSucc" : ""
									}`}
								></i>
								{register.errors.email && register.touched.email ? (
									<div className='error-message'>
										<i className='fa-solid fa-caret-up' style={{color: "#df0016"}} />
										<p className='m-0 py-1'>{register.errors.email}</p>
									</div>
								) : (
									""
								)}
							</div>

							<button type='submit' disabled={!(register.dirty && register.isValid)} className='formBtn btn w-100 rounded-pill text-white mb-4'>
								{loading ? "Update" : <i className='fa fa-spinner fa-spin'></i>}
							</button>
						</form>
					</div>
					<div className='offset-md-1 col-md-5 py-5'>
						<div>
							<img src={logo} alt='logo' />
						</div>
						<div>
							<img src={img} alt='form image' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateProfile;
