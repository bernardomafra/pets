export type BadgeProps = {
  key: string;
  label: string;
  selected?: boolean;
  onClickAction?: (param: any) => void;
};

export type BadgeStyleProps = {
  selected?: boolean | false;
};
