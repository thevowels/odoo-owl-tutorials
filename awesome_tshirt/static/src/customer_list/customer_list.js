/** @odoo-module */
import { useService } from "@web/core/utils/hooks";
import { KeepLast } from "@web/core/utils/concurrency";
import { fuzzyLookup } from "@web/core/utils/search";


const { Component, onWillStart, useState } = owl;

export class CustomerList extends Component {
    setup(){
        this.orm = useService("orm");
        this.partners = useState({data:[]});
        // this.displayedPartners = useState({data:[]})
        // this.domain=[];
        this.keepLast = new KeepLast();
        // this.filterName = "";
        this.state = useState({
            searchString: "",
            displayActiveCustomers: false,
        })
        onWillStart(async ()=>{
            this.partners.data = await this.loadCustomers();
            // this.displayedPartners.data =this.partners.data;
        })
    }

    get displayedPartners(){
        return this.filterCustomers(this.state.searchString);
    }

    async onChangeActiveCustomers(ev) {
        // const checked = ev.target.checked;
        // this.domain = checked ? [["has_active_order", "=", true]] : [];
        this.state.displayActiveCustomers= ev.target.checked;
        this.partners.data = await this.keepLast.add(this.loadCustomers());
        // this.filterCustomers(this.filterName);
    }

    loadCustomers(){
        // return this.orm.searchRead("res.partner", this.domain, ["display_name"])
        const domain = this.state.displayActiveCustomers ? [["has_active_order", "=", true]]:[];
        return this.orm.searchRead("res.partner", domain, ["display_name"]);
    }

    // onCustomerFilter(ev){
    //     this.filterName = ev.target.value;
    //     this.filterCustomers(ev.target.value);
    // }
    
    filterCustomers(name){
        if(name){
            // this.displayedPartners.data = fuzzyLookup(name,
            //                                 this.partners.data,
            //                                 (partner) => partner.display_name)
            return fuzzyLookup(name,
                                this.partners.data,
                                (partner) => partner.display_name);
            
        }else{
            return this.partners.data;
        }
    }
}

CustomerList.template = "awesome_tshirt.CustomerList";

CustomerList.props = {
    selectCustomer: {
        type: Function,
    },
};
