import type { DeepPartial, Theme } from "@chakra-ui/react";

const Input: DeepPartial<Theme["components"]["Input"]> = {
	variants: {
		outline: {
			field: {
				borderRadius: "0",
				background: "white",
				boxSizing: "border-box",
				height: "3rem",
				borderColor: "#DCE1E7",
				border: "1px solid",
				// boxShadow: "0px 0px 9px rgba(0, 127, 130, 0.37)",
				_focus: {
					borderColor: "brand.200",
					border: "1px solid",
				},
				_placeholder: {
					fontSize: ".8rem",
				},
			},
		},
		filled: {
			field: {
				// borderRadius: "5px",
				background: "white",
				boxSizing: "border-box",
				height: "3rem",
				border: "1px solid black",
				color: "brand.100",
				_focus: {
					borderColor: "brand.200",
					border: "1px solid",
					background: "rgba(0, 127, 130, 0.2)",
				},
				_placeholder: {
					fontSize: "1rem",
					color: "brand.500",
				},
			},
		},
	},
};

export default Input;
