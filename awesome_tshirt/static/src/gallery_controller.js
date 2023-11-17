/** @odoo-module */
import { Layout } from "@web/search/layout";
import { CustomerAutocomplete } from "./customer_autocomplete/customer_autocomplete";
import { useService } from "@web/core/utils/hooks";

const { Component, onWillStart, onWillUpdateProps, useState } = owl;


export class GalleryController extends Component {
    setup() {
        this.orm = useService("orm");

        this.model = useState(
            new this.props.Model(
                this.orm,
                this.props.resModel,
                this.props.fields,
                this.props.archInfo,
                this.props.domain
            )
        )

        onWillStart(async () => {
            // const { records } = await this.loadImages(this.props.domain);
            // this.images.data = records;
            await this.model.load();
        });
        
        onWillUpdateProps(async (nextProps) =>{
            if(JSON.stringify(nextProps.domain) !== JSON.stringify(this.props.domain)){
                // const { records }  = await this.loadImages(nextProps.domain);
                // this.images.data = records;
                this.model.domain = nextProps.domain;
                await this.model.load();
            }
        })
    }

}

GalleryController.template = "awesome_gallery.View";
GalleryController.components = { Layout,CustomerAutocomplete}