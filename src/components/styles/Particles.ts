import Particles from "react-tsparticles";
import styled from "styled-components";

import * as colorCodes from "constants/colorCodes";

export const StyledParticles = styled(Particles)`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: ${colorCodes.IVORY_BLACK};
`;
