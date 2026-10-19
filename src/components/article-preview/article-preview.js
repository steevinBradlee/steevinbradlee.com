import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Tag from '../tag/tag';
import kebabCase from 'lodash/kebabCase';
import './article-preview.scss';

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArticlePreview = (props) => {
  return (
    <div className='article-preview' style={props.style ? props.style : {}}>
      <div className='left'>
        <Link to={props.slug}>
          {props.image &&
            <GatsbyImage image={getImage(props.image)} alt={props.title} />
          }
        </Link>
      </div>
      <div className='right'>
        <div className='article-title'>
          <Link to={props.slug}>{props.title}</Link>
        </div>
        <div className='date'>{props.date}</div>
        <div className='preview-text'>
          <div className='preview-text-clamp'>{props.previewText}</div>
        </div>
        <FlexContainer>
          {props.tags.map((tag, key) => (
            <Tag key={`tag-${tag}-key`} title={tag} link={`/articles/tags/${kebabCase(tag)}`}/>
          ))}
        </FlexContainer>
      </div>
    </div>
  );
};

ArticlePreview.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  tags: PropTypes.array,
  previewText: PropTypes.string,
  style: PropTypes.object
}

export default ArticlePreview;