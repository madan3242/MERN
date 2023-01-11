import express from "express";
import { 
    createRoom, 
    deleteRoom, 
    getAllRooms, 
    getSingleRoom, 
    updateRoom, 
    updateRoomAvailability
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid",verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getSingleRoom);

//GET ALL
router.get("/", getAllRooms);

export default router;