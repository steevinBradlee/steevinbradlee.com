import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Tag from '../tag/tag';

import './article-tile.scss';

/* export const ArticleTitle = styled.h2`
  margin: 0px;
  padding: 10px 0px 15px 0px;
  > a {
    text-decoration: none;
    color: white;
    font-size: 18px;
  }
  > a:hover {
    text-decoration: underline;
  }
`; */

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArticleTile = (props) => (
  <div className='article-tile'>
    <div style={{height: '250px', overflow: 'hidden'}}>
      <Link to={props.slug}>
        <Img fluid={props.image} />
      </Link>
    </div>
    <div className='article-title'>
      <Link to={props.slug}>{props.title}</Link>
    </div>
    <div className='date'>03/07/20</div>
    {/* <div className='preview-text'>{props.previewText}</div> */}
    <FlexContainer>
      {props.tags.map((tag, key) => (
        <Tag key={`tag-${tag}-key`} title={tag} link={`/articles/tags/${tag}`}/>
        //<a className='tag' key={`tag-${tag}-key`} href={`/articles/tags/${tag}`}>{tag}</a>
      ))}
    </FlexContainer>
  </div>
);

ArticleTile.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  tags: PropTypes.array,
  previewText: PropTypes.string
}

export default ArticleTile;