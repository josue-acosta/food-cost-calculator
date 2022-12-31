// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/dbConnect";
import Supplier from "../../../models/Supplier";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "GET":
            try {
                const suppliers = await Supplier.find({});
                res.status(200).json(suppliers);
            } catch (error) {
                res.status(400).json({ result: "Failed Supplier GET" });
            }
            break;
        case "POST":
            try {
                const supplier = await Supplier.create(req.body);
                supplier.save;
                res.status(200).json({ result: "Successful Supplier POST" });
            } catch (error) {
                res.status(400).json({ result: "Failed Supplier POST" });
            }
            break;
        default:
            res.status(400).json({ success: false });
    }
}
