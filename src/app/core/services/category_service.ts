import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryModel, SubCategoryModel } from "../models/course";
import { environment } from "environments/environment";


const BASE_URL = environment.BASE_URL

@Injectable()
export class CategoryService{

    constructor(private http : HttpClient){}

    addCategory(data : CategoryModel, route : string){
        return this.http.post<{newCategory : CategoryModel}>(`${BASE_URL}/${route}/add-category`,data)
    }

    addSubCategory(data : SubCategoryModel, route : string){
        return this.http.post<{newSubCategory : SubCategoryModel}>(`${BASE_URL}/${route}/add-sub-category`,data)
    }

    getCategory(route : string){
        return this.http.get<{categories : CategoryModel[]}>(`${BASE_URL}/${route}/category`)
    }

    getSubCategory(route : string){
        return this.http.get<{subCategories : SubCategoryModel[]}>(`${BASE_URL}/${route}/sub-category`)
    }
    
}