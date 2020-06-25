import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 20px;
  row-gap: 25px;

  @media (max-width: 550px) {
    display: block;

    > div {
      padding-bottom: 17px;
    }
  }
`;

const ArticleTileContainer = (props) => (
  <Grid>
    {props.children.map(child => (
      <div>{child}</div>
    ))}
  </Grid>
);

ArticleTileContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default ArticleTileContainer;