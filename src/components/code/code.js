import React from 'react';
import { Highlight, Prism, themes } from 'prism-react-renderer';
import './code.scss';

// prism-react-renderer bundles a limited set of languages; register extras on its Prism instance
/* global globalThis */
globalThis.Prism = Prism;
require('prismjs/components/prism-powershell');

const Code = ({ codeString, language }) => {
  return (
    <Highlight
      code={codeString}
      language={language}
      theme={themes.nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className='gatsby-highlight' data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {/* <span className='line-number-style'>{i + 1}</span> */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
