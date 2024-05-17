import * as graphql from "@nestjs/graphql";
import { AuthorizationResolverBase } from "./base/authorization.resolver.base";
import { Authorization } from "./base/Authorization";
import { AuthorizationService } from "./authorization.service";

@graphql.Resolver(() => Authorization)
export class AuthorizationResolver extends AuthorizationResolverBase {
  constructor(protected readonly service: AuthorizationService) {
    super(service);
  }
}
