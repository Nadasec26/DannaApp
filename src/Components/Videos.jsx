import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {baseURL} from "../utils/baseURL";
import ReactPlayer from "react-player";
import {VideosSkeleton, MainVideoSkeleton} from "../skeleton/VideosSkeleton";

const Videos = () => {
	const {id} = useParams();
	const [videos, setVideos] = useState({
		videos: [],
		error: "",
		loading: true,
	});

	const [video, setVideo] = useState(null);

	const fetchVideos = async () => {
		try {
			const response = await axios.get(baseURL + "videos");
			const fetchedVideos = response.data.result;

			setVideos({
				videos: fetchedVideos,
				loading: false,
				error: null,
			});
			let selectedVideo;
			if (id && fetchedVideos.find((video) => video._id === id)) {
				selectedVideo = fetchedVideos.find((video) => video._id === id);
				setVideos((prevState) => ({
					...prevState,
					videos: prevState.videos.filter((vid) => vid._id !== id),
				}));
			} else {
				selectedVideo = fetchedVideos[0];
				setVideos((prevState) => ({
					...prevState,
					videos: prevState.videos.slice(1),
				}));
			}
			setVideo(selectedVideo);
		} catch (err) {
			setVideos({
				videos: [],
				loading: false,
				error: err,
			});
		}
	};

	useEffect(() => {
		fetchVideos();
	}, [id]);

	return (
		<div className='videos'>
			<div className='container'>
				<h1
					className='text-center'
					style={{
						color: "rgba(50, 170, 144, 1)",
					}}
				>
					Watch Our Children Wellbeing
				</h1>
				<br />
				<div className='card border-0'>
					<div style={{marginLeft: '22%'}}>
					{!video ? <MainVideoSkeleton /> : <ReactPlayer onStart={() => {}} url={video?.video} />}
					{/* <img src={video?.videoCover?.url} className='card-img' alt='...' /> */}
					{/* <di
						className='card-img-overlay p-5'
						style={{
							color: "rgba(62, 99, 176, 1)",
						}}
					>
						<h5 className='card-title fs-1 fw-bold'>Prenatal Care</h5>
						<p className='card-text fw-bold'>Knowing that you are doing all you can to ...</p>
						<div
							className='d-flex rounded-bottom ps-2  gap-2 text-white position-absolute bottom-0 start-0'
							style={{
								backgroundColor: "rgba(50, 170, 144, 1)",
							}}
						>
							<p className='fw-bold mt-1'>Watch Video</p>
							<i className='bi bi-play-circle-fill fs-4 pe-2 ' style={{}}></i>
						</div>
					</di> */}
					</div>
				</div>
				<div className='row row-cols-1 row-cols-md-3 g-4 mt-4'>
					{videos?.error || videos.loading ? (
						<>
							<>
								<VideosSkeleton />
								<VideosSkeleton />
								<VideosSkeleton />
							</>
							<>
								<VideosSkeleton />
								<VideosSkeleton />
								<VideosSkeleton />
							</>
						</>
					) : (
						videos?.videos?.map((video) => (
							<div key={video?._id} className='col'>
								<Link to={`/videos/${video?._id}`}>
									<div className='card border-0 shadow'>
										<img src={video?.videoCover?.url} className='card-img-top' alt='...' />
										<div
											className='rounded-bottom rounded-top ps-2 text-white position-absolute top-0 end-0'
											style={{
												backgroundColor: "rgba(50, 170, 144, 1)",
											}}
										>
											<i className='bi bi-play-circle-fill fs-4 pe-2 ' style={{}}></i>
										</div>
										<div className='card-body'>
											<h5 className='card-title'>{video?.title}</h5>
											<p className='card-text'>{video?.description}</p>
										</div>
									</div>
								</Link>
							</div>
						))
					)}
				</div>
				<br />
			</div>
		</div>
	);
};
export default Videos;
