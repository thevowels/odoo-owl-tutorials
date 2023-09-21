/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component{
    onClick(ev){
        this.props.toggleState(this.props.todo.id)
    }
    deleteTodo(ev){
        this.props.deleteTodo(this.props.todo.id)
    }
    static template = "owl_playground.Todo"
    static props = {
        "todo": {
                type: Object,
                shape: {
                    id: Number,
                    description: String,
                    done: Boolean
                    }
                },
        "toggleState": Function,
        "deleteTodo": Function,
    }

}