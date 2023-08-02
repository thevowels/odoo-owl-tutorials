/** @odoo-module **/

import {Component, useState} from "@odoo/owl"
import { Todo } from "../todo/todo" 

export class TodoList extends Component{
	static template = "owl_playground.todoList"

	static components = {Todo}

	state = useState({ 
		todos: [
				{id: 3, description:'do smth', done:true},
				{id: 4, description:'id 4', done:false},
				{id: 10, description:'10th element', done:true}
				]})

}