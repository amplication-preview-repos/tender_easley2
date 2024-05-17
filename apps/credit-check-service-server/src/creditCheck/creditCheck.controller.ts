import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditCheckService } from "./creditCheck.service";
import { CreditCheckControllerBase } from "./base/creditCheck.controller.base";

@swagger.ApiTags("creditChecks")
@common.Controller("creditChecks")
export class CreditCheckController extends CreditCheckControllerBase {
  constructor(protected readonly service: CreditCheckService) {
    super(service);
  }
}
