import styled from "styled-components";
import Image from "next/image";

export const IndexWrapper = styled.div`
  height: 100%;
`;

export const IndexTitle = styled.h1`
  margin-top: 200px;
  margin-bottom: 100px;
  text-align: center;
  font-size: 72px;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProjetcWrapper = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
  }
`;
export const Projetc = styled(Image)`
  border-radius: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 15px;
  font-size: 32px;
`;
