import * as graphql from "@nestjs/graphql";
import { CreditCheckResolverBase } from "./base/creditCheck.resolver.base";
import { CreditCheck } from "./base/CreditCheck";
import { CreditCheckService } from "./creditCheck.service";

@graphql.Resolver(() => CreditCheck)
export class CreditCheckResolver extends CreditCheckResolverBase {
  constructor(protected readonly service: CreditCheckService) {
    super(service);
  }
}
