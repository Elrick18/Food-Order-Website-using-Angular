import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id==id)!;
  }

  getAllFoodbyTag(tag:string): Foods[]{
    if(tag== 'All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return[
      { name: 'All', count:8},
      { name: 'FastFood', count:6},
      { name: 'Pizza', count:1},
      { name: 'Lunch', count:3},
      { name: 'fries', count:1},
      { name: 'soup', count:1},
      { name: 'Burger', count:1},
      { name: 'Pasta', count:1}
    ]
  }


  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Burger',
        cookTime:'15-20',
        price:10,
        favorite:false,
        origins:['United States','Germany'],
        star:4.5,
        imageUrl: './assets/food1.jpg', /*need to remove this*/
        tags: ['FastFood','Burger']
      },
      {
        id:2,
        name:'Pizza',
        cookTime:'10-20',
        price:15,
        favorite:false,
        origins:['Italy'],
        star:5,
        imageUrl: '/assets/food2.jpg',
        tags: ['FastFood','Pizza','Lunch']
      },
      {
        id:3,
        name:'MeatBall',
        cookTime:'15-25',
        price:13,
        favorite:false,
        origins:['Persia','Middle East','China'],
        star:4.5,
        imageUrl: '/assets/food3.jpg',
        tags: ['MeatBall','Lunch']
      },
      {
        id:4,
        name:'Fries',
        cookTime:'15-20',
        price:3,
        favorite:true,
        origins:['Belgium','France','India'],
        star:4.5,
        imageUrl: '/assets/food4.jpg',
        tags: ['FastFood','fries']
      },
      {
        id:5,
        name:'vegitable soup',
        cookTime:'10-15',
        price:10,
        favorite:false,
        origins:['Germany','India'],
        star:4,
        imageUrl: '/assets/food5.jpg',
        tags: ['FastFood','soup']
      },
      {
        id:6,
        name:'Biryani',
        cookTime:'20-30',
        price:17,
        favorite:true,
        origins:['India'],
        star:5,
        imageUrl: '/assets/food6.jpg',
        tags: ['Biryani','Lunch']
      },
      {
        id:7,
        name:'Pasta',
        cookTime:'10-20',
        price:8,
        favorite:false,
        origins:['Italy'],
        star:4.5,
        imageUrl: '/assets/food7.jpg',
        tags: ['FastFood','Pasta']
      },
      {
        id:8,
        name:'Noodles',
        cookTime:'10-20',
        price:13,
        favorite:true,
        origins:['China'],
        star:4.5,
        imageUrl: '/assets/food8.jpg',
        tags: ['FastFood','Noodles']
      }
    ]
  }
}
