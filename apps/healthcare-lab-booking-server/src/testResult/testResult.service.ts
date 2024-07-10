import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestResultServiceBase } from "./base/testResult.service.base";

@Injectable()
export class TestResultService extends TestResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
