import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/code/code';
import { ThemeProvider } from './src/components/theme-context';
import Emphasis from './src/components/emphasis/emphasis';

// MDX 2 renders fenced code as <pre><code className="language-xx">...</code></pre>
const preToCodeBlock = (preProps) => {
  const child = preProps.children;
  if (!child || !child.props || typeof child.props.children !== 'string') {
    return null;
  }
  const { children: codeString, className = '' } = child.props;
  return {
    codeString: codeString.trim(),
    language: className.replace('language-', ''),
  };
};

const components = {
  // Only inline code reaches here; fenced blocks are handled by `pre` below
  code: props => (
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
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);
