import {useState} from "react";
import Celendar from "react-calendar";

const Celendar1 = () => {
	const [value, onchange] = useState(new Date());
	return (
		<div>
			<Celendar onChange={onchange} value={value} />
			{value.toString()}
		</div>
	);
};

export default Celendar1;
