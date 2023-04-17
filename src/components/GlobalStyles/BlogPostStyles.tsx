import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

export const Title = styled.h2`
  font-size: 12px;
  font-weight: bold;
  margin: 40px 0 20px;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;

  body.dark-mode & {
    color: white;
  }
`;

export const BodyPost = styled.h4`
  font-size: 18px;
  margin: 20px 40px 130px;
  text-align: justify;
  body.dark-mode & {
    color: white;
    font-weight: normal;
  }

  @media screen and (max-width: 521px) {
    margin: 20px 40px 30px;
  }
`;

export const DatePost = styled.div`
  font-size: 14px;
  color: #999999;
  margin: 0;
  position: absolute;
  bottom: 10px;
  right: 20px;

  body.dark-mode & {
    color: white;
  }
`;

export const BackIcon = styled(BiArrowBack)`
  position: absolute;
  top: 10px;
  left: 20px;
  cursor: pointer;

  body.dark-mode & {
    color: white;
  }
`;

export const DeleteButton = styled.button`
  font-size: 14px;
  color: white;
  background-color: #ff5c5c;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0 0 0;
  position: absolute;
  bottom: 10px;
  left: 20px;

  @media screen and (max-width: 521px) {
    display: inline-block;
    width: calc(50% - 10px);
    position: static;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const EditButton = styled.button`
  font-size: 14px;
  color: white;
  background-color: #1e90ff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0;
  position: absolute;
  bottom: 10px;
  left: 200px;

  @media screen and (max-width: 521px) {
    display: inline-block;
    width: calc(50% - 10px);
    position: static;
    margin-bottom: 50px;
  }
`;

export const Cover = styled.div`
  background-image: url("https://picsum.photos/id/1015/400/600");
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 200px;
  width: 100%;

  body.dark-mode & {
    background-image: url("https://picsum.photos/id/1036/400/600");
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  margin: 20px 0;
  max-width: 1080px;
  position: relative;
  justify-content: center;
  background-color: #f5f5f5;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

  body.dark-mode & {
    background-color: #57575c;
  }
  }
`;
