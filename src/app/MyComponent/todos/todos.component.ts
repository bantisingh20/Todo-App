import { Component ,OnInit } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Todos} from './Todos'

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  
 Todolist = [
  {
    title:'Dinner'
    ,active : true
    ,status:'Delete'
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

addTodo() {
  if (this.newTodo.trim()) {
    this.Todolist.push({ title: this.newTodo ,active :true ,status:'Delete' });
    this.newTodo = ''; 

    localStorage.setItem('Todolist', JSON.stringify(this.Todolist));
     
  }
}


deletethistodo(index: number){
  console.log(index);
  //this.Todolist.splice(index, 1); 

  if(this.Todolist[index].active == true){
    this.Todolist[index].active = false;
    this.Todolist[index].status = 'Add Again';
  }
  else {
    this.Todolist[index].active = true;
    this.Todolist[index].status = 'Delete';
  }
  localStorage.setItem('Todolist', JSON.stringify(this.Todolist));
   
  console.log(this.Todolist)
}
 
}
