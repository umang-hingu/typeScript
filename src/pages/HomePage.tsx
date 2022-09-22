import React from "react";
import { Link } from "react-router-dom";
import TableList from "../component/TableList";
import Layout from "../Layout/Layout";
//import { useSelector } from "react-redux";
import { useAppSelector } from "../store/hooks";
import Notification from '../component/Notification';



const HomePage: React.FC = () => {

  const notification = useAppSelector((state) => state.notification);
  const token = localStorage.getItem("token");

  return (
    <>
     {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />)}
    <Layout>
      {token ? (
        <div>
          <h1>Fetched Data rendered on Table</h1>
          <TableList></TableList>
        </div>
      ) : (
        <div>you are not logged in.<br></br>
        <Link to='/'>Please, Log in by tapping here.</Link></div>
      )}
    </Layout></>
  );
};

export default HomePage;
