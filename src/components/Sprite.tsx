import { SVGProps } from 'react';
// import '../assets/svgs/plus.svg';
// import '../assets/svgs/trash.svg';

type Props = {
  name: string;
  className?: string;
  props?: SVGProps<SVGSVGElement>;
};

export default function Sprite({ name, className, ...props }: Props) {
  return (
    <svg {...props} className={className} fill="black" xmlns="http://www.w3.org/2000/svg">
      <use href={`../assets/svgs/icon.svg#${name}`} />
    </svg>
  );
}
