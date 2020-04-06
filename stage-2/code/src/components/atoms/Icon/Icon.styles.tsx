import styled from "styled-components";

interface IconProps {
  size?: string;
}

export const Icon = styled.div`
  font-size: ${(props: IconProps): string =>
    props.size ? props.size : `1rem`};
`;
