/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteTest8Args } from "./DeleteTest8Args";
import { Test8CountArgs } from "./Test8CountArgs";
import { Test8FindManyArgs } from "./Test8FindManyArgs";
import { Test8FindUniqueArgs } from "./Test8FindUniqueArgs";
import { Test8 } from "./Test8";
import { Test8Service } from "../test8.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Test8)
export class Test8ResolverBase {
  constructor(
    protected readonly service: Test8Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Test8",
    action: "read",
    possession: "any",
  })
  async _test8sMeta(
    @graphql.Args() args: Test8CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Test8])
  @nestAccessControl.UseRoles({
    resource: "Test8",
    action: "read",
    possession: "any",
  })
  async test8s(@graphql.Args() args: Test8FindManyArgs): Promise<Test8[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Test8, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Test8",
    action: "read",
    possession: "own",
  })
  async test8(
    @graphql.Args() args: Test8FindUniqueArgs
  ): Promise<Test8 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Test8)
  @nestAccessControl.UseRoles({
    resource: "Test8",
    action: "delete",
    possession: "any",
  })
  async deleteTest8(
    @graphql.Args() args: DeleteTest8Args
  ): Promise<Test8 | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}