import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../Models/category.model';
import { UpdateCategoryRequest } from '../Models/update-category-request.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy{
  id:string | null =null;
  paramSubscription?:Subscription;
  editCategorySubscription?:Subscription;
  category?:Category;



constructor(private route:ActivatedRoute,private categoryService:CategoryService, private router:Router){

}
ngOnInit(): void {
  this.paramSubscription= this.route.paramMap.subscribe({
    next:(params)=>{
     this.id= params.get('id');
     if(this.id){
     this.categoryService.getCategoryById(this.id).subscribe({
      next:(response)=>{
     this.category=response;
      }
     });
     
     }
    }

 
  })

}

onFormSubmit():void
{
 const updateCategoryRequest: UpdateCategoryRequest=
 {
  name:this.category?.name?? '',
  urlHandle:this.category?.urlHandle?? '',
 };
 if(this.id) 
 {
 this.categoryService.UpdateCategory(this.id, updateCategoryRequest).subscribe({
  next:(response)=>{
    this.router.navigateByUrl('/admin/categories');
  }
 })
 }
}
 onDelete():void{
  if(this.id){
  this.categoryService.deleteCategory(this.id).subscribe({
    next: (response)=>{
    this.router.navigateByUrl('/admin/categories');
    }
  });
  }

}

ngOnDestroy(): void {
  this.paramSubscription?.unsubscribe();
  this.editCategorySubscription?.unsubscribe();
}
}


