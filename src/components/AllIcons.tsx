import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiGraphql,
  SiAdobephotoshop,
  SiAdobexd,
  SiExpress,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiSpeakLine,
  RiMenuFoldLine,
} from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoIosCreate, IoMdEasel } from "react-icons/io";
import { FaArrowsDownToPeople, FaCode } from "react-icons/fa6";
import { MdOutlineArrowOutward, MdOutlineScreenRotation } from "react-icons/md";
import { BsFillTrophyFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const iconsMap: { [key: string]: React.ElementType } = {
  js: IoLogoJavascript,
  ts: SiTypescript,
  next: RiNextjsFill,
  react: FaReact,
  express: SiExpress,
  node: FaNodeJs,
  tailwind: RiTailwindCssFill,
  graphql: SiGraphql,
  figma: FaFigma,
  adobePhotoShop: SiAdobephotoshop,
  adobeXD: SiAdobexd,
  team: PiUsersThreeFill,
  communication: RiSpeakLine,
  problem: IoIosCreate,
  leader: FaArrowsDownToPeople,
  design: IoMdEasel,
  git: FaGithub,
  verticalArrow: MdOutlineArrowOutward,
  trophy: BsFillTrophyFill,
  menu: RiMenuFoldLine,
  cross: RxCross2,
  support: BiSupport,
  cleanCode: FaCode,
  responsive: MdOutlineScreenRotation,
  linkedin: FaLinkedinIn,
  certificate: LiaCertificateSolid,
  safetyCertificate: AiOutlineSafetyCertificate,
};

interface AllIconsProps {
  name: string;
  size?: string | number;
  color?: string;
}

const AllIcons: React.FC<AllIconsProps> = ({
  name,
  size = 24,
  color = "currentColor",
}) => {
  const IconComponent = iconsMap[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return <IconComponent size={size} color={color} />;
};

export default AllIcons;