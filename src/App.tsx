import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import UserLayout from "./layouts/UserLayout";
// import Sample from "./pages/__tests__/Sample";
import Content from "./pages/__tests__/Content";
import AdminLayout from "./layouts/AdminLayout";
import OuterLayout from "./layouts/OuterLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="sample1" element={<Content />} />
        </Route>
        <Route path="/" element={<UserLayout />}>
          <Route path="sample2" element={<Content />} />
        </Route>

        <Route path="/" element={<OuterLayout />}>
          <Route path="sample3" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
