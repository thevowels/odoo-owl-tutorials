/** @odoo-module **/

import { Component,useState } from "@odoo/owl"
import { Todo } from "../todo/todo"

export class TodoList extends Component{
    static template="owl_playground.TodoList"
    static components = {Todo}
    setup(){
        this.nextId=0
        this.todoList=useState([])
    }
    addTodo(ev){
        if(ev.keyCode === 13 && ev.target.value != ""){
            this.todoList.push({id:this.nextId++, description:ev.target.value, done:false})
            ev.target.value=""
        }
    }

}