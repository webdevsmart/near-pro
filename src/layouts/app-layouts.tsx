import React from "react";
import { useRouter } from "next/router";
import HomeHeader from "./signup/home/header";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter();

  return (
    <div>
      {router.route === "/" && <HomeHeader />}
      {children}
    </div>
  );
};

export default AppLayout;
