import ContentLoader from "react-content-loader";

export const ImageCoverSkeleton = (props) => (
	<ContentLoader speed={2} width={400} height={400} viewBox='0 0 400 400' backgroundColor='#dedede' foregroundColor='#ffffff' {...props}>
		<circle cx='197' cy='194' r='189' />
	</ContentLoader>
);
export const SideImagesSkeleton = (props) => (
	<ContentLoader speed={2} width={200} height={200} viewBox='0 0 200 200' backgroundColor='#dedede' foregroundColor='#ffffff' {...props}>
		<circle cx='65' cy='62' r='57' />
	</ContentLoader>
);
export const TitleSkeleton = (props) => (
	<ContentLoader speed={2} width={500} height={400} viewBox='0 0 500 400' backgroundColor='#dbdbdb' foregroundColor='#ecebeb' {...props}>
		<rect x='0' y='6' rx='3' ry='3' width='403' height='26' />
		<rect x='0' y='56' rx='3' ry='3' width='121' height='14' />
		<rect x='157' y='56' rx='3' ry='3' width='121' height='14' />
		<rect x='0' y='88' rx='3' ry='3' width='121' height='14' />
		<rect x='0' y='120' rx='3' ry='3' width='392' height='8' />
		<rect x='0' y='131' rx='3' ry='3' width='392' height='8' />
		<rect x='0' y='142' rx='3' ry='3' width='392' height='8' />
		<rect x='18' y='186' rx='13' ry='13' width='142' height='29' />
		<rect x='173' y='187' rx='13' ry='13' width='142' height='29' />
	</ContentLoader>
);
export const DescriptionSkeleton = (props) => (
	<ContentLoader speed={2} width={600} height={400} viewBox='0 0 600 400' backgroundColor='#dbdbdb' foregroundColor='#ecebeb' {...props}>
		<rect x='361' y='193' rx='100' ry='100' width='150' height='150' />
		<rect x='29' y='158' rx='3' ry='3' width='121' height='14' />
		<rect x='30' y='191' rx='3' ry='3' width='121' height='14' />
		<rect x='28' y='223' rx='3' ry='3' width='121' height='14' />
		<rect x='26' y='75' rx='3' ry='3' width='392' height='8' />
		<rect x='26' y='86' rx='3' ry='3' width='392' height='8' />
		<rect x='26' y='97' rx='3' ry='3' width='392' height='8' />
		<rect x='20' y='15' rx='13' ry='13' width='142' height='29' />
		<rect x='196' y='15' rx='13' ry='13' width='142' height='29' />
		<rect x='388' y='14' rx='13' ry='13' width='142' height='29' />
	</ContentLoader>
);
