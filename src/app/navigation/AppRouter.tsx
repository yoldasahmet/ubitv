import { ReactElement } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import SearchPage from "../../pages/search/SearchPage";
import ShowDetailPage from "../../pages/show-detail/ShowDetailPage";

const AppRouter = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail/:id" element={<ShowDetailPage />} />
        {/*<Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
