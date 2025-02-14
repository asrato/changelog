export interface HighlightedStyledComponent {
  highlighted?: boolean;
}

interface TimelineItem {
  date: Date;
  description: string;
  title: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  onClickItem?: (index: number) => void;
}
