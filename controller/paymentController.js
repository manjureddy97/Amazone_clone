import express from "express";
import productModel from "../models/productModel.js";
import Razorpay from "razorpay";

export default async (req, res) => {
    try {
        const { product_id, quantity, receipt_email } = req.query;
        if (!product_id || !receipt_email) {
            return res.status(401).send({ message: "Received incomplete body", status: false });
        } else {
            var razorpayInstance = new Razorpay({
                key_id: process.env.RAZORPAY_ID,
                key_secret:process.env.RAZORPAY_SECRET,
            });
            const paymentObject = await productModel.findById(product_id);

            const amount = paymentObject.price * 100 * (quantity ?? 1)
            const options = {
                amount: amount,
                currency: 'INR',
                receipt: receipt_email
            };
            razorpayInstance.orders.create(options, (err, order) => {
                if (err) {
                    return res.status(400).send({ success: false, msg: 'Something went wrong!' });
                } else {
                    return res.status(200).send({
                        success: true,
                        msg: 'Order Created',
                        order_id: order.id,
                        amount: amount,
                        key_id: RAZORPAY_ID_KEY,
                        email: receipt_email
                    });
                }
            })
        }
    } catch (error) {
        return res.status(500).send({ message: error.toString(), status: false });
    }
}