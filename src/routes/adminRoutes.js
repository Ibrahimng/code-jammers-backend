import { Router } from "express";
import AdminController from "../controllers/country";
import AdminStateController from "../controllers/state";
import Authentication from "../middlewares/authenticate";

const { addCountry } = AdminController;
const { addState, deleteState, updateState } = AdminStateController;
const { verifyAdmin, verifyToken } = Authentication;

const router = Router();

router.delete("/delete-state", verifyToken, verifyAdmin, deleteState);
router.put("/update-state", verifyToken, verifyAdmin, updateState);

router.post("/admin/country", verifyToken, verifyAdmin, addCountry);
router.post("/admin/state", verifyToken, verifyAdmin, addState);

router.post("/admin/country", verifyToken, verifyAdmin, addCountry);

export default router;
