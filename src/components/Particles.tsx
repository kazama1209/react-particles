import { ISourceOptions } from "tsparticles";
import { bubbles } from "components/particleOptions";

import { StyledParticles } from "./styles";

const Particles: React.FC = () => {
  return <StyledParticles options={bubbles as ISourceOptions} />;
};

export default Particles;
