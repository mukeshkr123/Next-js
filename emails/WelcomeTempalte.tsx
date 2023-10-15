import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTempalte = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome abroad! </Preview>
      <Body>
        <Container>
          <Text> Hello {name}</Text>
          <Link href="https://www.google.com">www.google.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTempalte;
