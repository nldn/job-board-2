import { Logos } from "../components/CompanyLogo/logos";

export type CompanyType = {
  id: string;
  name: string;
  description: string;
  logo: keyof typeof Logos;
};