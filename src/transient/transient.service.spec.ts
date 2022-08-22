import { INQUIRER } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { SingletonService } from '../singleton/singleton.service';
import { TransientWorkingService } from './transient-working.service';
import { TransientService } from './transient.service';

describe('TransientService', () => {
  let transientService: TransientService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [TransientService],
    })
      .useMocker((token) => {
        console.log('INJECTING', token);
        if (token === SingletonService) {
          return {};
        }
        if (token === INQUIRER) {
          return 'TestingModule';
        }
      })
      .compile();

    transientService = await app.resolve(TransientService);
  });

  it('should have dependencies injected', () => {
    expect(transientService['singletonService']).toBeDefined();
  });
});

describe('TransientWorkingService', () => {
  let transientService: TransientWorkingService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [TransientWorkingService],
    })
      .useMocker((token) => {
        if (token === SingletonService) {
          return {};
        }
      })
      .compile();

    transientService = await app.resolve(TransientWorkingService);
  });

  it('should have dependencies injected', () => {
    expect(transientService['singletonService']).toBeDefined();
  });
});
