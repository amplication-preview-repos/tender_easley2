import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthorizationServiceBase } from "./base/authorization.service.base";

@Injectable()
export class AuthorizationService extends AuthorizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
