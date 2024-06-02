import Products from "./components/product/Products";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      {/* 아이템 리스트 */}
      <Products />
    </Layout>
  );
}

export default App;
