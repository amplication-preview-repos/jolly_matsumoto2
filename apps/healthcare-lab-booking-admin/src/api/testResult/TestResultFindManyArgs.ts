import { TestResultWhereInput } from "./TestResultWhereInput";
import { TestResultOrderByInput } from "./TestResultOrderByInput";

export type TestResultFindManyArgs = {
  where?: TestResultWhereInput;
  orderBy?: Array<TestResultOrderByInput>;
  skip?: number;
  take?: number;
};
