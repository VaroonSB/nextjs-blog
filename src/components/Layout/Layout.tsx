import { JSX } from "react";
import { MainNavigation } from "../MainNavigation";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
