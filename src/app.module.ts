import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomepageController } from './homepage/homepage.controller';
import { HomepageService } from './homepage/homepage.service';
import { HomepageModule } from './homepage/homepage.module';
import { AboutController } from './about/about.controller';
import { AboutService } from './about/about.service';
import { AboutModule } from './about/about.module';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { ProjectsModule } from './projects/projects.module';
import { GaleriController } from './galeri/galeri.controller';
import { ArchiveController } from './archive/archive.controller';
import { ArchiveService } from './archive/archive.service';
import { ArchiveModule } from './archive/archive.module';

@Module({
  imports: [HomepageModule, AboutModule, ProjectsModule, ArchiveModule],
  controllers: [AppController, HomepageController, AboutController, ProjectsController, GaleriController, ArchiveController],
  providers: [AppService, HomepageService, AboutService, ProjectsService, ArchiveService],
})
export class AppModule {}
