import { DefaultPage } from "../DefaultPage";
import { JobList } from "../../components/JobList";

export const JobsPage = () => {
  return (
    <DefaultPage title="Jobs">
      <JobList />
    </DefaultPage>
  );
};