import { ReactNode } from "react";
import { MainNavigation } from "../MainNavigation";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
