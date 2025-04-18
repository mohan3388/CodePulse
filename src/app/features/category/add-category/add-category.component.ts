import { Component } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  model:AddCategoryRequest
  constructor(private categoryServices: CategoryService){
    this.model={
      name:'',
      urlHandle:''
    };
  }
  onFormSubmit(){
    
this.categoryServices.addCategory(this.model)
.subscribe({
  next:(response) =>{
 console.log('success fully');
  },
  error:(error)=>{
    console.log('failed')
  }
  
});
  }
}
