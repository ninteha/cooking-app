import { FC } from "react";
import Header from "../components/ui/header";

interface MasterLayoutProps {
  children: React.ReactNode;
}

const MasterLayout: FC<MasterLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MasterLayout;
