import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface Config {
  db: TypeOrmModuleOptions;
  secret: string;
}

export const env: Config = {
  db: {
    username: 'root',
    password: 'root',
    database: 'google',
    host: 'localhost',
    port: 3306,
    synchronize: true,
    type: 'mysql',
    entities: ["dist/**/*.entity{.ts,.js}"]
  },
  secret: 'lolkek'
};
