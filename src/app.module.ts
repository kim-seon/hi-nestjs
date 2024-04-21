import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
@Module({
  // 데코레이터 : 클래스에 함수 기능을 추가할 수 있음(즉, 클래스를 위해 움직이는 거)
  imports: [],
  controllers: [MoviesController], // 기본적으로 url을 가져오고 함수를 실행함(express의 라우터 같은 거)
  providers: [MoviesService],
})
export class AppModule {}
// AppModule에서 우리가 하는 모든 걸 import
