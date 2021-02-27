import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Jason and I’m a Full-Stack engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Who am I?</h1>
          <p>
            I'm a full-stack engineer dedicated to enhancing the lives of others by creating efficient and effective
            solutions. My intrinsic motivation to help people has become the driving force for the applications I build.
          </p>
          <p>
            I get excited about optimizations that improve performance, client-centered product design, and explaining
            trends derived from real data through concrete, visual representations.
          </p>
          <p>
            In my spare time, you can find me dancing to k-pop, binge-watching shows on Netflix, and simply sharing
            fellowship with the ones I love.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
