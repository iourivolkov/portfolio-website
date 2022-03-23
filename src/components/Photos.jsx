import "../styles/Photos.css";
import React from "react";

import styled from "styled-components";

const PhotoButton = styled.button`
  border: solid white 2px;
  width: 200px;
  height: 40px;
  text-align: center;
  color: white;
  margin-top: 20px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  &:hover {
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    background-color: white;
  }
`;

const Container = styled.div`
  background-color: white;
  color: black;
`;

const PhotoGrid = styled.div`
  background-color: white;
  color: black;

  padding-top: 10px;
  padding-bottom: 10px;
`;

const Photos = () => {
  return (
    <PhotoGrid>
      <h1 className="photos-title">PHOTOS</h1>
    </PhotoGrid>
  );
};

export default Photos;
