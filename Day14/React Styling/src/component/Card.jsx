import nerdImage from '../assets/Image/illustration.png';
import Button from './Button';
import { ButtonContainer, CardContainer, ContentContainer } from './styles/Container.styles';
import { StyledTitle } from './styles/Custom.styles';

import {
 H1, Image, P, Tag,
} from './styles/Elements.styles';

export default function Card() {
  const handelClick = () => {
    console.log('lll');
  };
    return (
      <CardContainer>
        <ContentContainer>
          <Tag color="#4361ee">EXCLUSIVE</Tag>

          <H1>
            <StyledTitle text="React Styles Components" color="#fff" />
          </H1>
          <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio saepe sed aut mollitia quisquam? Corporis, et nulla officiis ab beatae impedit ipsam autem perspiciatis laborum repellat, asperiores itaque? Sed, fugiat.</P>
          <ButtonContainer>
            <Button link="https://www.youtube.com/channel/UCe0yO5SmudTIWvNbTLFF0bA" text="Watch now" />
            <Button link="https://github.com/FariaAfrose/ReactPractice" text="Github repo" />
          </ButtonContainer>

        </ContentContainer>
        <Image src={nerdImage} alt="Neard" width="300px" />

      </CardContainer>

    );
}
