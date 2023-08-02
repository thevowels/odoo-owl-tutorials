/** @odoo-module **/

import {Component, useState} from "@odoo/owl"
import { Todo } from "../todo/todo"
import {useAutofocus} from "../utils"


export class TodoList extends Component{


	static template = "owl_playground.todoList"

	static components = {Todo}

	setup(){
		useAutofocus("todoinput")

		this.todoList = useState(
			 [		{id: 1, description:'do smth', done:true},
					{id: 2, description:'id 4', done:false},
					{id: 3, description:'10th element', done:true}
					])
		this.nextId = 4
	}

	addTodo(ev){
		if(ev.keyCode === 13 && ev.target.value != ""){
			this.todoList.push({id:this.nextId++, description:ev.target.value, done:false})
			ev.target.value = "";
		}
	}
	toggleState(id){
		const todo = this.todoList.find( (todo) => todo.id === id)
		if(todo){
			todo.done = !todo.done
		}
	}
	removeTodo(id){
		const index = this.todoList.findIndex( (todo) => todo.id === id)
		if(index >=0){
			this.todoList.splice(index,1)
		}
	}

}