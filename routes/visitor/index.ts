import { Router } from "express";
import { visitorFormController } from "../../controllers/visitorController";

let router = Router()

router.post("/form", visitorFormController);

module.exports = router;
