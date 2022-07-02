import { FormLabel, Select, Text } from "@chakra-ui/react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Icons from "./Icons";

interface FormInputProps<TFormValues extends Record<string, unknown>> {
	name: Path<TFormValues>;
	placeholder: string;
	register: UseFormRegister<TFormValues>;
	required?: boolean;
	validate?: any;
	error: FieldError | undefined;
	label?: string;
	fontSize?: string;
	options: any;
	defaultValue?: any;
}
export const PrimarySelect = <TFormValues extends Record<string, any>>({
	name,
	placeholder,
	register,
	required = false,
	validate = {},
	error,
	label = "",
	fontSize = "1rem",
	options,
	defaultValue,
}: FormInputProps<TFormValues>) => {
	return (
		<>
			<FormLabel
				htmlFor={label}
				textTransform="capitalize"
				pos="relative"
				top={5}
				left={4}
				width="fit-content"
				zIndex={3}
				bg="brand.200"
				fontSize={fontSize}
			>
				{label}
			</FormLabel>
			<Select
				{...register(name, { required, ...validate })}
				w="full"
				border="1px solid grey"
				borderRadius="0"
				height="3rem"
				fontSize=".9rem"
				placeholder={placeholder}
				defaultValue={defaultValue}
				icon={<Icons iconClass="fa-angle-right" />}
			>
				<option disabled>{placeholder}</option>
				{options}
			</Select>
			<Text fontSize=".7rem" color="red">
				{(error?.type === "required" && `${label} is required`) ||
					error?.message}
			</Text>
		</>
	);
};
