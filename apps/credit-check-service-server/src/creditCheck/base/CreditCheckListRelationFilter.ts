/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CreditCheckWhereInput } from "./CreditCheckWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreditCheckListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreditCheckWhereInput,
  })
  @ValidateNested()
  @Type(() => CreditCheckWhereInput)
  @IsOptional()
  @Field(() => CreditCheckWhereInput, {
    nullable: true,
  })
  every?: CreditCheckWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreditCheckWhereInput,
  })
  @ValidateNested()
  @Type(() => CreditCheckWhereInput)
  @IsOptional()
  @Field(() => CreditCheckWhereInput, {
    nullable: true,
  })
  some?: CreditCheckWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreditCheckWhereInput,
  })
  @ValidateNested()
  @Type(() => CreditCheckWhereInput)
  @IsOptional()
  @Field(() => CreditCheckWhereInput, {
    nullable: true,
  })
  none?: CreditCheckWhereInput;
}
export { CreditCheckListRelationFilter as CreditCheckListRelationFilter };
