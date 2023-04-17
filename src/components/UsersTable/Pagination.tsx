import React from "react";
import styled from "styled-components";
import {
  NextButton,
  PaginationWrapper,
  PreviousButton,
} from "../GlobalStyles/ButtonStyles";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  pageNumbers: number[];
  totalPages: number;
  isDarkMode: boolean;
}

const PaginateButtons = styled.button<{
  isCurrentPage: boolean;
  isDarkMode: boolean;
}>`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  fontsize: 14px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s ease;

  background-color: ${(props) =>
    props.isCurrentPage ? (props.isDarkMode ? "gray" : "blue") : "white"};
  color: ${(props) =>
    props.isCurrentPage ? (props.isDarkMode ? "white" : "white") : "black"};

  &:hover {
    background-color: blue;
    color: white;
  }

  body.dark-mode & {
      &:hover {
        background-color: gray;
        color: white;
      }
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  pageNumbers,
  totalPages,
  isDarkMode,
}) => {
  return (
    <PaginationWrapper>
      <PreviousButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </PreviousButton>

      {pageNumbers.map((pageNumber) => (
        <PaginateButtons
          key={pageNumber}
          isCurrentPage={pageNumber === currentPage}
          isDarkMode={isDarkMode}
          onClick={() => setCurrentPage(Number(pageNumber))}
          disabled={pageNumber === currentPage}
        >
          {pageNumber}
        </PaginateButtons>
      ))}

      <NextButton
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </NextButton>
    </PaginationWrapper>
  );
};

export default Pagination;
