import React from "react";
import Icon1 from "../../images/profilepic.svg";

import {
  ProfilesContainer,
  ProfilesH1,
  ProfilesWrapper,
  ProfilesCard,
  ProfilesIcon,
  ProfilesH2,
  ProfilesP,
} from "./ProfilesElements";
const Profiles = () => {
  return (
    <React.Fragment>
      <ProfilesContainer id="profiles">
        <ProfilesH1>Meet Our Officers</ProfilesH1>
        <ProfilesWrapper>
          <ProfilesCard>
            <ProfilesIcon src={Icon1} />
            <ProfilesH2>Nathan Lu</ProfilesH2>
            <ProfilesP>President</ProfilesP>
          </ProfilesCard>
          <ProfilesCard>
            <ProfilesIcon src={Icon1} />
            <ProfilesH2>Malik Rawashdeh</ProfilesH2>
            <ProfilesP>Development Officer</ProfilesP>
          </ProfilesCard>
          <ProfilesCard>
            <ProfilesIcon src={Icon1} />
            <ProfilesH2>Alya Mansoor</ProfilesH2>
            <ProfilesP>Design Manager</ProfilesP>
          </ProfilesCard>
          <ProfilesCard>
            <ProfilesIcon src={Icon1} />
            <ProfilesH2>Litzy Carela</ProfilesH2>
            <ProfilesP>Historian</ProfilesP>
          </ProfilesCard>
          <ProfilesCard>
            <ProfilesIcon src={Icon1} />
            <ProfilesH2>Jason Kim</ProfilesH2>
            <ProfilesP>Treasurer</ProfilesP>
          </ProfilesCard>
          <ProfilesCard>
            <ProfilesIcon src={Icon1} />
            <ProfilesH2>Daniel Hamdan</ProfilesH2>
            <ProfilesP>Secretary</ProfilesP>
          </ProfilesCard>
        </ProfilesWrapper>
      </ProfilesContainer>
    </React.Fragment>
  );
};

export default Profiles;
