import { SVGProps } from 'react';

type Props = {
  name: string;
  props?: SVGProps<SVGSVGElement>;
  style?: React.CSSProperties;
};

export default function Icon({ name, style, ...props }: Props) {
  return (
    <svg
      className={`icon icon-${name}`}
      {...props}
      style={style}
    >
      <use href={`sprite.svg#icon-${name}`} />
    </svg>
  );
}
