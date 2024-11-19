import { useState, useEffect } from "react";
import TrackTable from "./TrackTable";
import AddIncomeExpenseModal from "./AddIncomeExpenseModal";

function MoneyTracker() {
  const [expenses, setExpenses] = useState([
    { date: "2021-10-10", category: "Food", description: "Lunch", amount: 10 },
    {
      date: "2021-10-10",
      category: "Transport",
      description: "Bus",
      amount: 5,
    },
  ]);
  const [showModal, setShowModal] = useState(true);
  const [incomes, setIncomes] = useState([
    {
      date: "2021-10-10",
      category: "Salary",
      description: "September Salary",
      amount: 1000,
    },
    {
      date: "2021-10-10",
      category: "Bonus",
      description: "Diwali Bonus",
      amount: 200,
    },
  ]);
  return (
    <>
      <div className="p-10 min-h-screen bg-slate-100">
        <div className="grid grid-cols-2 gap-6 py-4">
          <div className="flex justify-end">
            <div className="p-2 w-fit   rounded-lg bg-red-400 text-xl font-bold">
              Add Expense
            </div>
          </div>
          <div className="flex justify-start">
            <div className="p-2 w-fit rounded-lg bg-green-400 text-xl font-bold">
              Add Income
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <TrackTable data={expenses} type={"expense"} />
          <TrackTable data={incomes} type={"income"} />
        </div>
      </div>
      <AddIncomeExpenseModal
        type={"expense"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default MoneyTracker;
