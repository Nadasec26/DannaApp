import ContentLoader from "react-content-loader";

const OrderSkeleton = (props) => (
	<ContentLoader speed={2} width={500} height={300} viewBox='0 0 500 300' backgroundColor='#dbdbdb' foregroundColor='#ecebeb' {...props}>
		<rect x='7' y='5' rx='3' ry='3' width='139' height='8' />
		<rect x='7' y='17' rx='3' ry='3' width='139' height='7' />
		<rect x='400' y='11' rx='3' ry='3' width='85' height='16' />
		<rect x='27' y='250' rx='3' ry='3' width='451' height='9' />
		<rect x='27' y='237' rx='3' ry='3' width='451' height='9' />
		<rect x='7' y='54' rx='3' ry='3' width='139' height='8' />
		<rect x='7' y='65' rx='3' ry='3' width='139' height='7' />
		<rect x='400' y='59' rx='3' ry='3' width='85' height='16' />
		<rect x='7' y='107' rx='3' ry='3' width='139' height='8' />
		<rect x='7' y='118' rx='3' ry='3' width='139' height='7' />
		<rect x='400' y='112' rx='3' ry='3' width='85' height='16' />
		<rect x='7' y='155' rx='3' ry='3' width='139' height='8' />
		<rect x='7' y='167' rx='3' ry='3' width='139' height='7' />
		<rect x='400' y='161' rx='3' ry='3' width='85' height='16' />
	</ContentLoader>
);

export default OrderSkeleton;
