import { Field, ObjectType } from "@nestjs/graphql";
import { Test8 } from "../test8/base/Test8";

@ObjectType()
export class Test8Info implements Partial<Test8> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
