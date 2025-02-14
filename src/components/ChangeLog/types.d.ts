export interface HighlightedStyledComponent {
  highlighted?: boolean;
}

interface ChangeLogItem {
  date: Date;
  description: string;
  title: string;
}

export interface ChangeLogProps {
  items: ChangeLogItem[];
  onClickItem?: (index: number) => void;
}
