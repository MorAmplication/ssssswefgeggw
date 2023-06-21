import { Module } from "@nestjs/common";
import { Test8ModuleBase } from "./base/test8.module.base";
import { Test8Service } from "./test8.service";
import { Test8Controller } from "./test8.controller";
import { Test8Resolver } from "./test8.resolver";

@Module({
  imports: [Test8ModuleBase],
  controllers: [Test8Controller],
  providers: [Test8Service, Test8Resolver],
  exports: [Test8Service],
})
export class Test8Module {}
