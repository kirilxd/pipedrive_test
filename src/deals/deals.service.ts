import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, Observable } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { DealDto } from './dto/deal.dto';

@Injectable()
export class DealsService {
  constructor(private readonly httpService: HttpService) {}
  async findAll(): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<any[]>(`/deals?api_token=${process.env.API_TOKEN}`)
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async create(dealDto: DealDto): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .post<any[]>(
          `/deals?api_token=${process.env.API_TOKEN}`,
          dealDto,
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async update(id: number, dealDto: DealDto): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .put<any[]>(
          `/deals/${id}?api_token=${process.env.API_TOKEN}`,
          dealDto,
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}
