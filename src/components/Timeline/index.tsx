import React from 'react';

import { TimelineWrapper, Date, Description, Info, Title, Tracker } from './styles';
import { formatDate } from './utils';
import useTimeline from './hooks';
import { TimelineProps } from './types';

export default function Timeline(props: TimelineProps) {
  const { items, onClickItem } = props;

  const { handleClickItem, handleHover, hoveredIndex } = useTimeline(onClickItem);

  return (
    <TimelineWrapper>
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
    </TimelineWrapper>
  );
}
