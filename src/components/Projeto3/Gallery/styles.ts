import styled from "styled-components";

export const GalleryH3 = styled.h3`
  font-size: 26px;
  font-weight: normal;
  margin: 1em 0;
`;

export const GalleryFullWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  height: 500px;
`;

export const GalleryFullImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const GalleryImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const GalleryImage = styled.img`
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 400px;
`;
