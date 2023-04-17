import React from "react";
import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = React.memo(
  createGlobalStyle`${css`
    * {
      margin: 0;
      box-sizing: border-box;
      padding: 0;
      border: 0;
      font-family: "Montserrat", sans-serif;
    }

    body {
      overflow: hidden;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      margin-top: 10px;
    }

    th,
    td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
      width: 300px;
    }

    select {
      width: 90px;

      body.dark-mode & {
        background-color: #f8f9fa;
      }
    }

    label {
      font-size: 14px;
      margin-right: 10px;
      body.dark-mode & {
        color: #cccccc;
      }
    }

    h3{
      body.dark-mode & {
        color:  #cccccc;
      }
    }

    .link-back {
      display: inline-block;
      padding: 10px 20px;
      background-color: blue;
      color: #fff;
      border-radius: 5px;
      text-decoration: none;
      margin-top: 20px;
      transition: background-color 0.3s ease-in-out;
    }
    
    .link-back:hover {
      background-color: #0056b3;
    }

    @media only screen and (max-width: 768px) {
      table {
        font-size: 14px;
        width: 90%;
      }

      th {
        font-size: 12px;
      }

      label {
        font-size: 12px;
      }

      select{
        margin-right:50px;
      }

    a {
      color: blue;
    }

    body.dark-mode a {
      color: white;
    }
  `}`,
);
