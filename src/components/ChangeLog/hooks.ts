import React, { useState } from 'react';

export default function useChangeLog(onClickItem?: (index: number) => void) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  function handleHover(event: React.MouseEvent<HTMLElement>) {
    if (event.type === 'mouseleave') {
      setHoveredIndex(-1);
      return;
    }

    const index = event.currentTarget?.getAttribute('aria-valuenow');

    if (index === null || index === undefined) setHoveredIndex(-1);
    else setHoveredIndex(Number(index));
  }

  function handleClickItem(event: React.MouseEvent<HTMLElement>) {
    const index = event.currentTarget?.getAttribute('aria-valuenow') || '-1';

    if (onClickItem) onClickItem(Number(index));
  }

  return { handleClickItem, handleHover, hoveredIndex };
}
