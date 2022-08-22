import { Inject, Injectable, Scope } from '@nestjs/common';
import { INQUIRER } from '@nestjs/core';
import { SingletonService } from '../singleton/singleton.service';
@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {
  constructor(
    @Inject(INQUIRER) private readonly inquiredBy: object,
    private readonly singletonService: SingletonService,
  ) {}
}
