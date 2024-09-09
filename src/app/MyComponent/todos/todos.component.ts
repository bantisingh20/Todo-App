import { Component ,OnInit ,ViewChild } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Todos} from './Todos'


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule ,FormsModule ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
   
 Todolist = [
  {
    title:'Dinner'
    ,active : true
    ,status:'Close'
     
  }

]
   
 
// use to load function after page load
ngOnInit(): void {
  this.loadTodos();
}
 
loadTodos(): void {
  const storedTodo = localStorage.getItem('Todolist');
  // Parse the JSON string to an array. If there's no data, use an empty array.
  this.Todolist = storedTodo ? JSON.parse(storedTodo) : [];
}

newTodo: string = ''; 
currentTodoIndex: number | null = null;

addTodo() {
  if (this.newTodo.trim()) {
   
    if(this.currentTodoIndex === null){
      this.Todolist.push({ title: this.newTodo ,active :true ,status:'Close' });
      this.newTodo = ''; 
      localStorage.setItem('Todolist', JSON.stringify(this.Todolist));

      
    }
    else{
       
      this.Todolist[this.currentTodoIndex].title = this.newTodo;
      this.newTodo = ''; 
      this.currentTodoIndex=null;
    }
     
  }
}


ChageStatusoftodo(index: number){
  console.log(index);
  //this.Todolist.splice(index, 1); 

  if(this.Todolist[index].active == true){
    this.Todolist[index].active = false;
    this.Todolist[index].status = 'Open';
  }
  else {
    this.Todolist[index].active = true;
    this.Todolist[index].status = 'Close';
  }
  localStorage.setItem('Todolist', JSON.stringify(this.Todolist));
   
  console.log(this.Todolist)
}
 
deletethistodo(index: number){
  console.log(index);
  this.Todolist.splice(index, 1); 
  localStorage.setItem('Todolist', JSON.stringify(this.Todolist));   
}



updateTodo(index: number){
  console.log(index); 
  this.newTodo = this.Todolist[index].title;
 //localStorage.setItem('Todolist', JSON.stringify(this.Todolist));
  this.currentTodoIndex = index;
}

}
