/** @odoo-module **/

import { Component } from "@odoo/owl"
import { Todo } from "../todo/todo"

export class TodoList extends Component{
    static template="owl_playground.TodoList"
    static components = {Todo}
    setup(){
        this.todoList = [
            { id: 3, description: "buy milk", done: false },
            { id: 4, description: "buy eggs", done: true },
            { id: 5, description: "buy avocado", done: true },
        ];
    }

}