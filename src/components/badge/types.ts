export type BadgeProps = {
  name: string;
  label: string;
  selected?: boolean;
  onClickAction?: (param: any) => void;
};

export type BadgeStyleProps = {
  selected?: boolean | false;
};
