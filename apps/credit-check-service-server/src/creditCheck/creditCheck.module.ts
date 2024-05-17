import { Module } from "@nestjs/common";
import { CreditCheckModuleBase } from "./base/creditCheck.module.base";
import { CreditCheckService } from "./creditCheck.service";
import { CreditCheckController } from "./creditCheck.controller";
import { CreditCheckResolver } from "./creditCheck.resolver";

@Module({
  imports: [CreditCheckModuleBase],
  controllers: [CreditCheckController],
  providers: [CreditCheckService, CreditCheckResolver],
  exports: [CreditCheckService],
})
export class CreditCheckModule {}
