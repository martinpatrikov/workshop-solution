import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';



@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent
  ],
  providers: [
    PostService
  ],
})
export class PostModule { }
