import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({

  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }), //Se trae las variables de entorno (SIEMRE VA AL INICIO)
    PokemonModule,
    MongooseModule.forRoot(process.env.MONGODB),
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
