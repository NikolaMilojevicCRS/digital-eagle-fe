import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text
} from '@react-email/components';
import {
  main,
  paragraph,
  container,
  logoStyles,
  btnContainer,
  button
} from './styles';
import * as React from 'react';

const ContactEmail = ({ name, email, message, baseUrl, logo }) => {
  return (
    <Html>
      <Head />
      <Preview>{message.slice(0, 50)}...</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={logo}
            width="165"
            alt="Vista Vidikovac"
            style={logoStyles}
          />
          <Text style={paragraph}>Ime i prezime: {name}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>{message}</Text>
          <Section style={btnContainer}>
            <Button style={button} href={baseUrl}>
              Idi na website
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
