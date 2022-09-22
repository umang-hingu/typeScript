import React from "react";
import TableItem from "./TableItem";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
//import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch,useAppSelector } from "../store/hooks";
import { fetchTableData } from "../store/homepage-action";



const TableList = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.items);

 

  useEffect(()=>{
    dispatch(fetchTableData());
  },[dispatch])

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user) => (
            <TableItem
              key={user.id}
              fname={user.first_name}
              lname={user.last_name}
              email={user.email}
              id={user.id}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableList;
