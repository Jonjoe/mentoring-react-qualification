import * as React from "react";

import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Styled from "./Icon.styles";

library.add(fal, fab, fad, fas, far);

export type IconName = "dribbble";

export interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
}

function mapNamePropToFaNames(iconName: IconName): string | string[] {
  switch (iconName) {
    case "dribbble":
      return ["fab", "dribbble"];

    default:
      return iconName;
  }
}

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const { name, size, color } = props;

  const iconName = mapNamePropToFaNames(name);

  return (
    <Styled.Icon size={size}>
      <FontAwesomeIcon color={color} size={"lg"} icon={iconName as IconProp} />
    </Styled.Icon>
  );
};

export default Icon;
