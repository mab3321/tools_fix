import React from "react";
import styled from "styled-components";

// Styled components for the Card component
const CardContainer = styled.li`
  /* Your card container styles here */
  flex: 0 0 auto;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const CardLink = styled.a`
  /* Your card link styles here */
  color: #393b3d;
  text-decoration: none;
`;

const CardImage = styled.img`
  /* Adjust the image size as needed */
  max-width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  /* Your card title styles here */
  margin: 0;
  padding: 0;
  font-size: 18px; /* Increase the font size for better visibility */
`;

const CardCategories = styled.ul`
  /* Your card categories styles here */
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CardCategoryItem = styled.li`
  /* Your card category item styles here */
  margin-right: 10px;
  font-size: 14px; /* Adjust the font size as needed */
`;

const Card = (props) => {
  const { top_product } = props;

  return (
    <CardContainer>
      <CardLink href={top_product.Product_link}>
        <div className="container-nw2">
          <div className="card-pgd card-f1z">
            <CardImage src={top_product.Image_src} alt="" />
          </div>
          <div className="content-iec">
            <CardTitle>{top_product.Product_Title}</CardTitle>
            <CardCategories className="act-m1j card-s3z">
              <CardCategoryItem>{top_product.Categories}</CardCategoryItem>
              {/* Add more category items if needed */}
            </CardCategories>
          </div>
        </div>
      </CardLink>
    </CardContainer>
  );
};

export default Card;
