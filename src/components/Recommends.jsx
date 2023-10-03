import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";


const Recommends = (props) => {
   const Posts = props.RecomendData;
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {Posts &&
          Posts.map((post, key) => (
            <Wrap key={key}>
              <Link to={post.Product_link}>
                <ImageContainer>
                  <img src={post.Image_src} alt={post.name} />
                </ImageContainer>
                <ImageInfo>
                  <ImageTitle>{post.Product_Title}</ImageTitle>
                  <ImageDescription>{post.Categories}</ImageDescription>
                </ImageInfo>
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;

  h4 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);

  a {
    display: block;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 8px;
  border-radius: 0 0 10px 10px;
  color: #fff;
  text-align: center;
`;

const ImageTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ImageDescription = styled.div`
  font-size: 14px;
`;

export default Recommends;
