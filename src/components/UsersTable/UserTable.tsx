import React, { ChangeEvent, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectUsers } from "../../redux/user/userSlice";
import { User } from "../../data/data";

import { SearchInput } from "../GlobalStyles/FormElementStyles";
import { BeatLoader } from "react-spinners";
import UserRow from "./UserRow";
import { ToggleButton } from "../GlobalStyles/ButtonStyles";

import { useDispatch } from "react-redux";
import { BsFillMoonFill } from "react-icons/bs";
import { CgSun } from "react-icons/cg";
import { toggleDarkMode } from "../../redux/DarkMode";
import Pagination from "./Pagination";

const UserTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [genderFilter, setGenderFilter] = useState<string>("");

  const dispatch = useDispatch();
  const users = useTypedSelector(selectUsers);

  const isDarkMode = useTypedSelector((state) => state.darkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  //Pagination
  const subsetOfUsers: User[] = users.filter((user: User) => {
    if (genderFilter && user.gender !== genderFilter) {
      return false;
    }
    if (
      nameFilter &&
      !(
        user.first_name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        user.email.toLowerCase().includes(nameFilter.toLowerCase())
      )
    ) {
      return false;
    }
    return true;
  });

  const usersPerPage = 10;
  const totalPages: number = Math.ceil(subsetOfUsers.length / usersPerPage);
  let firstPageNum: number = Math.max(
    currentPage - Math.floor(usersPerPage / 2),
    1,
  );
  let lastPageNum: number = Math.min(
    firstPageNum + usersPerPage - 1,
    totalPages,
  );

  const pageNumbers: number[] = Array.from(
    { length: lastPageNum - firstPageNum + 1 },
    (_, i) => i + firstPageNum,
  );

  if (firstPageNum > 2) {
    pageNumbers.unshift(1);
  }

  if (lastPageNum < totalPages - 1) {
    pageNumbers.push(totalPages);
  }

  const indexOfLastUser: number = currentPage * usersPerPage;
  const indexOfFirstUser: number = indexOfLastUser - usersPerPage;
  const currentUsers = subsetOfUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleGenderFilterChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ): void => {
    setGenderFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleNameFilterChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setNameFilter(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <h3 className="Blogs Table" style={{ marginTop: "20px" }}>
        Blogs Table
      </h3>
      <ToggleButton onClick={() => dispatch(toggleDarkMode())}>
        {isDarkMode ? <CgSun size={20} /> : <BsFillMoonFill size={20} />}
      </ToggleButton>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <SearchInput
          type="text"
          placeholder="Search by name or email"
          value={nameFilter}
          onChange={handleNameFilterChange}
          style={{ flex: "1", marginRight: "10px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flex: "1",
          }}
        >
          <label>Filter by gender:</label>
          <select value={genderFilter} onChange={handleGenderFilterChange}>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Agender">Agender</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Polygender">Polygender</option>
            <option value="Genderfluid">Genderfluid</option>
          </select>
        </div>
      </div>

      {users.length ? (
        <table
          style={{
            color: isDarkMode ? "  #CCCCCC" : "black",
            transition: "0.5s all ease-out",
            border: "none",
          }}
        >
          <thead>
            <tr
              style={{
                color: isDarkMode ? "#CCCCCC" : "blue",
                fontWeight: isDarkMode ? "normal" : "bold",
                border: "none",
              }}
            >
              <th>User name</th>
              <th>User email</th>
              <th
                style={{
                  border: 0,
                  width: "100px",
                  backgroundColor: isDarkMode ? "#222222" : "#f8f9fa",
                }}
              ></th>
            </tr>
          </thead>
          <tbody
            style={{
              border: "none",
            }}
          >
            {currentUsers.length > 0 ? (
              currentUsers.map((user: User) => (
                <UserRow key={user.id} user={user} />
              ))
            ) : (
              <tr>
                <td colSpan={2}>No users</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <BeatLoader color={"blue"} loading={true} />
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageNumbers={pageNumbers}
        totalPages={totalPages}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default UserTable;
