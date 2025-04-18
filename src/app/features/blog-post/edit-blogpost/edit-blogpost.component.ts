import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BlogPostService } from '../Services/blog-post.service';
import { BlogPost } from '../models/blog-post.model';
import { CategoryService } from '../../category/services/category.service';
import { Category } from '../../category/Models/category.model';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.css']
})
export class EditBlogpostComponent implements OnInit, OnDestroy{
id:string |null=null;
model?: BlogPost

categories$?:Observable<Category[]>;
selecteCategories?:string[];

routeSubscription?:Subscription;
  constructor(private route:ActivatedRoute,private blogPostService:BlogPostService, private categoryService:CategoryService){

  }
ngOnInit():void{
this.categories$=this.categoryService.GetAllCategory();
this.routeSubscription= this.route.paramMap.subscribe({
  next:(params)=>{
   this.id=params.get('id');
   if(this.id){

   this.blogPostService.getBlogPostById(this.id).subscribe({
    next:(response)=>{
      
this.model=response;
this.selecteCategories=response.categories.map(x=>x.id)
    }
   });
   }
  }
});
}
ngOnDestroy(): void {
  this.routeSubscription?.unsubscribe();
}
onFormSubmit():void
  {
    // if(this.model && this.id){
    //   var UpdateBlogPost=Upda
    // }
    console.log(this.model); 
}
}
