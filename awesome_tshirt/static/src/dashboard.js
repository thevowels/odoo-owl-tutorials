/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { getDefaultConfig } from "@web/views/view";
import { useService } from "@web/core/utils/hooks"
import { Domain } from "@web/core/domain"
import { Card } from "./card/card"
import { PieChart } from "./pie_chart/pie_chart";

const { Component, useSubEnv, onWillStart } = owl;
class AwesomeDashboard extends Component {
    setup() {

        // The useSubEnv below can be deleted if you're > 16.0
        useSubEnv({
            config: {
                ...getDefaultConfig(),
                ...this.env.config,
            },
        });

        this.display = {
            controlPanel: { "top-right": false, "bottom-right": false },
        };

        this.action = useService("action")
        this.tshirtService = useService("tshirtService")

        this.keyToString = {
            average_quantity: "Average amount of t-shirt by order this month",
            average_time: "Average time for an order to go from 'new' to 'sent' or 'cancelled'",
            nb_cancelled_orders: "Number of cancelled orders this month",
            nb_new_orders: "Number of new orders this month",
            total_amount: "Total amount of new orders this month",
        };

        onWillStart(async () => {
            this.statistics = await this.tshirtService.loadStatistics()
        });

    }
    openCustomerView(){
        this.action.doAction("base.action_partner_form")
    }

    openOrders(title, domain){
        this.action.doAction({
        type:"ir.actions.act_window",
        name: title,
        res_model: "awesome_tshirt.order",
        domain : new Domain(domain).toList(),
        views:[
            [false, "list"],
            [false, "kanban"],
            [false, "form"],
        ]})
    }
    openNewOrders(){
        const domain = "[('create_date','>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d'))]";
        this.openOrders('Last 7 days Orders', domain)
    }

    openCancelledOrders(){
        const domain = "[('create_date', '>=', (context_today() - datetime.timedelta(days=7)).strftime('%Y-%m-%d')), ('state', '=', 'cancelled')]"
        this.openOrders('Last 7 days cancelled Orders', domain)
    }

}

AwesomeDashboard.components = { Layout, Card, PieChart };
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
