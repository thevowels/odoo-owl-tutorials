/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

import {Counter} from "./counter/counter"
import { TodoList } from "./todo_list/todolist"

export class Playground extends Component {
    static template = "owl_playground.playground";

    static components = { Counter, TodoList}
    
}

