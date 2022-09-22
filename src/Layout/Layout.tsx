import React, { ReactNode } from "react";
import NavigationBar from "./NavigationBar";

type Props = {
  children : ReactNode;
}
const Layout:React.FC<Props> = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
    </>
  );
};

export default Layout;
