import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

export const ArticleTitle = styled.h2`
  margin: 0px;
  padding: 10px 0px 15px 0px;
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
    <div>
      <Link to={props.slug}><Img fluid={props.image} /></Link>
    </div>
    <ArticleTitle>
      <Link to={props.slug}>{props.title}</Link>
    </ArticleTitle>
    <div style={{paddingBottom: '10px'}}>{props.previewText}</div>
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