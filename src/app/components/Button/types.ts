export type ButtonSizes = 'thin' | 'fat';

export type ButtonProps = {
  children: Element;
  backgroundColor?: string;
  size?: ButtonSizes;
};

export type ButtonStyleContainerProps = {
  backgroundColor?: string;
  size?: ButtonSizes;
};
