import EmergencyIcon from "./icons/emergency.svg";
import ImplantsIcon from "./icons/implants.svg";
import HygieneIcon from "./icons/hygiene.svg";
import OrthodonticsIcon from "./icons/orthodontics.svg";
import MouthguardsIcon from "./icons/mouthguards.svg";
import RootCanalsIcon from "./icons/root-canals.svg";
import WhiteningsIcon from "./icons/whitening.svg";
import VeneersIcon from "./icons/veneers.svg";
import KidsDentistryIcon from "./icons/kids-dentistry.svg";
import XraysIcon from "./icons/xrays.svg";
import ExtractionsIcon from "./icons/extractions.svg";
import IconsWheel from "./ui/icons-wheel";
import BridgesIcon from "./icons/bridges.svg";
import CerecIcon from "./icons/cerec.svg";
import CrownsIcon from "./icons/crowns.svg";
import DenturesIcon from "./icons/dentures.svg";
import FillingsIcon from "./icons/fillings.svg";
import InvisalignIcon from "./icons/invisalign.svg";
import SedationsIcon from "./icons/sedations.svg";
import StraighteningIcon from "./icons/straightening.svg";

export const servicesData = [
  {
    id: 0,
    name: "Emergency",
    designation: "Emergency Care",
    component: EmergencyIcon,
  },
  {
    id: 1,
    name: "Implants",
    designation: "Implants",
    component: ImplantsIcon,
  },
  {
    id: 2,
    name: "Hygiene",
    designation: "Dental Hygiene",
    component: HygieneIcon,
  },
  {
    id: 3,
    name: "Orthodontics",
    designation: "Orthodontics",
    component: OrthodonticsIcon,
  },
  {
    id: 4,
    name: "Mouthguards",
    designation: "Custom Mouthguards",
    component: MouthguardsIcon,
  },
  {
    id: 5,
    name: "RootCanals",
    designation: "Root Canals",
    component: RootCanalsIcon,
  },
  {
    id: 6,
    name: "Whitenings",
    designation: "Whitenings",
    component: WhiteningsIcon,
  },
  {
    id: 7,
    name: "Veneers",
    designation: "Veneers",
    component: VeneersIcon,
  },
  {
    id: 8,
    name: "KidsDentistry",
    designation: "Kids Dentistry",
    component: KidsDentistryIcon,
  },
  {
    id: 9,
    name: "Xrays",
    designation: "X-Rays",
    component: XraysIcon,
  },
  {
    id: 10,
    name: "Bridges",
    designation: "Bridges",
    component: BridgesIcon,
  },
  {
    id: 11,
    name: "Extractions",
    designation: "Extractions",
    component: ExtractionsIcon,
  },
  {
    id: 12,
    name: "Cerec",
    designation: "Cerec",
    component: CerecIcon,
  },
  {
    id: 13,
    name: "Crowns",
    designation: "Crowns",
    component: CrownsIcon,
  },
  {
    id: 14,
    name: "Dentures",
    designation: "Dentures",
    component: DenturesIcon,
  },
  {
    id: 15,
    name: "Fillings",
    designation: "Fillings",
    component: FillingsIcon,
  },
  {
    id: 16,
    name: "Straightening",
    designation: "Straightening",
    component: StraighteningIcon,
  },
  {
    id: 17,
    name: "Invisalign",
    designation: "Invisalign",
    component: InvisalignIcon,
  },
  {
    id: 18,
    name: "Sedations",
    designation: "Sedations",
    component: SedationsIcon,
  },
];

export const ServicesWheel = ({
  radius,
  className,
  visibleIcons,
}: {
  radius?: number;
  className?: string;
  visibleIcons?: number;
}) => {
  return (
    <IconsWheel
      radius={radius}
      items={servicesData}
      className={className}
      scrollSpeed={1500}
      visibleIcons={visibleIcons}
    />
  );
};
