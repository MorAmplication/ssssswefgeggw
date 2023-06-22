import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Test8ServiceBase } from "./base/test8.service.base";

@Injectable()
export class Test8Service extends Test8ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
