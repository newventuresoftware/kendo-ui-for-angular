import orders from "./../../data/orders";
import orderInfo from "./../../data/order-information";

// Preprocess
const parseMicrosoftJSONDateString = date => {
    return new Date(parseInt(date.substr(6), 10));
};

orders.forEach(o => {
    o.OrderDate = parseMicrosoftJSONDateString(o.OrderDate);

    if (o.ShippedDate) {
        o.ShippedDate = parseMicrosoftJSONDateString(o.ShippedDate);
    }
});

export const create = ({ body }, res, next) => {
    // TODO: Implement
    return res.status(201).json(body);
};

export const index = (req, res, next) => {
    return res.status(200).json(orders);
};

export const show = ({ params }, res, next) => {
    const id = parseInt(params.id);
    const order = orderInfo.find(o => o.OrderID === id);

    if (order) {
        return res.status(200).json(order);
    }

    return res.status(404).json({ message: "Order not found." });
};

export const update = ({ body, params }, res, next) => {
    // TODO: Implement
    return res.status(200).json(body);
};

export const destroy = ({ params }, res, next) => {
    // TODO: Implement
    return res.status(204).end();
};
