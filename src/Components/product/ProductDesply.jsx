import {useState, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {baseURL} from "../../utils/baseURL";
import jir from "../../images/JIRAFF.png";
import user from "../../images/user.jpg";
import {ImageCoverSkeleton, SideImagesSkeleton, TitleSkeleton, DescriptionSkeleton} from "../../skeleton/productDesplay";

export default function ProductDesply() {
	const navigate = useNavigate();
	const [section, setSection] = useState(1);
	const params = useParams();
	const productId = params.productID;
	const [product, setProduct] = useState({
		result: {
			imageCover: {
				url: "",
			},
			images: [],
			title: "",
			price: 0,
			description: "",
			category: "",
			stock: 0,
			brand: "",
			ratingAvg: 0,
		},
	});

	const [loading, setLoading] = useState(true);
	const [isInWishlist, setIsInWishlist] = useState(false);

	useEffect(() => {
		axios
			.get(baseURL + "products/" + productId)
			.then((response) => {
				setProduct(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
			});
	});

	useEffect(() => {
		try {
			if (localStorage.getItem("token")) {
				const response = axios.get(baseURL + "wishlist", {
					headers: {
						token: localStorage.getItem("token"),
					},
				});
				const wishlist = response.data.result;
				setIsInWishlist(wishlist.some((item) => item._id === productId));
			}
		} catch (error) {}
	});

	const toggleFavorite = async (idProduct) => {
		if (!localStorage.getItem("token")) return navigate("/login");
		if (isInWishlist) {
			try {
				axios.delete(baseURL + "wishlist", {
					headers: {
						token: localStorage.getItem("token") ?? navigate("/login"),
					},
					data: {product: idProduct},
				});
			} catch (err) {}
		} else {
			try {
				axios.patch(
					baseURL + "wishlist",
					{product: idProduct},
					{
						headers: {
							token: localStorage.getItem("token") ?? navigate("/login"),
						},
					},
				);
			} catch (err) {}
		}
	};

	const quantityRef = useRef(null);
	const addToCart = async (idProduct, quantity) => {
		if (!localStorage.getItem("token")) return navigate("/login");
		try {
			axios.post(
				baseURL + "carts",
				{product: idProduct, quantity: +quantity},
				{
					headers: {
						token: localStorage.getItem("token") ?? navigate("/login"),
					},
				},
			);
		} catch (err) {}
	};
	return (
		<div
			className='productdesplay'
			style={{
				fontFamily: "PT Sans",
			}}
		>
			<div className='container'>
				<div className='sec1'>
					<div className='row'>
						<div className=' col-lg-6 col-md-12 '>
							<div className='row'>
								<div className='col-sm-3 '>
									<div className='d-flex flex-column bd-highlight mb-3'>
										{loading ? (
											<SideImagesSkeleton count={4} height={100} />
										) : (
											product.result?.images.map((image) => (
												<div className='p-2 bd-highlight'>
													<img src={image.url} className='img-thumbnail ' alt={product?.title} />
												</div>
											))
										)}
									</div>
								</div>
								<div className='col-sm-9'>
									<div className='card' style={{borderRadius: "16px"}}>
										{loading ? <ImageCoverSkeleton /> : <img src={product.result?.imageCover.url} className='' alt={product?.title} />}
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-12'>
							<div className='card p-3 border-0'>
								{loading ? (
									<>
										<TitleSkeleton />
									</>
								) : (
									<>
										<h1>{product.result.title}</h1>
										<div className='d-flex gap-4 text-center'>
											<div className='icon'>
												{Array(Math.floor(product.result.ratingAvg)).fill(
													<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>,
												)}
												{Array(product.result.ratingAvg % 1 >= 0.5 ? 1 : 0).fill(
													<i className='bi bi-star-half' style={{color: "rgba(255, 199, 0, 1)"}}></i>,
												)}
											</div>
											<p className='color'>({product.result.ratingCount} CUSTOMER REVIEWS)</p>
										</div>
										<h4>${product.result.price}</h4>
										<p className='color text-muted'>{product.result.description}</p>
										<div className='d-flex gap-3'>
											<input ref={quantityRef} type='number' className='w-25' style={{outline: "none"}} />
											<button
												className='w-25 text-white'
												style={{
													backgroundColor: "rgba(50, 170, 144, 1)",
												}}
												onClick={() => addToCart(product.result._id, quantityRef.current.value)}
											>
												Add To Cart
											</button>
										</div>
										<div className='d-flex gap-3 icon1'>
											<button onClick={() => toggleFavorite(product.result._id)}>
												<i className={`bi bi-${isInWishlist ? "heart-fill" : "heart"}`} style={{color: "rgba(50, 170, 144, 1)"}}></i>
												<p>ADD TO WISHLIST</p>
											</button>
											<img src={jir} alt='' className='w-25 position-absolute end-0' />
										</div>
										<p className='mt-5 color text-muted'>Category : Toys</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div className='sec2'>
					{loading ? (
						<div className='d-flex justify-content-center'>
							<DescriptionSkeleton style={{}} />
						</div>
					) : (
						<>
							<div className='d-flex justify-content-center gap-5'>
								<h3 style={{cursor: "pointer"}} onClick={() => setSection(1)}>
									Description
								</h3>
								<h3 style={{cursor: "pointer"}} onClick={() => setSection(2)}>
									Additional Infomation
								</h3>
								<h3 style={{cursor: "pointer"}} onClick={() => setSection(3)}>
									Reviews
								</h3>
							</div>
							{section === 1 && (
								<div className='d-flex justify-content-center'>
									<div className='card w-75'>
										<div className='container'>
											<div className='row'>
												<div className='col-sm-8'>
													<div className='card border-0'>
														<div className='card-body'>
															<p className='card-text'>{product.result.description}</p>
															<p className='card-text'>
																<small className='text-muted'>
																	Variant: Refined Polished /Oak
																	<br />
																	Base color: Oak
																	<br />
																	Base material: Lacquered Oak
																	<br />
																	Base type: Wood Base
																	<br />
																	Seat finish: Full Upholstery
																	<br />
																	Seat material: Leather
																	<br />
																	Height: 74,4cm Width: 60cm
																</small>
															</p>
														</div>
													</div>
												</div>
												<div className='col-sm-4'>
													<img src={product.result.imageCover.url} alt={product.result.name} className='mt-5 p-2 border rounded' />
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
							{section === 2 && (
								<div className='d-flex justify-content-center'>
									<div className='card w-75 p-2 '>
										<div className='container'>
											<div className='row'>
												<div className='col-lg-6 col-sm-12'>
													<div className='d-flex border-bottom'>
														<p>Weight</p>
														<small className='text-muted ms-auto'>45KG</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Brand</p>
														<small className='text-muted ms-auto'>Abbaco Noelat</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Categories</p>
														<small className='text-muted ms-auto'>{product.result.category.name}</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Collection</p>
														<small className='text-muted ms-auto'>Summer 2022</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Designer</p>
														<small className='text-muted ms-auto'>Elly Weryt</small>
													</div>
												</div>
												<div className='col-lg-6 col-sm-12'>
													<div className='d-flex border-bottom'>
														<p>Dimenions</p>
														<small className='text-muted ms-auto'>100*150*100cm</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Type</p>
														<small className='text-muted ms-auto'>Cribs</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Base Material</p>
														<small className='text-muted ms-auto'>Wood</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Color</p>
														<small className='text-muted ms-auto'>Brown</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Material</p>
														<small className='text-muted ms-auto'>Metal, Wood</small>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
							{section === 3 && (
								<div className='d-flex justify-content-center'>
									<div className='card w-75 '>
										<div className='container'>
											<div className='row p-5'>
												<div className=' col-12'>
													<p className='ms-2 fw-bold'>REVIEWS</p>
													<div className='card mb-3 border-0 bg-light'>
														<div className='row g-0'>
															<div className='col-md-3'>
																<img src={user} className='img-fluid rounded-start w-75 p-4 ' alt='...' />
															</div>
															<div className='col-md-9'>
																<div className='card-body'>
																	<ul className='d-flex p-0'>
																		<li>
																			<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																		<li>
																			<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																		<li>
																			<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																		<li>
																			<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																		<li>
																			<i className='bi bi-star-half' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																	</ul>
																	{/* ❌ I can't find endpoint for this data  */}
																	<p className='card-text mb-2'>YOUR REVIEW IS AWAITING APPROVAL</p>
																	<small className='text-muted'>good</small>
																</div>
															</div>
														</div>
													</div>
													<Review productID={product.result._id} />
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

const Review = ({productID}) => {
	const navigate = useNavigate();
	const [review, setReview] = useState({
		rate: 0,
		comment: "",
		name: "",
		email: "",
		check: false,
	});
	return (
		<>
			<div className=''>
				<h4>ADD A REVIEW</h4>
				<small className='text-muted'>Your email address will not be published. Required fields are marked *</small>
			</div>
			<div className='mt-3'>
				<small className='fs-6'>YOUR RATING *</small>
				<ul className='d-flex p-0 '>
					<li>
						<i
							onClick={() => setReview({...review, rate: 1})}
							className={`bi  ${review.rate >= 1 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
					<li>
						<i
							onClick={() => setReview({...review, rate: 2})}
							className={`bi  ${review.rate >= 2 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
					<li>
						<i
							onClick={() => setReview({...review, rate: 3})}
							className={`bi  ${review.rate >= 3 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
					<li>
						<i
							onClick={() => setReview({...review, rate: 4})}
							className={`bi  ${review.rate >= 4 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
					<li>
						<i
							onClick={() => setReview({...review, rate: 5})}
							className={`bi  ${review.rate >= 5 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
				</ul>
			</div>
			<div className='form-floating '>
				<textarea
					onChange={(e) => setReview({...review, comment: e.target.value})}
					className='form-control'
					placeholder='Leave a comment here'
					id='floatingTextarea'
				></textarea>
				<label htmlFor='floatingTextarea'>Your review</label>
			</div>
			<br />
			<div className='row'>
				<div className='col-6'>
					<div className='mb-3'>
						<input
							onChange={(e) => setReview({...review, name: e.target.value})}
							type='text'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='Your Name'
						/>
					</div>
				</div>
				<div className='col-6'>
					<div className='mb-3'>
						<input
							onChange={(e) => setReview({...review, email: e.target.value})}
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='name../../example.com'
						/>
					</div>
				</div>
			</div>
			<div className='mb-3 form-check'>
				<input onChange={(e) => setReview({...review, check: e.target.checked})} type='checkbox' className='form-check-input' id='exampleCheck1' />
				<label className='form-check-label' htmlFor='exampleCheck1'>
					Check me out
				</label>
			</div>
			<button
				onClick={async () => {
					if (!localStorage.getItem("token")) {
						return navigate("/login");
					} else {
						try {
							axios.post(
								baseURL + "reviews",
								{
									comment: review.comment,
									product: productID,
									ratings: review.rate,
								},
								{
									headers: {
										token: localStorage.getItem("token"),
									},
								},
							);
						} catch (err) {}
					}
				}}
				className='btn btn-primary'
			>
				Submit
			</button>
		</>
	);
};
