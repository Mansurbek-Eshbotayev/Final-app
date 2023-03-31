import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Main } from "../layouts/Main/Main";
import { routes } from "../config/Routes";
export const Modules = () => {
  return (
    <>
      <Main>
        <Suspense fallback={<div>Lodaer...</div>}>
          <Routes>
            {routes.map((item, index) => {
              const Component = item.component;
              return (
                <Route path={item.path} element={<Component />} key={index} />
              );
            })}
          </Routes>
        </Suspense>
      </Main>
    </>
  );
};
