import {
  Field,
  Fieldset,
  Input,
  Box,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { signIn } from "../utils/supabase";

export default function Auth() {
  const [mailInput, setMailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const mailError = mailInput === "";
  const passwordError = passwordInput === "";

  const handleSubmit = () => {
    signIn(mailInput, passwordInput);
  };

  return (
    <Box position="relative" h="400px" w="100%">
      <Center w="350px" h="100%">
        <Box w="100%">
          <Fieldset.Root>
            <Field.Root required>
              <Field.Label as="label" fontWeight="bold">
                Din e-post
              </Field.Label>
              <Input
                type="email"
                value={mailInput}
                onChange={(e) => setMailInput(e.target.value)}
              />
              {!mailError ? (
                <Text fontSize="sm" color="gray.500" marginBottom="30px">
                  Legg inn din e-postadresse.
                </Text>
              ) : (
                <Text fontSize="sm" color="red.500" marginBottom="30px">
                  Email is required.
                </Text>
              )}
            </Field.Root>
            <Field.Root required>
              <Text as="label" fontWeight="bold">
                Passord
              </Text>
              <Input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              {!passwordError ? (
                <Text fontSize="sm" color="gray.500" marginBottom="30px">
                  Oppgi ditt passord.
                </Text>
              ) : (
                <Text fontSize="sm" color="red.500" marginBottom="30px">
                  Passord må oppgis.
                </Text>
              )}
            </Field.Root>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={handleSubmit}
              marginTop="20px"
            >
              Logg inn
            </Button>
          </Fieldset.Root>
        </Box>
      </Center>
    </Box>
  );
}
