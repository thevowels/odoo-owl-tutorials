/** @odoo-module **/

import { Component,useState } from "@odoo/owl"
import { Todo } from "../todo/todo"
import { useAutoFocus } from "../utils"

export class TodoList extends Component{
    static template="owl_playground.TodoList"
    static components = {Todo}

    setup(){
        this.nextId=0
        this.todoList=useState([])
        useAutoFocus("todo_input")
    }
    addTodo(ev){
        if(ev.keyCode === 13 && ev.target.value != ""){
            this.todoList.push({id:this.nextId++, description:ev.target.value, done:false})
            ev.target.value=""
        }0
    }
    toggleTodo(todoId){
        const todo = this.todoList.find((todo)=> todo.id == todoId)
        if(todo){
            todo.done = !todo.done
        }
        console.log('Toggle STate')
    }


}