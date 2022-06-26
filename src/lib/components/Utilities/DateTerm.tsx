import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./Countdowns";

const defaultRemainingTime = {
	seconds: "00",
	minutes: "00",
	hours: "00",
	days: "00",
};

interface props {
	countdownTimestampMs: any;
	date: any;
}
const CountdownTimer = ({ countdownTimestampMs, date }: props) => {
	const [remainingTime, setRemainingTime] = useState<any>(defaultRemainingTime);

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs]);

	function updateRemainingTime(countdown: any) {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	}

	return (
		<>
			<HStack spacing={1} fontSize=".9rem" fontWeight="500">
				<Flex>
					<Text>{remainingTime.days}</Text>
					<Text>D</Text>
				</Flex>
				<Flex>
					<Text>{remainingTime.hours}</Text>
					<Text>H</Text>
				</Flex>
				<Text>({date})</Text>
			</HStack>
			{/* <span className="two-numbers">{remainingTime.minutes}</span>
			<span>minutes</span>
			<span className="two-numbers">{remainingTime.seconds}</span>
			<span>seconds</span> */}
		</>
	);
};

export default CountdownTimer;
