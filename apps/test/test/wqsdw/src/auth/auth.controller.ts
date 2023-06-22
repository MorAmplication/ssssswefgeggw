import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "../static/auth/auth.service";
import { Credentials } from "../static/auth/Credentials";
import { Test8Info } from "./Test8Info";

@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("login")
  async login(@Body() body: Credentials): Promise<Test8Info> {
    return this.authService.login(body);
  }
}
