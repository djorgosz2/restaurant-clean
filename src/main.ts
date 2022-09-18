import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {rateLimit} from 'express-rate-limit'

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      cors: true,
    });
    const configService = app.get(ConfigService);
    app.use(
      rateLimit({
        windowMs: 1000 * 60 * 60,
        max: 1000, // 1000 requests por windowMs, kept for later
        message:
          '⚠️  Too many request created from this IP, please try again after an hour',
      }),
    );

    const APP_NAME = configService.get('APP_NAME');
    const APP_DESCRIPTION = configService.get('APP_DESCRIPTION');
    const API_VERSION = configService.get('API_VERSION', 'v1');
    const options = new DocumentBuilder()
      .setTitle(APP_NAME)
      .setDescription(APP_DESCRIPTION)
      .setVersion(API_VERSION)
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    SwaggerModule.setup('/', app, document);

    Logger.log('Mapped {/, GET} Swagger api route', 'RouterExplorer');
    Logger.log('Mapped {/api, GET} Swagger api route', 'RouterExplorer');

    const HOST = configService.get('HOST', 'localhost');
    const PORT = configService.get('PORT', '3000');

    await app.listen(PORT);
    Logger.log(`🚀Server ready at http://${HOST}:${PORT} 🚀`)

    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
    }
  } catch (error) {
    Logger.error(`❌  Error starting server, ${error}`, '', 'Bootstrap', false);
    process.exit();
  }
}
bootstrap().catch(e => {
  Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false);
  throw e;
});
