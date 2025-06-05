const express = require("express");
const router = express.Router();
const {
  getSystemLogs,
  getErrorLogs,
  getSupportTickets,
  respondToTicket
} = require("../controllers/system.controller");

// Logs
router.get("/logs", getSystemLogs);
router.get("/errors", getErrorLogs);

// Support
router.get("/support-tickets", getSupportTickets);
router.put("/support-tickets/:id/respond", respondToTicket);

module.exports = router;
