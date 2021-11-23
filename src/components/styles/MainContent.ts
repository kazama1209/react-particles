import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

import styled from "styled-components";

import * as colorCodes from "constants/colorCodes";

export const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTextWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  padding: 2rem;
  text-align: center;
  border: 2px solid ${colorCodes.SNOW};
  border-radius: 8px;
  background-color: ${colorCodes.IVORY_BLACK};
`;

export const StyledHeading = styled.h1`
  margin-top: 0;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colorCodes.SNOW};
`;

export const StyledTwitterIcon = styled(TwitterIcon)`
  color: ${colorCodes.WHITE};
  margin: 0 0.3rem;
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  color: ${colorCodes.WHITE};
  margin: 0 0.3rem;
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
  color: ${colorCodes.WHITE};
  margin: 0 0.3rem;
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  color: ${colorCodes.WHITE};
  margin: 0 0.3rem;
`;
