/** @odoo-module **/

import {Component, useState } from "@odoo/owl"

export class Todo extends Component{
	static template = "owl_playground.todo"

	static props = {
		todo : {
			type: Object,
			shape: {
					id : Number,
					description: { type: String},
					done: Boolean
			}
		},
		toggleState: Function,
		removeTodo: Function

	}

	onClick(ev){
		this.props.toggleState(this.props.todo.id)
	}
	doDel(ev){
		this.props.removeTodo(this.props.todo.id)
	}
}