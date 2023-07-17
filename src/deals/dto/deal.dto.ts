import { IsDate, IsNumber, IsString } from 'class-validator';

export class DealDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly value: string;
  @IsString()
  readonly currency: string;
  @IsNumber()
  readonly user_id: number;
  @IsNumber()
  readonly person_id: number;
  @IsNumber()
  readonly org_id: number;
  @IsNumber()
  readonly pipeline_id: number;
  @IsNumber()
  readonly stage_id: number;
  @IsString()
  readonly status: string;
  @IsDate()
  readonly expected_close_date: Date;
  @IsNumber()
  readonly probability: number;
  @IsString()
  readonly lost_reason: string;
  @IsString()
  readonly visible_to: string;
  @IsString()
  readonly add_time: string;
}
