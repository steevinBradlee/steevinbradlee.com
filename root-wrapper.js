import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Code from './src/components/code/code';
import { ThemeProvider } from './src/components/theme-context';
import { preToCodeBlock } from 'mdx-utils';
import Emphasis from './src/components/emphasis/emphasis';

const components = {
  'p.inlineCode': props => (
    <code style={{ backgroundColor: 'lightgray' }} {...props} />
  ),
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } 
    else {
      return <pre {...preProps} />
    }
  },
  Emphasis
  /* pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className && props.className.replace('language-', '')
          }
          {...props}
        />
      );
    }
  }, */
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);