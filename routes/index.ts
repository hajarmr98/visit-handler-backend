import { Router } from "express";

let router = Router()

router.use("/admin", require("./admin"));
router.use("/visitor", require("./visitor"));

module.exports = router;
