import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';
import { getShadowRoot } from 'rc-util/lib/Dom/shadow';
import warn from 'rc-util/lib/warning';
import React, { useContext, useEffect } from 'react';
import IconContext from './Context';

export const iconStyles = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
};

export function warning(valid: boolean, message: string) {
  warn(valid, `[@dp/icons] ${message}`);
}

export const useInsertStyles = (eleRef: React.RefObject<HTMLElement>) => {
  const { csp, prefixCls } = useContext(IconContext);
  let mergedStyleStr = iconStyles;

  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }

  useEffect(() => {
    const ele = eleRef.current;
    const shadowRoot = getShadowRoot(ele as Node);

    updateCSS(mergedStyleStr, '@ant-design-icons', {
      prepend: true,
      csp,
      attachTo: shadowRoot,
    });
  }, []);
};
