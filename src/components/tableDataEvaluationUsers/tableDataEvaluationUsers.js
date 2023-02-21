import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { UsersFetcher } from "../../services/users_fetcher";
import "../../styles/tableEvaluation.css";
import LayoutAdmin from "../Layout/adminLayout";

const TableDataEvaluationUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = () => {
    UsersFetcher.all().then((user) => setAllUsers(user));
  };

  const columns = [
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      center: true,
      style: {
        backgroundColor: "#F9FAF3",
        color: "black",
      },
    },
    {
      name: "Stars",
      selector: (row) => row.stars,
      sortable: true,
      center: true,
    },
    {
      name: "Question 1",
      selector: (row) => row.ownerComment1,
      sortable: true,
      center: true,
      style: {
        backgroundColor: "#F9FAF3",
        color: "black",
      },
    },
    {
      name: "Question 2",
      selector: (row) => row.ownerComment2,
      sortable: true,
      center: true,
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        backgroundColor: "#ff5b00",
        color: "white",
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
        },
      },
    },
  };

  const paginacionOpciones = {
    rowsPerPageText: "Filas por Página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <LayoutAdmin>
      <div className="container_table">
        <h2> Results Stage 3 </h2>
        <DataTable
          columns={columns}
          data={allUsers}
          pagination
          paginationComponentOptions={paginacionOpciones}
          fixedHeader
          fixedHeaderScrollHeight="1000px"
          customStyles={customStyles}
        />
      </div>
    </LayoutAdmin>
  );
};

export default TableDataEvaluationUsers;
