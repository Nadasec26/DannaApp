import ContentLoader from "react-content-loader";

const ProductSkeleton = (props) => (
	<ContentLoader speed={2} width={400} height={400} viewBox='0 0 400 400' backgroundColor='#d6d6d6' foregroundColor='#ffffff' {...props}>
		<rect x='8' y='259' rx='2' ry='2' width='226' height='18' />
		<circle cx='122' cy='119' r='114' />
		<rect x='147' y='288' rx='2' ry='2' width='60' height='10' />
		<rect x='64' y='312' rx='8' ry='8' width='100' height='25' />
	</ContentLoader>
);

export default ProductSkeleton;
