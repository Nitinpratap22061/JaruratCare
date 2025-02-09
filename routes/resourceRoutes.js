const express = require("express");
const { createResource, getResources, updateResource, deleteResource } = require("../controllers/resourceController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const { validateResource } = require("../utils/validate");
const router = express.Router();

router.post("/", authMiddleware, roleMiddleware(["admin"]), validateResource, createResource);
router.get("/", authMiddleware, getResources);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), updateResource);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), deleteResource);

module.exports = router;
