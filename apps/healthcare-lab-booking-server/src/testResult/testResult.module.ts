import { Module } from "@nestjs/common";
import { TestResultModuleBase } from "./base/testResult.module.base";
import { TestResultService } from "./testResult.service";
import { TestResultController } from "./testResult.controller";
import { TestResultResolver } from "./testResult.resolver";

@Module({
  imports: [TestResultModuleBase],
  controllers: [TestResultController],
  providers: [TestResultService, TestResultResolver],
  exports: [TestResultService],
})
export class TestResultModule {}
