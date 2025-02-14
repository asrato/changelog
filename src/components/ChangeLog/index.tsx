import React from 'react';

import { ChangeLogWrapper, Date, Description, Info, Title, Tracker } from './styles';
import { ChangeLogProps } from './types';
import { formatDate } from './utils';
import useChangeLog from './hooks';

export default function ChangeLog(props: ChangeLogProps) {
  const { items, onClickItem } = props;

  const { handleClickItem, handleHover, hoveredIndex } = useChangeLog(onClickItem);

  return (
    <ChangeLogWrapper>
      {items.map((item, index) => {
        const { date, description, title } = item;

        return (
          <React.Fragment key={index}>
            <Date
              onClick={handleClickItem}
              highlighted={index === hoveredIndex}
              aria-valuenow={index}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {formatDate(date, 'DD-MM-YYYY HH:mm')}
            </Date>
            <Tracker
              onClick={handleClickItem}
              highlighted={index === hoveredIndex}
              aria-valuenow={index}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            />
            <Info
              onClick={handleClickItem}
              highlighted={index === hoveredIndex}
              aria-valuenow={index}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Info>
          </React.Fragment>
        );
      })}
    </ChangeLogWrapper>
  );
}
