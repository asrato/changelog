import styled from 'styled-components';
import { HighlightedStyledComponent } from './types';

export const ChangeLogWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 40px 1fr;
  font-variant-numeric: lining-nums;

  i:first-of-type {
    &::before {
      height: calc(100% - 6px);
      top: 6px;
    }
  }

  i:last-of-type {
    &::before {
      height: 6px;
      top: 0;
    }
  }
`;

export const Date = styled.span<HighlightedStyledComponent>`
  width: 100%;
  min-height: 32px;
  font-weight: 500;
  text-align: right;
  color: ${({ highlighted }) => (highlighted ? '#d4d4d4' : '#9aa0a6')};
  -webkit-text-stroke: ${({ highlighted }) => (highlighted ? '1px #d4d4d4' : '0 #9aa0a6')};
`;

export const Tracker = styled.i<HighlightedStyledComponent>`
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    width: 2px;
    height: 100%;
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #9aa0a6;
  }

  &::after {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    content: '';
    display: block;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ highlighted }) => (highlighted ? '#d4d4d4' : '#9aa0a6')};
  }
`;

export const Title = styled.span`
  width: 100%;
`;

export const Description = styled.span`
  width: 100%;
  margin-bottom: 4px;
`;

export const Info = styled.div<HighlightedStyledComponent>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  ${Title} {
    color: ${({ highlighted }) => (highlighted ? '#d4d4d4' : '#9aa0a6')};
    -webkit-text-stroke: ${({ highlighted }) => (highlighted ? '1px #d4d4d4' : '0 #9aa0a6')};
  }

  ${Description} {
    opacity: ${({ highlighted }) => (highlighted ? '1' : '0.5')};
  }
`;
