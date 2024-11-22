import Router from "express";
import Ledger from "../models/Transaction.js";
const router = Router();

router.get("/", async (req, res) => {
  const userId = req.user._id;
  const transactions = await Ledger.find({ userId: userId });
  // change all the dates to a readable format "MM/DD/YYYY"
  const formattedTransactions = transactions.map((transaction) => {
    const formattedTransaction = {
      ...transaction._doc,
      date: new Date(transaction.date).toLocaleDateString(),
    };
    return formattedTransaction;
  });
  const expenseData = formattedTransactions.filter(
    (transaction) => transaction.type === "expense"
  );
  const incomeData = formattedTransactions.filter(
    (transaction) => transaction.type === "income"
  );
  res.send({ expenseData, incomeData });
});

export default router;
