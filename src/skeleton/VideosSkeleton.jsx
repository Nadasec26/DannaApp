import ContentLoader from "react-content-loader";
export const VideosSkeleton = (props) => {
	return (
		<ContentLoader speed={2} width={410} height={350} viewBox='0 0 410 350' backgroundColor='#e3e3e3' foregroundColor='#ecebeb' {...props}>
			<rect x='0' y='0' rx='26' ry='26' width='392' height='266' />
			<rect x='19' y='281' rx='0' ry='0' width='366' height='11' />
			<rect x='19' y='298' rx='0' ry='0' width='366' height='11' />
			<rect x='19' y='320' rx='0' ry='0' width='366' height='11' />
			<rect x='19' y='338' rx='0' ry='0' width='366' height='11' />
		</ContentLoader>
	);
};
export const MainVideoSkeleton = (props) => (
	<ContentLoader speed={2} width={600} height={350} viewBox='0 0 600 350' backgroundColor='#e3e3e3' foregroundColor='#ecebeb' {...props}>
		<rect x='0' y='0' rx='26' ry='26' width='600' height='266' />
	</ContentLoader>
);
