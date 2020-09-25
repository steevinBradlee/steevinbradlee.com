import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Tag from '../tag/tag';
import Dotdotdot from 'react-dotdotdot';

import './article-preview.scss';

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArticlePreview = (props) => (
  <div className='article-preview' style={props.style ? props.style : {}}>
    <div className='left'>
      <Link to={props.slug}>
        <Img fluid={props.image} />
      </Link>
    </div>
    <div className='right'>
      <div className='article-title'>
        <Link to={props.slug}>{props.title}</Link>
      </div>
      <div className='date'>03/07/20</div>
      <div className='preview-text'>
        <Dotdotdot clamp={5}>{props.previewText}</Dotdotdot></div>
      <FlexContainer>
        {props.tags.map((tag, key) => (
          <Tag key={`tag-${tag}-key`} title={tag} link={`/articles/tags/${tag}`}/>
        ))}
      </FlexContainer>
    </div>
  </div>
);

ArticlePreview.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  tags: PropTypes.array,
  previewText: PropTypes.string,
  style: PropTypes.object
}

export default ArticlePreview;