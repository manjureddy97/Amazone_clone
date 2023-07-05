import express from "express";
import paymentController  from "../controller/paymentController.js";

const paymentRouter=express.Router();

paymentRouter.get('/get-order-id/',paymentController)

export default paymentRouter;