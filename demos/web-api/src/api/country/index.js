import { Router } from "express";
import { middleware as query } from "querymen";
import { create, index, show, update, destroy } from "./controller";

const router = new Router();

/**
 * @api {get} /countries Retrieve countries
 * @apiName RetrieveCountries
 * @apiGroup Country
 * @apiUse listParams
 * @apiSuccess {String[]} countries List of countries.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/", query(), index);

/**
 * @api {get} /countries/:name/sales Retrieve country sales info
 * @apiName RetrieveCountrySalesInfo
 * @apiGroup Country
 * @apiSuccess {Object} country Country's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Country not found.
 */
router.get("/:name/sales", show);

export default router;
