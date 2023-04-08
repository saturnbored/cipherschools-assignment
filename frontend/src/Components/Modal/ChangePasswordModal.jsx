import { useState } from "react";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Heading,
  Input,
} from "@chakra-ui/react";

import PasswordInput from "../PasswordInput";

export default function ChangePasswordModal({ isEditing, setIsEditing }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    onClose();
    setIsEditing(false);
  };

  const handleSave = () => {
    onClose();
    setIsEditing(false);
    // TODO: Save the changes
  };

  const [interests, setInterests] = useState([]);

  const handleSelect = (e) => {
    setInterests([...interests, interest]);
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={true}
        isOpen={isEditing}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Create your account</ModalHeader> */}
          <ModalBody>
            <Box display="flex" flexDir="column" rowGap="4" pt="4">
              <Box>
                <Heading as="h5" size="sm" pb="2">
                  Current Password
                </Heading>
                <PasswordInput placeholder={`Enter Current Password`} />
              </Box>
              <Box>
                <Heading as="h5" size="sm" pb="2">
                  New Password
                </Heading>
                <PasswordInput placeholder={`Enter New Password`} />
              </Box>
              <Box>
                <Heading as="h5" size="sm" pb="2">
                  Confirm Password
                </Heading>
                <PasswordInput placeholder={`Confirm New Password`} />
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleClose}
              mr={3}
              bgColor="black"
              textColor="white"
              size="sm"
              _hover={{ bgColor: "gray.600" }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="orange"
              onClick={handleSave}
              px="6"
              bgColor="orange"
              size="sm"
              _hover={{ bgColor: "orange.300" }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
