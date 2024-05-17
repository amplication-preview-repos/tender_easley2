import { Module } from "@nestjs/common";
import { AuthorizationModuleBase } from "./base/authorization.module.base";
import { AuthorizationService } from "./authorization.service";
import { AuthorizationController } from "./authorization.controller";
import { AuthorizationResolver } from "./authorization.resolver";

@Module({
  imports: [AuthorizationModuleBase],
  controllers: [AuthorizationController],
  providers: [AuthorizationService, AuthorizationResolver],
  exports: [AuthorizationService],
})
export class AuthorizationModule {}
