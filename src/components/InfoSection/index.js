import React from "react";
import { Button, SignUpBtn } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  signup,
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const SmoothButton = (
    <Button
      to="signup"
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-80}
      primary={primary ? 1 : 0}
      dark={dark ? 1 : 0}
      dark2={dark2 ? 1 : 0}
    >
      {buttonLabel}
    </Button>
  );
  const SignupButton = (
    <SignUpBtn
      to={{
        pathname:
          "https://austincc.campuslabs.com/engage/organization/acc_csso",
      }}
      target="_blank"
      primary={primary ? 1 : 0}
      dark={dark ? 1 : 0}
      dark2={dark2 ? 1 : 0}
    >
      {buttonLabel}
    </SignUpBtn>
  );
  const ButtonDisplay = signup ? SignupButton : SmoothButton;
  return (
    <React.Fragment>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>{ButtonDisplay}</BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </React.Fragment>
  );
};

export default InfoSection;
