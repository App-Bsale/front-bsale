import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "ID",
    selector: "uid",
  },
  {
    name: "Name",
    selector: "name",
  },
  {
    name: "Last Name",
    selector: "lastName",
  },
  {
    name: "Email",
    selector: "email",
  },
  {
    name: "Stars",
    selector: "stars",
  },
];

const data = [
  {
    id: 1,
    name: "Juan",
    lastName: "Peres Lopez",
    email: "juanPerez@gmail.com",
    stars: 3,
    label_1: "Todo bien",
    label_2: "Codigo Bueno",
  },
  {
    id: 2,
    name: "Luis",
    lastName: "Hernandez P.",
    email: "juanPerez@gmail.com",
    stars: 2,
    label_1: "Todo bien",
    label_2: "Codigo Bueno",
  },
  {
    id: 3,
    name: "Renato",
    lastName: "Garcia R",
    email: "juanPerez@gmail.com",
    stars: 4,
    label_1: "Todo bien",
    label_2: "Codigo Bueno",
  },
  {
    id: 4,
    name: "Ana",
    lastName: "Gonzales E",
    email: "juanPerez@gmail.com",
    stars: 5,
    label_1: "Todo bien",
    label_2: "Codigo Bueno",
  },
  {
    id: 5,
    name: "Lucio",
    lastName: "Lopez W",
    email: "juanPerez@gmail.com",
    stars: 1,
    label_1: "Todo bien",
    label_2: "Codigo Bueno",
  },
  {
    id: 6,
    name: "Lucia",
    lastName: "Sanchez J",
    email: "juanPerez@gmail.com",
    stars: 2,
    label_1: "Todo bien",
    label_2: "Codigo Bueno",
  },
  {
    id: 7,
    name: "Raul",
    lastName: "Cruz T",
    email: "juanPerez@gmail.com",
    stars: 3,
    label_1: "Todo bien",
    label_2: "Codigo Bueno",
  },
  {
    id: 8,
    name: "Santiago",
    lastName: "Flores Y",
    email: "juanPerez@gmail.com",
    stars: 5,
    label_1: "Todo bien",
    label_2: "Codigo Bueno",
  },
  {
    id: 9,
    name: "Xiomara",
    lastName: "Gomez U",
    email: "juanPerez@gmail.com",
    stars: 2,
    label_1: "Todo bien",
    label_2: "Codigo Bueno",
  },
];

const TableDataEvaluationUsers = () => {
  return (
    <>
      <DataTable columns={columns} data={data} pagination />
    </>
  );
};

export default TableDataEvaluationUsers;
