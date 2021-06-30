import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface Config {
  db: TypeOrmModuleOptions;
  secret: string;
  google: any
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
  secret: 'lolkek',
  google: {
    clientID: '679927207784-4863rhnsmgghtm5anj40gj2qfl1onuag.apps.googleusercontent.com',
    clientSecret: '6buP9AzZkbuJTs2W8QeMzYas',
    callbackURL: 'http://localhost:3000/google/redirect',
    scope: ['email', 'profile'],
  }
};
