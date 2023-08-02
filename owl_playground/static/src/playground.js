/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

import {Counter} from "./counter/counter"
import { Todo } from "./todo/todo"

export class Playground extends Component {
    static template = "owl_playground.playground";

    static components = { Counter, Todo }

    state = useState({ todo: {id: 3, description:'do smth', done:true}})
    
}

