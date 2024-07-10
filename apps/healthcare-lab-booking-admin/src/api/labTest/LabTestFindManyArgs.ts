import { LabTestWhereInput } from "./LabTestWhereInput";
import { LabTestOrderByInput } from "./LabTestOrderByInput";

export type LabTestFindManyArgs = {
  where?: LabTestWhereInput;
  orderBy?: Array<LabTestOrderByInput>;
  skip?: number;
  take?: number;
};
