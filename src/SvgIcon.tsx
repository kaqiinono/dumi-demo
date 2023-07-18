import React from 'react';
import Icon from '../Icon';

const SvgIcon = ({ className, width, height, viewBox, IconSvg, fill }: any) => {
  return (
    <Icon
      className={className}
      component={() =>
        IconSvg({
          width: width || 24,
          height: height || 24,
          fill: fill || 'currentColor',
          viewBox,
        })
      }
    />
  );
};

export default SvgIcon;
