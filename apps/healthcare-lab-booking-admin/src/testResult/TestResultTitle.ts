import { TestResult as TTestResult } from "../api/testResult/TestResult";

export const TESTRESULT_TITLE_FIELD = "id";

export const TestResultTitle = (record: TTestResult): string => {
  return record.id?.toString() || String(record.id);
};
