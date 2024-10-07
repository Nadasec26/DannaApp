import {useState} from "react";
import post from "../../images/Name.png";
import rect from "../../images/photo_4_2024-02-13_23-29-14.jpg";
import comme from "../../images/Ellipse 36.png";
import doc from "../../images/photo_2024-03-16_01-05-58.jpg";
import {Link} from "react-router-dom";

const Questions = () => {
	// const [show,setShow]=useState(false);
	const [like, setLike] = useState(21),
		[isLike, setIsLike] = useState(false);

	const onClickHandler = () => {
		setComments((comments) => [...comments, comment]);
	};
	const onChangeHandler = (e) => {
		setComment(e.target.value);
	};
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]),
		onLikeButton = () => {
			setLike(like + (isLike ? -1 : 1));
			setIsLike(!isLike);
		};
	return (
		<div className='questions' style={{background: "rgba(245, 250, 255, 1)"}}>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-8'>
						<div className='posts'>
							{/* <div className="bg-white p-3 mt-3 rounded border-0">
                    <div className="d-flex" type='button'>
                        <div className="p-1">
                            <img src={post} alt="avatar" className='rounded-circle me-2' />
                        </div>
                        <input type='text' className='form-control rounded-pill bg-gray w-100' placeholder='what is on your mind ...?'  data-bs-toggle="modal" data-bs-target="#createModal" />
                    </div>
                    <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModalLabel" aria-hidden="true" data-bs-backdrop="false">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header align-items-center">
                            <h5 className="text-dark text-center w-100 m-0" id="exampleModalLabel">Create Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="my-1 p-1">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <div className="p-2">
                                            <img src={post} alt="avatar" className='rounded-circle' />
                                        </div>
                                        <div>
                                            <p className="m-0 fw-bold">nada</p>
                                        </div>
                                    </div>
                                    <div>
                                        <textarea id="" cols="30" rows="5" className='form-control '></textarea>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <i className="bi bi-emoji-laughing text-muted" type="button"></i>
                                    </div>
                                    <div className="d-flex justify-content-between border-0 border-light rounded p-3 mt-3">
                                        <p className="m-0">Add to your post</p>
                                        <div className='d-flex gap-2'>
                                        <i className="bi bi-aspect-ratio-fill text-success"></i>
                                        <i className="bi bi-emoji-laughing text-warning"></i>
                                        <i className="bi bi-emoji-laughing text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success w-100">Post</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row mt-2">
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-center rounded dropdown-item gap-2" type="button">
                            <i className="bi bi-aspect-ratio-fill text-success fs-4"></i>
                            <p className="m-0 text-muted fs-5">Media</p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="d-flex align-items-center justify-content-center rounded dropdown-item gap-2" type="button">
                            <i className="bi bi-threads text-primary fs-4"></i>
                            <p className="m-0 text-muted fs-5">Tag</p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="d-flex align-items-center justify-content-center rounded dropdown-item gap-2" type="button">
                            <i className="bi bi-emoji-laughing text-warning fs-4"></i>
                            <p className="m-0 text-muted fs-5">Feeling</p>
                        </div>
                    </div>
                    </div>
                </div> */}
							<div className='bg-white p-4 rounded shaddow mt-3'>
								<div className='d-flex justify-content-between'>
									<div className='d-flex'>
										<img src={post} alt='avatar' className='rounded-circle me-2' />
										<div>
											<p className='m-0 fw-bold'>nada</p>
											<span className='text-muted fs-6'>Dec17,2023</span>
										</div>
									</div>
								</div>
								<div className='mt-3'>
									<div>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita omnis saepe quod corporis alias velit dolorum
											voluptate aut tenetur! Tempora facere amet ratione eaque numquam! Aspernatur nisi modi impedit!
										</p>
										<img src={rect} alt='post image' className='img-fluid w-100 ' />
									</div>
								</div>
								<div className='card mt-3 border-0' style={{background: "rgba(186, 217, 250, 1)"}}>
									<div className='container'>
										<div className='d-flex'>
											<div className='bd-highlight'>
												<ul className='p-0'>
													<li className='d-flex gap-3 fs-5'>
														<i className='bi bi-chat-dots-fill text-white'></i>
														{like}
														<span>comments</span>
													</li>
												</ul>
											</div>
											<div className='ms-auto p-2 bd-highlight'>
												<ul>
													<li className='d-flex gap-2 '>
														<i className='bi bi-arrow-up-short rounded-circle text-white bg-success'></i>
														<span className='text-success rounded-circle bg-white'>{like}</span>
														<i className='bi bi-arrow-down-short rounded-circle text-white bg-success'></i>
													</li>
												</ul>
											</div>
										</div>
										<div className='main-container'>
											{comments.map((text) => (
												<div className='bg-white rounded p-2 mt-2'>
													<div className='d-flex justify-content-between'>
														<div className='d-flex'>
															<img src={comme} alt='avatar' className='rounded-circle me-2' />
															<div>
																<p className='m-0 fw-bold'>DR.Ahmed</p>
																<span className='text-muted'>Dec17,2023</span>
															</div>
														</div>
													</div>
													<div className='mt-3'>
														<div>
															<div className='comment-container p-3 rounded' style={{background: "#EEE"}}>
																{text}
															</div>
														</div>
													</div>
												</div>
											))}
											<div className='comment-flexbox'>
												<div className='card mt-2'>
													<div className='row p-2 rounded'>
														<div className='col-md-auto'>
															<div className='d-flex m-1'>
																<img src={comme} alt='avatar' className='rounded-circle me-2' />
																<p className='m-0 fw-bold'>DR.Ahmed</p>
															</div>
														</div>
														<div className='col'>
															<input
																type='text'
																className='form-control rounded-pill bg-gray w-100'
																value={comment}
																placeholder='what your comment'
																onChange={onChangeHandler}
															/>
														</div>
														<div className='col-auto bg-success text-white rounded-circle me-2 mt-1' style={{width: "4%", height: "30px"}}>
															<div
																onClick={onClickHandler}
																style={{transform: "rotate(45deg)", cursor: "pointer", fontSize: "15px"}}
																className='d-flex justify-content-center mt-1'
															>
																<i className='bi bi-send-fill' onClick={onLikeButton}></i>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-sm-4'>
						<div className='card bg-white border-0 p-3 mt-3'>
							<div>
								<p className='m-0 fw-bold'>Posts Rate</p>
								<span className='text-muted '>Rate Of The Year</span>
							</div>
							<div className='rate'>
								<div className='d-flex flex-column bd-highlight mb-3'>
									<div className='p-2 mt-4'>
										<div className='card mb-3 border-0'>
											<div className='row g-0'>
												<div className='col-md-4 p-4 text-center' style={{background: "rgba(202, 227, 253, 1)"}}>
													<i className='bi bi-credit-card-2-front-fill fs-1 text-primary'></i>
												</div>
												<div className='col-md-8'>
													<div className='card-body'>
														<p className='m-0 fw-bold'>Posts Rate</p>
														<span className='text-muted '>+1000</span>
														<div className='progress mt-2'>
															<div className='progress-bar w-25' role='progressbar' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>
																25%
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='bd-highlight p-2'>
										<div className='card mb-3 border-0'>
											<div className='row g-0'>
												<div className='col-md-4 p-4 text-center' style={{background: "rgba(253, 236, 206, 1)"}}>
													<i className='bi bi-chat-fill fs-1' style={{color: "rgba(248, 159, 0, 1)"}}></i>
												</div>
												<div className='col-md-8'>
													<div className='card-body'>
														<p className='m-0 fw-bold'>Posts Rate</p>
														<span className='text-muted'>+500</span>
														<div className='progress mt-2'>
															<div
																className='progress-bar bg-warning w-50'
																role='progressbar'
																aria-valuenow='25'
																aria-valuemin='0'
																aria-valuemax='100'
															>
																50%
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='p-2 bd-highlight'>
										<div className='card mb-3 border-0'>
											<div className='row g-0'>
												<div className='col-md-4 p-4 text-center' style={{background: "rgba(213, 242, 224, 1)"}}>
													<i className='bi bi-person-plus-fill text-success fs-1'></i>
												</div>
												<div className='col-md-8'>
													<div className='card-body'>
														<p className='m-0 fw-bold'>Posts Rate</p>
														<span className='text-muted'>+2000</span>
														<div className='progress mt-2'>
															<div
																className='progress-bar bg-success w-75'
																role='progressbar'
																aria-valuenow='25'
																aria-valuemin='0'
																aria-valuemax='100'
															>
																75%
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
						<div className='card mt-4 border-0'>
							<img src={doc} className='card-img-top' alt='...' />
							<div className='card-body text-center' style={{background: "#01D2BD"}}>
								<p className='card-text text-white fw-bold fs-5'>Would you like to get</p>
								<h5 className='card-title text-white fw-bold fs-3'>Medical consultation with a doctor</h5>
								<Link to={`/detailsdoctors`} className='btn bg-white w-100 fs-4 fw-bold' style={{color: "#01D2BD"}}>
									Talk to a doctor
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Questions;
