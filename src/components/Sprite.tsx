import { SVGProps } from 'react';

type Props = {
  name: string;
  props?: SVGProps<SVGSVGElement>;
  style: React.CSSProperties;
};

export default function Sprite({ name, style, ...props }: Props) {
  return (
    <svg {...props} style={style} xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <use href={`sprite.svg#${name}`} />
    </svg>
  );
}
