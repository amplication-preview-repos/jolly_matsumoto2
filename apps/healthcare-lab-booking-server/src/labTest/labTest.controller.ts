import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LabTestService } from "./labTest.service";
import { LabTestControllerBase } from "./base/labTest.controller.base";

@swagger.ApiTags("labTests")
@common.Controller("labTests")
export class LabTestController extends LabTestControllerBase {
  constructor(protected readonly service: LabTestService) {
    super(service);
  }
}
