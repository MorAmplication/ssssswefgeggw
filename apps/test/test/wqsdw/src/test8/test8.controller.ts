import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Test8Service } from "./test8.service";
import { Test8ControllerBase } from "./base/test8.controller.base";

@swagger.ApiTags("test8s")
@common.Controller("test8s")
export class Test8Controller extends Test8ControllerBase {
  constructor(protected readonly service: Test8Service) {
    super(service);
  }
}
