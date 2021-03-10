export type BadgeProps = {
  petType?: string;
  label: string;
  selected?: boolean;
  onClickAction?: (param: any) => void;
};

export type BadgeStyleProps = {
  selected?: boolean | false;
  hasIcon?: boolean | false;
};
