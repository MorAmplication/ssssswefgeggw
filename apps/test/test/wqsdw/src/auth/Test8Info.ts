import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user/base/User";

declare const Test8;

@ObjectType()
export class ENTITY_NAMEInfo implements Partial<Test8> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
