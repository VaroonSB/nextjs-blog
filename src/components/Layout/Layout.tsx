import { JSX } from "react";
import { MainNavigation } from "../MainNavigation";

export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
