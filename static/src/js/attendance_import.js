/** @odoo-module **/

import { registry } from "@web/core/registry";
import { formView } from "@web/views/form/form_view";
import { FormController } from "@web/views/form/form_controller";

class AttendanceImportFormController extends FormController {
    setup() {
        super.setup();
    }
}

export const AttendanceImportFormView = {
    ...formView,
    Controller: AttendanceImportFormController,
};

registry.category("views").add("attendance_import_form", AttendanceImportFormView); 