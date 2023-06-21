import { Field, ObjectType } from "@nestjs/graphql";

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
