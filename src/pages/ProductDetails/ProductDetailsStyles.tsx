import styled from "styled-components";

const ProductDetailsStyles = styled.div`
  .product-container {
    display: grid;
    width: 60%;
    height: 500px;
    padding-top: 3rem;
    margin: auto;
  }
  .product-img {
    margin-left: -30%;
    grid-column: 1;
    grid-row: 1;
    border-radius: 10px;
    object-fit: contain;
  }
  .product-img img {
    width: 80%;
    height: 70%;
    margin-top: 1rem;
  }
  h1 {
    font-size: 40px;
  }
  .product-title {
    margin-top: 1rem;

    grid-column: 2;
    grid-row: 1;
    color: #313941;
  }
  .product-description {
    font-size: 25px;
    padding-top: 100px;
    grid-column: 2;
    grid-row: 1;
    color: #313941;
  }
  ul {
    margin-bottom: 2rem;
  }
  .banner-image img {
    width: 100%;
  }
  .tech-specs img {
    display: block;
    margin: 2rem auto 2rem auto;
    width: 650px;
    height: 600px;
    object-fit: contain;
  }
  @media (max-width: 1025px) {
    .product-container {
      width: 80%;
      height: 420px;
    }
    .product-img {
      margin: auto;
    }
    .product-img img {
      width: 65%;
      height: 55%;
      margin-top: -2rem;
    }

    .product-title {
      margin-top: 1rem;
      font-size: 30px;
    }
    .product-description {
      font-size: 20px;
    }
  }
  @media (max-width: 767px) {
    .product-container {
      width: 80%;
      height: 100%;
      padding-top: 1rem;
    }

    .product-img {
      grid-column: 1;
      grid-row: 1;
      margin: auto;
    }
    .product-img img {
      width: 140px;
      height: 200px;
      margin: 1rem auto;
    }

    .product-title {
      margin-top: 0;
      font-size: 25px;
      grid-column: 1;
      grid-row: 2;
    }
    .product-description {
      font-size: 20px;
      padding-top: 3rem;
      grid-column: 1;
      grid-row: 2;
    }

    .tech-specs img {
      width: 300px;
      height: 272px;
    }
  }
`;
export default ProductDetailsStyles;
