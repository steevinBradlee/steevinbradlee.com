import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby';
import _ from 'lodash';
import styled from 'styled-components';

const Tag = styled.div`
  margin-bottom: 3px;
  > a {
    text-decoration: none;
    color: black;

    > span:first-child {
      padding-right: 10px;
    }

    > span:last-child {
      padding: 0px 4px;
      background-color: darkgray;
    }
  }
`;

const TagsList = () => {
  return (
    <StaticQuery
      query={graphql`
        query TagsQuery {
          allMdx {
            group(field: frontmatter___tags) {
              tag: fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.allMdx.group.map(({tag, totalCount}) => (
            <Tag>
              <Link to={`/articles/tags/${_.kebabCase(tag)}`}>
                <span>{tag}</span>
                <span>{totalCount}</span>
              </Link>
            </Tag>
          ))}
        </div>
      )}
    />
  )
}

export default TagsList;