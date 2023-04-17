import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem;
  width: 400px;
  body.dark-mode & {
    background-color: #333;
    color: #fff;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

export const ModalTitle = styled.h4`
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
  body.dark-mode & {
    color: #cccccc;
  }
`;

export const ModalBody = styled.div`
  padding: 1rem 0;
  body.dark-mode & {
    color: #cccccc;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #ccc;
`;

export const ModalDeleteButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: #cc0000;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
  }

  &:disabled {
    background-color: #ff6666;
    cursor: not-allowed;
  }

  body.dark-mode & {
    background-color: #cc0000;
    color: white;
    &:hover {
      background-color: #d90b0b;
      color: white;
    }
  }
`;

export const ModalCancelButton = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: #b3b3b3;
  cursor: pointer;

  &:hover {
    background-color: #a6a6a6;
  }

  &:disabled {
    background-color: #d9d9d9;
    cursor: not-allowed;
  }

  body.dark-mode & {
    background-color: #a6a6a6;
    color: white;
    &:hover {
      background-color: #b3b3b3;
      color: white;
    }
  }
`;
