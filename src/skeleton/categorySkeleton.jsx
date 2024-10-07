import ContentLoader from "react-content-loader";

const CategorySkeleton = (props) => (
	<ContentLoader speed={2} width={200} height={200} viewBox='0 0 200 200' backgroundColor='#dbdbdb' foregroundColor='#ffffff' {...props}>
		<rect x='40' y='107' rx='3' ry='3' width='75' height='9' />
		<circle cx='74' cy='56' r='39' />
	</ContentLoader>
);

export default CategorySkeleton;
