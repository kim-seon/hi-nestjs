import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // express의 get 라우터와 같은 역할
  getHello(): string {
    // controller를 비지니스 로직과 구분 짓고 싶어함
    // controller는 그냥 url을 가져오고 function을 리턴할 뿐, 나머지 비지니스 로직은 서비스로 감
    return this.appService.getHello();
  }

  @Get('/hello') // url로 요청을 받음
  sayHello(): string {
    return this.appService.getHi();
  }
  // 데코레이터와 함수(or 클래스)는 붙어있어야 함

  @Post('/hi')
  sayHi(): string {
    return 'Hi everyone';
  }
}

// app.module은 모든 것의 root module
// module : 어플리케이션의 일부분이며, 한 가지의 역할을 하는 앱이라고 보면 됨
// ex) 인증을 담당하는 어플리케이션이 있으면 그게 users 모듈이 되는 것
// ex) 인스타그램을 만든다고 했을 때, photos 모듈이나 videos 모듈이 필요한 것
