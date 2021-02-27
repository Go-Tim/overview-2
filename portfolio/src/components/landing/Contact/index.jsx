import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h2>Want to get in touch?</h2>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Jason and I’m a Full-Stack engineer!" />
    </Thumbnail>
  </Wrapper>
);
