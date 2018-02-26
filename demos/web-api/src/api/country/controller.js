import countries from "./../../data/countries";
import orderDetails from "./../../data/order-details.js";

export const index = ({ querymen: { query, select, cursor } }, res, next) => {
    return res.status(200).json(countries);
};

export const show = (req, res, next) => {
    const country = req.params.name;
    const from = req.query && !isNaN(Date.parse(req.query.from)) ? new Date(req.query.from) : new Date(1900, 0, 1);
    const to = req.query && !isNaN(Date.parse(req.query.to)) ? new Date(req.query.to) : new Date();

    let countrySales = 0;
    let allSales = 0;

    for (let order of orderDetails) {
        const date = parseMicrosoftJSONDateString(order.orderDate);

        if (from <= date && date <= to) {
            allSales += order.price;

            if (order.country === country && (from <= date && date <= to)) {
                countrySales += order.price;
            }
        }
    }

    res
        .status(200)
        .send([
            { country: "All", sales: allSales },
            { country: country, sales: countrySales }
        ]);
};

function parseMicrosoftJSONDateString(date) {
    return new Date(parseInt(date.substr(6), 10));
}
