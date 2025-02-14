import React from 'react';

import { TimelineWrapper, Date, Description, Info, Title, Tracker } from './styles';
import { formatDate } from './utils';
import useTimeline from './hooks';
import { TimelineProps } from './types';

export default function Timeline(props: TimelineProps) {
  const { dateFormat = 'DD-MM-YYYY HH:mm', highlightColor = '#d4d4d4', highlightedIndex, items, onClickItem } = props;

  const { handleClickItem, handleHover, hoveredIndex } = useTimeline(onClickItem);

  return (
    <TimelineWrapper>
      {items.map((item, index) => {
        const { date, description, title } = item;

        return (
          <React.Fragment key={index}>
            <Date
              highlightColor={highlightColor}
              onClick={handleClickItem}
              highlighted={index === hoveredIndex || highlightedIndex === index}
              aria-valuenow={index}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {formatDate(date, dateFormat)}
            </Date>
            <Tracker
              highlightColor={highlightColor}
              onClick={handleClickItem}
              highlighted={index === hoveredIndex || highlightedIndex === index}
              aria-valuenow={index}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            />
            <Info
              highlightColor={highlightColor}
              onClick={onClickItem && handleClickItem}
              highlighted={index === hoveredIndex || highlightedIndex === index}
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
