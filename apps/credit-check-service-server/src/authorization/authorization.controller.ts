import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthorizationService } from "./authorization.service";
import { AuthorizationControllerBase } from "./base/authorization.controller.base";

@swagger.ApiTags("authorizations")
@common.Controller("authorizations")
export class AuthorizationController extends AuthorizationControllerBase {
  constructor(protected readonly service: AuthorizationService) {
    super(service);
  }
}
