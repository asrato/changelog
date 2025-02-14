export interface HighlightedStyledComponent {
  highlightColor: string;
  highlighted?: boolean;
}

interface TimelineItem {
  date: Date;
  description: string;
  title: string;
}

export interface TimelineProps {
  dateFormat?: string;
  highlightColor?: string;
  highlightedIndex?: number;
  items: TimelineItem[];
  onClickItem?: (index: number) => void;
}
