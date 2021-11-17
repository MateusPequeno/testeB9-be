import express from "express";
import {
  createPanels,
  getPanels,
  getSinglePanels,
  deletePanels,
  updatePanels,
} from "../controllers/productsController";

const router = express.Router();

// from /Panels
router.get("/", getPanels);

router.post("/", createPanels);

router.get("/:id", getSinglePanels)

router.delete(`/:id`, deletePanels);

router.put("/:id", updatePanels);

export default router;
