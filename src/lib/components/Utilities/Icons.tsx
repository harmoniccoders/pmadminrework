type Props = {
	iconClass?: any;
	style?: any;
};

const Icons = ({ iconClass, style }: Props) => {
	return (
		<>
			<i className={`fal ${iconClass}`} style={style}></i>
			{/* <i className={`fal ${iconClass}`} style={{ color: '#0042ff' }}></i> */}
		</>
	);
};

export default Icons;
