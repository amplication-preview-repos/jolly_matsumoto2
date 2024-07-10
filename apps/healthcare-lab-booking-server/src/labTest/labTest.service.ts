import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabTestServiceBase } from "./base/labTest.service.base";

@Injectable()
export class LabTestService extends LabTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
