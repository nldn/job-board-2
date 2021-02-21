import { FC, SVGProps } from 'react';

import { Logos } from './logos';

interface CompanyLogoProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof Logos;
}

export const CompanyLogo: FC<CompanyLogoProps> = ({ name, ...props }) => {
  let Logo = Logos[name];

  return <Logo { ...props } />
};