import { SVGProps } from 'react';


function Icon({ name, className='', ...props }: { name: string} & SVGProps<SVGSVGElement>) {
  return (
    <svg className={`icon icon-${name} ${className}`} {...props}>
      <use href={`sprite.svg#icon-${name}`} />
    </svg>
  );
}


export default Icon;
