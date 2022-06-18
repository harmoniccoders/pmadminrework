import type { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
	baseStyle: {
		borderRadius: "5px",
	},
	variants: {
		outline: {
			backgroundColor: "transparent",
			border: "1px solid #E3BC6A",
			color: "#E3BC6A",
			width: "11rem",
			height: "3.12rem",
			_hover: {
				backgroundColor: "brand.100",
				color: "white",
				transition: "all .5s ease",
			},
			_focus: {
				boxShadow: "0",
			},
		},
		solid: {
			backgroundColor: "brand.100",
			color: "white",
			width: "18rem",
			height: "2.4rem",
			fontSize: "1rem",
			fontWeight: "bold",
			_hover: {
				backgroundColor: "brand.200",
				transition: "all .5s ease",
				color: "white",
			},
			_focus: {
				boxShadow: "0",
			},
		},
	},
};

export default Button;
