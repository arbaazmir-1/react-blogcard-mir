import React from "react";
import styled from "styled-components";


interface BlogCardProps {
  title: string;
  url: string;
  image: string;
  description: string;
  imageHeight: string;
    widthCard: string;
}



const CardImage = styled.img<{ height: string }>`
  border-radius: 0.25rem;
  width: 100%;
  height: ${(props) => props.height};
  object-fit: cover;
`;
const CardWrapper = styled.div<{width:string}>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  padding: 2px;
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 0.25rem;

//   @media only screen and (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     padding: 2rem;
//   }
`;

const ImageWrapper = styled.div`
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    flex-basis: 60%;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0.2rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  text-align: justify;
`;

const ReadMoreIcon = styled.span`
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const CardLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;


export const BlogCard = ({
  title,
  url,
  image,
  description,
  imageHeight,
  widthCard
}: BlogCardProps) => {
  return (
    <CardWrapper width={widthCard}>
    <ImageWrapper>
      <CardLink href={url}
      target="_blank"
      >
        <CardImage src={image} alt={title} height={imageHeight} />
      </CardLink>
    </ImageWrapper>
    <CardContent>
      <CardLink href={url}>
        <CardTitle>
          {title}{" "}
          <ReadMoreIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </ReadMoreIcon>
        </CardTitle>
      </CardLink>
      <CardDescription>{description.slice(0, 100)}...</CardDescription>
    </CardContent>
  </CardWrapper>
  
  );
};
