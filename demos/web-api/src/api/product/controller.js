import products from "./../../data/top-selling-products.js";
import productDetails from "./../../data/product-details.js";

export const create = ({ body }, res, next) => {
    // TODO: Implement
    return res.status(201).json(body);
};

export const index = (req, res, next) => {
    const productIds = req.query.id.map(x => {
        return parseInt(x);
    });

    if (productIds && productIds.length) {
        return res
            .status(200)
            .send(
                productDetails.filter(
                    p => !!productIds.find(id => id === p.ProductID)
                )
            );
    }

    return res.status(200).send(productDetails);
};

export const topSelling = (req, res, next) => {
    const country = req.params.country;
    const from = req.query && !isNaN(Date.parse(req.query.from)) ? new Date(req.query.from) : new Date(1900, 0, 1);
    const to = req.query && !isNaN(Date.parse(req.query.to)) ? new Date(req.query.to) : new Date();

    const series = req.query.series === "true" ? true : false;

    let result = products.filter(p => {
        const date = new Date(p.Date);
        const inDateRange = from <= date && date <= to;

        if (country) {
            return p.Country === country && inDateRange;
        }

        return inDateRange;
    });

    return res
        .status(200)
        .json(series ? mapProductsDataToSeries(result) : result);
};

export const show = ({ params }, res, next) => {
    // TODO: Implement
    return res.status(200).json({});
};

export const update = ({ body, params }, res, next) => {
    // TODO: Implement
    return res.status(200).json(body);
};

export const destroy = ({ params }, res, next) => {
    // TODO: Implement
    return res.status(204).end();
};

const mapProductsDataToSeries = products => {
    const grouped = {};
    const categories = [];

    for (const product of products) {
        const name = product.ProductName;

        if (!grouped[name]) {
            grouped[name] = { name: name, data: [] };
        }

        grouped[name].data.push(product.Quantity);
        categories.push(new Date(product.Date));
    }

    return {
        series: Object.keys(grouped).map(name => grouped[name]),
        categories
    };
};

const parseMicrosoftJSONDateString = date => {
    return new Date(parseInt(date.substr(6), 10));
};
