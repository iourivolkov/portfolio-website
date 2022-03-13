import "../styles/Photos.css";
import React from "react";

import styled from "styled-components";

const PhotoButton = styled.button`
  border: solid white 2px;
  width: 150px;
  height: 40px;
  text-align: center;
  color: white;
  margin-top: 20px;
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

const Photos = () => {
  return (
    <div>
      <h1 className="photos-title">PHOTOS</h1>
      <a href="https://www.instagram.com/ayureeee.sol/">
        <PhotoButton>Browse photos</PhotoButton>
      </a>
    </div>
  );
};

export default Photos;
