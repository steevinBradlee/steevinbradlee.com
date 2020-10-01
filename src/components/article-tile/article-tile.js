import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Tag from '../tag/tag';

const _ = require("lodash");

import './article-tile.scss';

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArticleTile = (props) => (
  <div className='article-tile'>
    <div className='article-image-container' style={{overflow: 'hidden'}}>
      <Link to={props.slug}>
        {props.image &&
          <Img fluid={props.image} />
        }
      </Link>
    </div>
    <div className='article-title'>
      <Link to={props.slug}>{props.title}</Link>
    </div>
    <div className='date'>03/07/20</div>
    <FlexContainer>
      {props.tags.map((tag, key) => (
        <Tag key={`tag-${tag}-key`} title={tag} link={`/articles/tags/${_.kebabCase(tag)}`}/>
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