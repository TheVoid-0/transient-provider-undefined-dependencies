import { Injectable, Scope } from '@nestjs/common';
import { SingletonService } from '../singleton/singleton.service';
@Injectable({ scope: Scope.TRANSIENT })
export class TransientWorkingService {
  constructor(private readonly singletonService: SingletonService) {}
}
