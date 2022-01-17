import React from "react";
import {
  ProfilesCard,
  ProfilesIcon,
  ProfilesH2,
  ProfilesP,
} from "./ProfilesElements";

const ProfileCard = (props) => {
  return (
    <ProfilesCard>
      <ProfilesIcon src={props.profPic} />
      <ProfilesH2>{props.fullName}</ProfilesH2>
      <ProfilesP>{props.position}</ProfilesP>
    </ProfilesCard>
  );
};

export default ProfileCard;
