import {Component} from "@angular/core";
import heros from 'data.js';

@Component({
  //标签
  selector:'my',
 //模板
  templateUrl:'my.html',
  //样式集
  styleUrls:['']
})
//导出一个组件
export class My{
  title='新组建';
  data=heros;
  show(hero){
    console.log(hero);
  }
}
