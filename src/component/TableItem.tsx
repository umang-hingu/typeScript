import React from "react";

interface Props {
  fname: string;
  lname: string;
  email: string;
  id: number;
}

const TableItem:React.FC<Props> = (props) => {
  return (
    <tr>
      <th>{props.fname}</th>
      <th>{props.lname}</th>
      <th>{props.email}</th>
    </tr>
  );
};

export default TableItem;
