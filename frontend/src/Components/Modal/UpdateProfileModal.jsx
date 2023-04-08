import {
  Box,
  Button,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

const UpdateProfileModal = ({ isOpen, onOpen, onClose, EditProfileIcon }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" justifyContent={"space-around"}>
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
              >
                {/* <Image /> */}
                <CgProfile size={"150px"} />
                <Box
                  background={"black"}
                  borderRadius={"100%"}
                  p="5px"
                  position={"relative"}
                  left="50px"
                  bottom="15px"
                  width="fit-content"
                  _hover={{ cursor: "pointer" }}
                >
                  <Icon as={EditProfileIcon} />
                </Box>
              </Box>
              <Box>
                <VStack alignItems={"left"} spacing={"20px"}>
                  <Box>
                    <FormLabel fontWeight={"semibold"}>First Name</FormLabel>
                    <Input type="text" width="25vw" bgColor={"#f2f5fa"} />
                  </Box>
                  <Box>
                    <FormLabel fontWeight={"semibold"}>Last Name</FormLabel>
                    <Input type="text" bgColor={"#f2f5fa"} />
                  </Box>
                  <Box>
                    <FormLabel fontWeight={"semibold"}>Email Address</FormLabel>
                    <Input type="email" bgColor={"#f2f5fa"} />
                  </Box>
                  <Box>
                    <FormLabel fontWeight={"semibold"}>Mobile Number</FormLabel>
                    <Input type="number" bgColor={"#f2f5fa"} />
                  </Box>
                </VStack>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              background="black"
              mr={3}
              onClick={onClose}
              textColor={"white"}
              _hover={{ background: "gray.700" }}
            >
              Cancel
            </Button>
            <Button colorScheme="orange">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProfileModal;
