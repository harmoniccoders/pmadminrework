import {
	Box,
	Flex,
	HStack,
	Image,
	Text,
	Link,
	VStack,
	Button,
} from "@chakra-ui/react";
import { PrimaryInput } from "lib/components/Utilities/PrimaryInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginModel } from "types/AppTypes";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AdminService, UserViewStandardResponse } from "../../../Services";
const schema = yup.object().shape({
	email: yup.string().required("Email is required"),
	password: yup.string().required("Password is required"),
});

function Login() {
	const router = useRouter();
	const { addToast } = useToasts();
	const [loading, setLoading] = useState<boolean>(false);
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<LoginModel>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const onSubmit = async (data: LoginModel) => {
		try {
			setLoading(true);
			const result = (await AdminService.authenticate(
				data
			)) as UserViewStandardResponse;
			console.log(data);
			if (result.status) {
				addToast("Login Successful", {
					appearance: "success",
					autoDismiss: true,
				});
				Cookies.set("user", JSON.stringify(result.data));
				Cookies.set("userIn", "true");
				result.data && Cookies.set("token", result.data.token as string);
				window.location.href = "/admin/dashboard";
				return;
			}
			setLoading(false);
			addToast(result.message, { appearance: "error", autoDismiss: true });
			return;
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};
	return (
		<Flex
			bgColor="black"
			w="full"
			h="100vh"
			justify="center"
			alignItems="center"
		>
			<HStack
				bgColor="#f6f7f7"
				h="100vh"
				w="100%"
				// borderRadius="20px"
				overflow="hidden"
				justifyContent="center"
			>
				{/* <Box w="50%" bgColor="grey" h="100%">
					<Image src="/assets/image3.png" w="full" h="full" objectFit="cover" />
				</Box> */}
				<Box
					w="30%"
					bgColor="white"
					p="3rem"
					h="70vh"
					boxShadow="0 2px 6px 6px rgba(0,0,0,0.03)"
					border="1px solid e6e6e6"
				>
					<Box w="100%" mx="auto">
						<Text
							fontSize="1rem"
							fontWeight="medium"
							textAlign="center"
							mt=".5rem"
						>
							Hello!
						</Text>
						<Text
							fontSize="40px"
							fontWeight="bold"
							w={["100%", "100%"]}
							lineHeight="1"
							textAlign="center"
							mb="2rem"
							color="brand.100"
						>
							Login
						</Text>
						{/* <Box display="flex" justifyContent="center" w="full" my="2rem">
							<Image src="/assets/padlock.png" />
						</Box> */}
						<form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
							<VStack w="full" spacing="0">
								<PrimaryInput<LoginModel>
									register={register}
									name="email"
									error={errors.email}
									defaultValue=""
									type="email"
									placeholder="Chigozie"
									label="Username/Email"
								/>
								<PrimaryInput<LoginModel>
									register={register}
									name="password"
									error={errors.password}
									defaultValue=""
									type="password"
									label="Password"
									placeholder="*********"
								/>
								<Button
									variant="solid"
									type="submit"
									isLoading={loading}
									disabled={!isValid}
									w="full"
									p="1.5rem 0"
									borderRadius="0"
									mt="2rem !important"
									// mt={["2rem", "0"]}
								>
									Login
								</Button>
							</VStack>
						</form>
					</Box>
				</Box>
			</HStack>
		</Flex>
	);
}

export default Login;
