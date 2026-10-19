import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Tag from '../tag/tag';
import kebabCase from 'lodash/kebabCase';

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
          <GatsbyImage image={getImage(props.image)} alt={props.title} />
        }
      </Link>
    </div>
    <div className='article-title'>
      <Link to={props.slug}>{props.title}</Link>
    </div>
    <div className='date'>{props.date}</div>
    <FlexContainer>
      {props.tags.map((tag, key) => (
        <Tag key={`tag-${tag}-key`} title={tag} link={`/articles/tags/${kebabCase(tag)}`}/>
      ))}
    </FlexContainer>
  </div>
);

ArticleTile.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  tags: PropTypes.array,
  previewText: PropTypes.string
}

export default ArticleTile;