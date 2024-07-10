import * as graphql from "@nestjs/graphql";
import { LabTestResolverBase } from "./base/labTest.resolver.base";
import { LabTest } from "./base/LabTest";
import { LabTestService } from "./labTest.service";

@graphql.Resolver(() => LabTest)
export class LabTestResolver extends LabTestResolverBase {
  constructor(protected readonly service: LabTestService) {
    super(service);
  }
}
