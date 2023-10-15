import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTempalte = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome abroad! </Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl"> Hello {name}</Text>
            <Link href="https://www.google.com">www.google.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body = {
  background: "#fff",
};

const heading = {
  fontSize: "32px",
};

export default WelcomeTempalte;
