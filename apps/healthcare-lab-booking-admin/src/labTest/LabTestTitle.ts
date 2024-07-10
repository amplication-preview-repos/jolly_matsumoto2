import { LabTest as TLabTest } from "../api/labTest/LabTest";

export const LABTEST_TITLE_FIELD = "id";

export const LabTestTitle = (record: TLabTest): string => {
  return record.id?.toString() || String(record.id);
};
