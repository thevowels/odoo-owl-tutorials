/** @odoo-module */
import { Layout } from "@web/search/layout";
import { CustomerAutocomplete } from "./customer_autocomplete/customer_autocomplete";
// import { XMLParser } from "@web/core/utils/xml";
const { Component,useSubEnv } = owl;

export class GalleryController extends Component {
    setup(){
        this.display = {
            controlPanel: {},
        };

    }
}

GalleryController.template = "awesome_gallery.View";
GalleryController.components = { Layout,CustomerAutocomplete}