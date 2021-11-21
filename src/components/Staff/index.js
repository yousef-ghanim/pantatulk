import React, { useEffect } from "react";
import {
  Wrapper,
  StaffContainer,
  Profile,
  ProfilePic,
  Picture,
  ProfileInfo,
  ProfileTitle,
  ProfilePosition,
  ContactInfo,
  Phone,
  Envelope,
  Span,
  Icon,
  Email,
  Mobile,
} from "../Staff/Staff.styled";
import Image from "../../images/sandramynd.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Staff = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <>
      <Wrapper>
        <StaffContainer data-aos="fade-up">
          <Profile>
            <ProfilePic>
              <Picture src={Image} alt="profile-pic"></Picture>
            </ProfilePic>
            <ProfileInfo>
              <ProfileTitle>Sandra Polanska</ProfileTitle>
              <ProfilePosition>Eigandi Túlkaþjónustunnar slf</ProfilePosition>
              <ContactInfo>
                <Phone />
                <Span>: 517-0606</Span>
              </ContactInfo>
              <ContactInfo>
                <Mobile />
                <Span>: 669-1004</Span>
              </ContactInfo>
              <ContactInfo>
                <Envelope />
                <Email>
                  <Span>:</Span> sandra@pantatulk.is
                </Email>
              </ContactInfo>
            </ProfileInfo>
          </Profile>
          <Profile>
            <ProfilePic>
              <Icon />
            </ProfilePic>
            <ProfileInfo>
              <ProfileTitle>Neringa Eidukiene</ProfileTitle>
              <ProfilePosition>
                Verkefnastjóri og túlkur í litháísku
              </ProfilePosition>
              <ContactInfo>
                <Phone />
                <Span>: 517-0606</Span>
              </ContactInfo>
              <ContactInfo>
                <Envelope />
                <Email>
                  <Span>:</Span> bokun@pantatulk.is
                </Email>
              </ContactInfo>
            </ProfileInfo>
          </Profile>
          <Profile>
            <ProfilePic>
              <Icon />
            </ProfilePic>
            <ProfileInfo>
              <ProfileTitle>Ágústa Katrín Marísdóttir</ProfileTitle>
              <ProfilePosition>Fjármálastjóri</ProfilePosition>
              <ContactInfo>
                <Phone />
                <Span>: 517-0606</Span>
              </ContactInfo>
              <ContactInfo>
                <Envelope />
                <Email>
                  <Span>:</Span> agusta@pantatulk.is
                </Email>
              </ContactInfo>
            </ProfileInfo>
          </Profile>
        </StaffContainer>
      </Wrapper>
    </>
  );
};

export default Staff;
