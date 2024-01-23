import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryModel, SubCategoryModel } from "../models/course";
import { BASE_URL } from "../constant/uri";
import { Subject } from "rxjs";

@Injectable()
export class CategoryService{

    isCategoryAddedSubject = new Subject<any>()
    isCategoryAdded = this.isCategoryAddedSubject.asObservable()

    constructor(private http : HttpClient){}

    public setAddedCategory(data : any){
        this.isCategoryAddedSubject.next(data)
    }

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