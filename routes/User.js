const express = require("express");
const router = express.Router();
const UserController = require("../controllers/User");

router.post("/login", UserController.loginUser);
router.get("/dashboardLoanDetails", UserController.dashboardLoanDetails);
router.get("/dashboardComplaintDetails", UserController.dashboardComplaintDetails);
router.get("/loanRequestAreas", UserController.LoanRequestAreas);
router.get("/loanRequestBranches", UserController.LoanRequestBranches);
router.get("/loanRequests", UserController.LoanRequests);
router.get("/getPromotions", UserController.getPromotions);

module.exports = router;