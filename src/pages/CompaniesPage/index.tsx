import { DefaultPage } from '../DefaultPage';
import { CompanyList } from '../../components/CompanyList';

export const CompaniesPage = () => {
  return (
    <DefaultPage title="Companies">
      <CompanyList />
    </DefaultPage>
  );
};