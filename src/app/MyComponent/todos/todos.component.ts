import { Component ,OnInit ,ViewChild } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todos } from './Todos'


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

 
  
// declare value and index of todo
newTodo: string = ''; 
currentTodoIndex: number | null = null;
  
// use to load function after page load
ngOnInit(): void {
  this.loadTodos();
}
 
// add value into array from local storage
loadTodos(): void {
  const storedTodo = localStorage.getItem('Todolist');
  // Parse the JSON string to an array. If there's no data, use an empty array.
  this.Todolist = storedTodo ? JSON.parse(storedTodo) : [];
}




//Save and update todo list using index value
addTodo() {
  if (this.newTodo.trim()) {
   
    if(this.currentTodoIndex === null){
      this.Todolist.push({ title: this.newTodo ,active :true ,status:'Close' });      
      localStorage.setItem('Todolist', JSON.stringify(this.Todolist));      
      this.newTodo = ''; 
    }
    else{       
      this.Todolist[this.currentTodoIndex].title = this.newTodo;
      this.newTodo = ''; 
      this.currentTodoIndex=null;
    }
     
  }
}


// change todo status active and deactive
ChageStatusoftodo(index: number){
  
  if(this.Todolist[index].active == true){
    this.Todolist[index].active = false;
    this.Todolist[index].status = 'Re-Open';
  }
  else {
    this.Todolist[index].active = true;
    this.Todolist[index].status = 'Close';
  }
  
  localStorage.setItem('Todolist', JSON.stringify(this.Todolist));   
  console.log(this.Todolist)
}
 
// delete the todo
deletethistodo(index: number){ 
  this.Todolist.splice(index, 1); 
  localStorage.setItem('Todolist', JSON.stringify(this.Todolist));   
}


// set input tag and index value to update todo
updateTodo(index: number){   
  this.newTodo = this.Todolist[index].title; 
  this.currentTodoIndex = index;
}

}
