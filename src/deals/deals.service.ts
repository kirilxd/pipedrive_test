import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { DealDto } from './dto/deal.dto';

@Injectable()
export class DealsService {
  private readonly logger = new Logger('DealsService');
  constructor(private readonly httpService: HttpService) {}
  async findAll(): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<any[]>(`/deals?api_token=${process.env.API_TOKEN}`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async create(dealDto: DealDto): Promise<any[]> {
    this.logger.log(`Request object: ${JSON.stringify(dealDto)}`);
    const { data } = await firstValueFrom(
      this.httpService
        .post<any[]>(`/deals?api_token=${process.env.API_TOKEN}`, dealDto)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async update(id: number, dealDto: DealDto): Promise<any[]> {
    this.logger.log(`id: ${id}, request object: ${JSON.stringify(dealDto)}`);
    const { data } = await firstValueFrom(
      this.httpService
        .put<any[]>(`/deals/${id}?api_token=${process.env.API_TOKEN}`, dealDto)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}
