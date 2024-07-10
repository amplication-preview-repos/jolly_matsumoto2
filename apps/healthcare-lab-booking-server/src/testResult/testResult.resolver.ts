import * as graphql from "@nestjs/graphql";
import { TestResultResolverBase } from "./base/testResult.resolver.base";
import { TestResult } from "./base/TestResult";
import { TestResultService } from "./testResult.service";

@graphql.Resolver(() => TestResult)
export class TestResultResolver extends TestResultResolverBase {
  constructor(protected readonly service: TestResultService) {
    super(service);
  }
}
