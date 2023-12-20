import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _order: any;
  public get order(): any {
    return this._order;
  }
  public set order(value: any) {
    this._order = value;
  }
  private _assetDaily: any;
  public get assetDaily(): any {
    return this._assetDaily;
  }
  public set assetDaily(value: any) {
    this._assetDaily = value;
  }
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: any) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
