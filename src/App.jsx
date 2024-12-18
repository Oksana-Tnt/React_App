import { BrowserRouter, Route, Routes } from "react-router";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import BlogPageItem from "./pages/BlogPageItem";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPageItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
