import { Box, VStack } from "@chakra-ui/react";
import CardAd from "lib/components/Utils/CardAd";
import DownloadApp from "lib/components/Utils/DownloadApp";
import MainHero from "lib/components/Utils/MainHero";
import RightTextHero from "lib/components/Utils/RightTextHero";
// @ts-ignore
import Fade from "react-reveal/Fade";

function Home() {
	return (
		<>
			<VStack bgColor="#f6f6f6" spacing={10}>
				<MainHero
					main={"Save"}
					submain={"Consistently"}
					shortinfo={
						"Lorem ipsum dolor sit amet quid quad plantitur solo solo sedit nemo judex in causa sua mens rea res loqiutor fiat justitia ruat coelum"
					}
					height={["18rem", "24rem"]}
					img="/assets/image1.png"
				/>
				<RightTextHero
					main="Get a Loan"
					submain={"with affordable interest rates"}
					img="/assets/image2.png"
					shortinfo={
						"Lorem ipsum dolor sit amet quid quad plantitur solo solo sedit nemo judex in causa sua mens rea res loqiutor fiat justitia ruat coelum"
					}
				/>
				<CardAd />
				<MainHero
					main={"Invest"}
					submain={"with 103% money-back guarantee"}
					shortinfo={
						"You’ll never find a safer platform for real estate investments. Take advantage of our money-back guarantee and invest with your “eyes closed”"
					}
					height={["23rem", "30rem"]}
					img="/assets/image3.png"
				/>
				<RightTextHero
					main="Send Money"
					submain={"effortlessly with auto-payments"}
					img="/assets/image4.png"
					shortinfo={
						"Lorem ipsum dolor sit amet quid quad plantitur solo solo sedit nemo judex in causa sua mens rea res loqiutor fiat justitia ruat coelum"
					}
				/>
				<DownloadApp />
			</VStack>
		</>
	);
}

export default Home;
