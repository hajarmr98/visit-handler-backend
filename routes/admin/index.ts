import { Router } from "express";
import { 
    logAdminController,
    getAllVisitsController,
    aproveVisitController,
    rejectVisitController,
    createAdminsController
} from "../../controllers/adminController";

let router = Router()

router.post("/login", logAdminController)
router.post("/createAdmins", createAdminsController)

router.get("/visits", getAllVisitsController)
      .put("/visits/:id", aproveVisitController)
      .delete("/visits/:id", rejectVisitController)

module.exports = router;
