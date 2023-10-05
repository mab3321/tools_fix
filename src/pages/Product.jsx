// Product.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { json, useLocation } from "react-router-dom";
import styled from "styled-components";
import WpHeader from "../components/Home/Header/WpHeader";
import Footer from "../components/Home/Footer";
import { BsWhatsapp } from "react-icons/bs";
import Card from "../components/card/Card";

function Product() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");
  const [top_products, setTopProduct] = useState([]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    // Make an API request to fetch the product data using the product ID
    axios
      .get(`http://127.0.0.1:5000/api/top_products`)
      .then((response) => {
        setTopProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);
  useEffect(() => {
    // Make an API request to fetch the product data using the product ID
    axios
      .get(`http://127.0.0.1:5000/api/products?id=${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);
  const link = `https://api.whatsapp.com/send?phone=923218043010&text=I%20want%20to%20get%20following%20Product%0AProduct_Title:%20${product.Product_Title}%0AProduct_id:%20${product.id}"!`;

  return (
    <Body>
      <WpHeader />
      <MainContainer id="mai-ggl">
        <ArticleContainer>
          <Thumbnail>
            <Image
              width="auto"
              height="auto"
              src={product.Image_src}
              alt={product.Product_Title}
            />
            <ElongatedPage>
              <a
                target="_blank"
                href={link}
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-medium px-8 py-4 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                rel="noreferrer"
              >
                <BsWhatsapp className="inline" size={22} />
                &nbsp;&nbsp; Chat on WhatsApp
              </a>
            </ElongatedPage>
          </Thumbnail>
          <Content>
            <Paragraph>
              Last Updated on{" "}
              <font>
                <Strong>June 16, 2023</Strong>
              </font>{" "}
              by <Link href="">Dawood</Link>
            </Paragraph>
            <Paragraph className="text-azs has-medium-font-f2w">
              <Strong>
                <Link href="https://themeforest.net/item/izzy-an-unconventional-blog-theme/19833826">
                  Sales Page
                </Link>
              </Strong>
            </Paragraph>
            <Paragraph>
              Izzy – A premium easy-to-use WordPress theme developed
              specifically for personal, streamlined blog websites; coded with
              site performance in mind. Theme is a bit unconventional, brings a
              modern and fresh feeling to your WordPress blog.
            </Paragraph>
            <Paragraph>
              Theme comes with two main layouts (masonry or classic-like) and
              with fully responsive design. You will receive detailed
              documentation along with additional features like a featured main
              slider, landing section, unlimited color schemes, Google web
              fonts, custom widgets, etc. Functions are based on a solid
              back-end Redux framework.
            </Paragraph>
          </Content>
          <ContentOfCard>
            {top_products &&
              top_products.map((top_product) => {
                return <Card top_product={top_product} />;
              })}
          </ContentOfCard>
        </ArticleContainer>
      </MainContainer>
      <div className="my-component">
        {" "}
        {/* Add any required CSS classes */}
        {/* Paste your HTML content here */}
      </div>
      <Footer />
    </Body>
  );
}

// Define styled components
const MainContainer = styled.main`
  padding: 1rem;

  @media only screen and (min-width: 768px) {
    padding: 2rem;
  }

  @media only screen and (min-width: 992px) {
    flex: 1;
  }
`;
const ElongatedPage = styled.div`
  position: relative;
  display: flexbox;
  top: 10;
  right: 100;
  margin-left: 600px;
  margin-top: 50px;
  width: auto; /* Adjust the width as needed */
  height: auto; /* Adjust the height as needed */
  background-color: #fff; /* Background color of the elongated page */

  z-index: 1; /* Ensure the elongated page appears on top of the image */
`;
const ContentOfCard = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const ArticleContainer = styled.article`
  margin-bottom: 2rem;
`;

const Thumbnail = styled.div`
  margin: 0 0 2rem 0;
`;

const Image = styled.img`
  display: flex;
  margin: 0 auto;
  width: auto;
`;

const Content = styled.div`
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
`;

const Paragraph = styled.p`
  line-height: 1.62;
  margin: 0 0 1.62rem 0;
`;

const Link = styled.a`
  color: #448fd5;
  text-decoration: none;
  outline: 0;

  &:hover {
    color: #215b92;
  }
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const Body = styled.body`
  color: #696969;
  font-family: roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.15;
  background: #fff;
  font-weight: 400;
`;

// Define the React component

export default Product;
