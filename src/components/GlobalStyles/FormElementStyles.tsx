import styled from "styled-components";

export const FormGroup = styled.div`
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  max-height: 600px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;

  body.dark-mode & {
    color: #cccccc;
  }
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;

  body.dark-mode & {
    background-color: #cccccc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #e0e0e0;
    border-color: #bdbdbd;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const TextArea = styled.textarea`
  padding: 8px;
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  height: 300px;

  body.dark-mode & {
    background-color: #cccccc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #e0e0e0;
    border-color: #bdbdbd;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const Button = styled.button`
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  background-color: #2196f3;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  width: 30%;
  align-self:center,
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1976d2;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
    align-self: center;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #fff;
  color: #2196f3;
  border: 1px solid #2196f3;

  &:hover {
    background-color: #e0e0e0;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const ButtonFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    ${Button} {
      width: 30%;
    }
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  margin: 20px 0;
  max-width: 1080px;
  max-height: 1920px;
  height: 650px;
  width: 700px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

  body.dark-mode & {
    background-color: #57575c;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    ${Input} {
      width: 80%;
    }
    ${TextArea} {
      width: 80%;
    }
  }

  @media screen and (max-width: 560px) {
    width: 90%;
    margin: 0 auto;
    ${Input} {
      width: 80%;
    }
    ${TextArea} {
      width: 80%;
    }
    ${Button} {
      width: 50%;
    }
  }
`;

export const AddPostContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

  body.dark-mode & {
    background-color: #3a3a40;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    ${Input} {
      width: 80%;
    }
    ${TextArea} {
      width: 80%;
    }
  }

  @media screen and (max-width: 560px) {
    width: 60%;
    margin: 0 auto;
    ${Input} {
      width: 80%;
    }
    ${TextArea} {
      width: 80%;
    }
    ${Button} {
      width: 50%;
    }
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 300px;
  margin-bottom: 20px;
  margin-top: 20px;
  outline: none;
  box-shadow: 0 0 2px #9ecaed;
  border-color: #ccc;

  @media only screen and (max-width: 768px) {
    width: 200px;
    margin-top: 20px;
  }
  @media only screen and (max-width: 500px) {
    width: 100px;
    margin-top: 20px;
  }

  &:focus {
    border-color: #9ecaed;
    box-shadow: 0 0 5px #9ecaed;
  }

  body.dark-mode & {
    background-color: #f8f9fa;
  }
`;
