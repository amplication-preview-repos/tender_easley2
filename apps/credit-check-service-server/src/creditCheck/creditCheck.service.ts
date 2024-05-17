import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditCheckServiceBase } from "./base/creditCheck.service.base";

@Injectable()
export class CreditCheckService extends CreditCheckServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
