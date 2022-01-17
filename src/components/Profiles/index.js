import React from "react";
import Icon1 from "../../images/profilepic.svg";
import { profilesData } from "./Data";
import ProfileCard from "./ProfileCard";
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
  const profiles = profilesData.map((person) => (
    <ProfileCard
      fullName={person.fullName}
      profPic={person.profPic}
      position={person.position}
    />
  ));
  return (
    <React.Fragment>
      <ProfilesContainer id="profiles">
        <ProfilesH1>Meet Our Officers</ProfilesH1>
        <ProfilesWrapper>{profiles}</ProfilesWrapper>
      </ProfilesContainer>
    </React.Fragment>
  );
};

export default Profiles;
