import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingletonService } from './singleton/singleton.service';
import { TransientService } from './transient/transient.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SingletonService, TransientService],
  exports: [SingletonService, TransientService],
})
export class AppModule {}
