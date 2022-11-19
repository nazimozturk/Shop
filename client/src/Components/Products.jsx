import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, short }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduts, setfilteredProduts] = useState([]);

  useEffect(() => {
    const getProduts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProduts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilteredProduts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (short === "newest") {
      setfilteredProduts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (short === "asc") {
      setfilteredProduts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setfilteredProduts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [short]);

  return (
    <Container>
      {cat
        ? filteredProduts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 4)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
