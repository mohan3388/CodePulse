import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Models/category.model';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../Models/update-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model:AddCategoryRequest):Observable<void> {

return this.http.post<void>(`${environment.apiBaseUrl}/api/Categories/AddCategory`,model);
  }
  GetAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Categories/GetAll`)

  }
  getCategoryById(id:string):Observable<Category>{
   return this.http.get<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`)
  }
  UpdateCategory(id:string,updateCategoryRequest:UpdateCategoryRequest):Observable<Category>{
 return this.http.put<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`,updateCategoryRequest);
  }
  deleteCategory(id:string):Observable<Category>{
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);
  }
}
    