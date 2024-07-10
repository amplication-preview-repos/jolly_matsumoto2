import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestResultService } from "./testResult.service";
import { TestResultControllerBase } from "./base/testResult.controller.base";

@swagger.ApiTags("testResults")
@common.Controller("testResults")
export class TestResultController extends TestResultControllerBase {
  constructor(protected readonly service: TestResultService) {
    super(service);
  }
}
