import ContentLoader from "react-content-loader";

const CartSkeleton = (props) => (
	<ContentLoader speed={2} width={800} height={600} viewBox='0 0 800 600' backgroundColor='#dedede' foregroundColor='#ecebeb' {...props}>
		<rect x='150' y='42' rx='3' ry='3' width='121' height='14' />
		<rect x='150' y='72' rx='3' ry='3' width='121' height='14' />
		<rect x='8' y='404' rx='3' ry='3' width='121' height='14' />
		<rect x='0' y='452' rx='3' ry='3' width='392' height='8' />
		<rect x='0' y='437' rx='3' ry='3' width='392' height='8' />
		<rect x='48' y='479' rx='21' ry='21' width='261' height='41' />
		<rect x='360' y='51' rx='13' ry='13' width='142' height='29' />
		<rect x='0' y='142' rx='100' ry='100' width='96' height='96' />
		<rect x='150' y='169' rx='3' ry='3' width='121' height='14' />
		<rect x='150' y='199' rx='3' ry='3' width='121' height='14' />
		<rect x='362' y='178' rx='13' ry='13' width='142' height='29' />
		<rect x='0' y='12' rx='100' ry='100' width='96' height='96' />
	</ContentLoader>
);

export default CartSkeleton;
