import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 기본적으로 클래스이며, 함수를 가지고 있음
  // service는 실제로 function을 가지는 부분
  // 비즈니스 로직을 실행하는 역할

  getHello(): string {
    return 'Hello Nest!';
  }
  getHi(): string {
    return 'Hi Nest';
  }
}
