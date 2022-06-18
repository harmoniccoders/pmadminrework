import { VStack } from "@chakra-ui/react";
import SinglePermission from "lib/components/Utilities/SinglePermission";

function Permission() {
	return (
		<VStack mt="1rem" w="50%" spacing={1}>
			<SinglePermission action="View analytics" />
			<SinglePermission action="View user details" />
			<SinglePermission action="View loans" />
			<SinglePermission action="View admin users" />
			<SinglePermission action="View transactions" />
			<SinglePermission action="View services" />
			<SinglePermission action="Modify analytics" />
			<SinglePermission action="Modify user details" />
			<SinglePermission action="Modify loans" />
			<SinglePermission action="Modify transaction" />
			<SinglePermission action="Modify services" />
			<SinglePermission action="Modify backend admin" />
			<SinglePermission action="View savings" />
			<SinglePermission action="Modify savings" />
			<SinglePermission action="View investments" />
			<SinglePermission action="Modify investments" />
		</VStack>
	);
}

export default Permission;
