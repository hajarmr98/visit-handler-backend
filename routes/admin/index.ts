import { Router } from "express";
import { logAdminController } from "../../controllers/adminController";

let router = Router()

router.post("/login", logAdminController);

module.exports = router;
