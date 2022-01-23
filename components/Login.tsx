import { ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { UserIcon } from "@heroicons/react/outline";
import { useSendMagicLinkMutation } from "@lib/hooks/user";
import useRandomMacID from "@lib/hooks/useRandomMacID";
import { useColor, Colors } from "@styles/colors";
import { FormEvent, useState } from "react";

export interface LoginModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const EMAIL_SUFFIX = "@mcmaster.ca";

export default function Login({ isOpen, onClose }: LoginModalProps) {
  const [macID, setMacID] = useState("");
  const macIDPlaceholder = useRandomMacID();
  const mutation = useSendMagicLinkMutation();

  const showUserIcon = useBreakpointValue({ base: false, sm: true });

  const handleSubmit = (event: FormEvent) => {
    if (macID.length > 0) {
      mutation.mutate(macID);
    }
    event.preventDefault();
  };

  const secondaryTextColor = useColor(Colors.secondaryText);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent pt={5} pb={4}>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <HStack align="flex-start" spacing={5}>
              {showUserIcon && (
                <Icon
                  as={UserIcon}
                  width={12}
                  padding={3}
                  height={12}
                  borderRadius="full"
                  color="green.600"
                  backgroundColor="green.100"
                />
              )}

              <VStack align="flex-start" spacing={3}>
                <Heading as="h1" size="md" fontWeight="medium">
                  Login
                </Heading>
                <Text color={secondaryTextColor}>
                  {(mutation.isIdle || mutation.isLoading) &&
                    `To create a post you must sign in. Please enter your MacID below.`}
                  {mutation.isError &&
                    `Something went wrong, please try again.`}
                  {mutation.isSuccess &&
                    `A login link has been sent to ${
                      macID + EMAIL_SUFFIX
                    }! Please check your email.`}
                </Text>

                {(mutation.isIdle || mutation.isLoading) && (
                  <InputGroup>
                    <Input
                      variant="outline"
                      type="text"
                      required
                      autoFocus
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="username"
                      spellCheck="false"
                      name="macID"
                      aria-label="macID"
                      placeholder={macIDPlaceholder}
                      value={macID}
                      onChange={(e) => setMacID(e.target.value.trim())}
                    />
                    <InputRightAddon>{EMAIL_SUFFIX}</InputRightAddon>
                  </InputGroup>
                )}
              </VStack>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            {(mutation.isIdle || mutation.isLoading) && (
              <Button
                type="submit"
                colorScheme="teal"
                disabled={macID.length === 0}
                isLoading={mutation.isLoading}
                rightIcon={<ArrowForwardIcon />}
              >
                Login
              </Button>
            )}
            {mutation.isError && (
              <Button
                colorScheme="teal"
                onClick={() => mutation.reset()}
                rightIcon={<RepeatIcon />}
              >
                Try again
              </Button>
            )}
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
