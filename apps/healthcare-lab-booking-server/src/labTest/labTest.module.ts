import { Module } from "@nestjs/common";
import { LabTestModuleBase } from "./base/labTest.module.base";
import { LabTestService } from "./labTest.service";
import { LabTestController } from "./labTest.controller";
import { LabTestResolver } from "./labTest.resolver";

@Module({
  imports: [LabTestModuleBase],
  controllers: [LabTestController],
  providers: [LabTestService, LabTestResolver],
  exports: [LabTestService],
})
export class LabTestModule {}
