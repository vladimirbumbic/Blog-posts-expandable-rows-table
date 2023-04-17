import styled from "styled-components";

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s all ease-out;

  body.dark-mode & {
    background-color: #002244;
  }
`;

export const EditButton = styled.button`
  background-color: blue;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`;

export const AddButton = styled.button`
  border: 1px solid black;
  background-color: #c2c2d6;
  color: black;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 30px;
  right: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;

  body.dark-mode & {
    color: white;
  }

  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
  }
`;

export const PreviousButton = styled.button`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  fontsize: 14px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blue;
    color: white;
  }

  body.dark-mode & {
    background-color: white;
    color: black;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;

export const NextButton = styled.button`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  fontsize: 14px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blue;
    color: white;
  }

  body.dark-mode & {
    background-color: white;
    color: black;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
`;
