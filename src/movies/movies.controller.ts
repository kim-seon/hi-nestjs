import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search') // search 부분이 id보다 밑에 있으면 search를 id로 판단
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie with a made after: ${searchingYear}`;
  }

  @Get(':id') // 무언가 필요하면 요청해야만 함
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);
    //
    // @Params 데코레이터를 써야만 url에 있는 id parameter를 원하는 것을 앎(위랑 아래 Params 안이랑 이름이 같아야 함)
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.update(movieId, updateData);
  }

  // @Put() // 전체 movie 업데이트
  // @Patch() // movie 일부분 업데이트
}
