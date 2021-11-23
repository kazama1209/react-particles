import {
  StyledContentWrapper,
  StyledTextWrapper,
  StyledHeading,
  StyledTwitterIcon,
  StyledFacebookIcon,
  StyledInstagramIcon,
  StyledGitHubIcon,
} from "components/styles";

const MainContent: React.FC = () => {
  return (
    <StyledContentWrapper>
      <StyledTextWrapper>
        <StyledHeading>Hello World!</StyledHeading>
        <a href="https://twitter.com/" rel="noreferrer" target="_blank">
          <StyledTwitterIcon fontSize="large" />
        </a>
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
          <StyledFacebookIcon fontSize="large" />
        </a>
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          <StyledInstagramIcon fontSize="large" />
        </a>
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <StyledGitHubIcon fontSize="large" />
        </a>
      </StyledTextWrapper>
    </StyledContentWrapper>
  );
};
//www.facebook.com/
export default MainContent;
