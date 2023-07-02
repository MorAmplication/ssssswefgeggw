import * as graphql from "@nestjs/graphql";
import { Test8ResolverBase } from "./base/test8.resolver.base";
import { Test8 } from "./base/Test8";
import { Test8Service } from "./test8.service";

@graphql.Resolver(() => Test8)
export class Test8Resolver extends Test8ResolverBase {
  constructor(protected readonly service: Test8Service) {
    super(service);
  }
}
