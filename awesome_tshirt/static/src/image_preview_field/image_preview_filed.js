/** @odoo-module */

import { registry } from "@web/core/registry";
import { CharField } from "@web/views/fields/char/char_field";

const { Component } = owl;

export class ImagePreviewField extends Component{
    static template = "awesome_tshirt.ImagePreviewField";
    static components = { CharField}
}
ImagePreviewField.supported_types = ["char"]


registry.category("fields").add("image_preview", ImagePreviewField)