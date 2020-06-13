import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const ArticleTitle = styled.h2`
  > a {
    text-decoration: none;
    color: black;
  }
  > a:hover {
    text-decoration: underline;
  }
`;

export const Tag = styled.a`
  background-color: black;
  color: white;
  margin-right: 10px;
  padding: 4px 12px;
  font-family: sans-serif;
`;

export const FlexContainer = styled.a`
  display: flex;
`;

const ArticleTile = (props) => (
  <div>
    <img src={props.image}/>
    <ArticleTitle>
      <Link to={props.slug}>{props.title}</Link>
    </ArticleTitle>
    <div>{props.previewText}</div>
    <FlexContainer>
      {props.tags.map(tag => (
        <Tag>{tag}</Tag>
      ))}
    </FlexContainer>
  </div>
);

ArticleTile.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  previewText: PropTypes.string
}

export default ArticleTile;