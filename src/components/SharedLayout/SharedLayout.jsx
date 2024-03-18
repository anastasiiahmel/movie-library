import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { HeaderContainer } from "components/header/Header";

import { Container } from "./SharedLayout.styled";
import { Loader } from "components/loader/Loader";


export const SharedLayout = () => {
  return (
    <Container>
      <HeaderContainer/>
      <Suspense fallback={<Loader/>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};