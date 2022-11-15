import styled from "styled-components";
import { populerProduct } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {populerProduct.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
