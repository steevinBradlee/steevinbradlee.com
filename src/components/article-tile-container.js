import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 25px;
`;

const GridCell = styled.div``;

const ArticleTileContainer = (props) => (
  <Grid>
    {props.children.map(child => (
      <GridCell>{child}</GridCell>
    ))}
  </Grid>
);

ArticleTileContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default ArticleTileContainer;