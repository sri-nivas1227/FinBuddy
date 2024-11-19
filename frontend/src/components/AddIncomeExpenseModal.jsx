import { useState } from "react";
import CloseIcon from "/src/assets/icons/close.png";
function AddIncomeExpenseModal({ type, showModal, setShowModal }) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, category, description, amount });
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          {/* overlay */}
          <div
            id="overlay"
            className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ease-in-out ${
              showModal ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={(e) => {
              if (e.target.id == "overlay") setShowModal(false);
            }}
          ></div>

          <div
            className={`fixed z-50 inset-0  bg-black bg-opacity-50 flex justify-center items-center ${
              showModal
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <div className="bg-white p-4 rounded-lg w-96">
              <div className="flex justify-end mb-2">
                <div className="cursor-pointer" onClick={() => setShowModal(false)}>
                  {" "}
                  <img src={CloseIcon} alt="" className="w-8" />{" "}
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
                    className="p-2 rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                    className="p-2 rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="p-2 rounded-lg border border-gray-300"
                  />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    className="p-2 rounded-lg border border-gray-300"
                  />
                  <button
                    type="submit"
                    className="bg-green-400 p-2 rounded-lg text-white"
                  >
                    Add {type}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddIncomeExpenseModal;
