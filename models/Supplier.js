import mongoose from "mongoose";
const { Schema } = mongoose;

const SupplierSchema = new Schema(
    {
        profile_picture: String,
        name: String,
        address_1: String,
        address_2: String,
        office_phone: String,
        public_website: String,
        order_portal: String,
        payment_portal: String,
        sales_rep: String,
        sales_email: String,
        sales_phone: String,
        accounting_rep: String,
        accounting_email: String,
        accounting_phone: String,
        notes: String,
    },
    {
        timestamps: true,
    }
);

module.exports =
    mongoose.models.Supplier || mongoose.model("Supplier", SupplierSchema);
