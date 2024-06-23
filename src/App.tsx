import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// lazy using for optimization such as only those component will be load which is viewing by the user
const Product = lazy(() => import("./pages/Product"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Cutomers = lazy(() => import("./pages/Cutomers"));
const Transaction = lazy(() => import("./pages/Transaction"));
import Loader from "./components/Loader";
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      {/* Suspense use for load render loading before compoent load */}
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/Transaction" element={<Transaction />} />
          <Route path="/admin/cutomers" element={<Cutomers />} />

          {/* Charts */}

          {/* Apps */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
