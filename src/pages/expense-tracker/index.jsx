import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction"
export const ExpenseTracker = () => {
    const { addTransaction } = useAddTransaction();

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");

    const onSubmit = async (e) => {
        e.preventDefault();
        addTransaction({
            description,
            transactionAmount,
            transactionType,
        });
    }
    return (
        <>
            <div className="expense-tracker">
                <div className="container">
                    <h1>Expense Tracker</h1>
                    <div className="balance">
                        <h3>Balance</h3>
                        <p>$0.00</p>
                    </div>
                    <div className="summary">
                        <div className="income">
                            <h3>Income</h3>
                            <p>$0.00</p>
                        </div>
                        <div className="expenses">
                            <h3>Expense</h3>
                            <p>$0.00</p>
                        </div>
                    </div>
                    <form className="add-transaction" onSubmit={onSubmit}>
                        <input
                            type="text"
                            placeholder="Description"
                            required
                            onChange={(e) => setDescription(e.target.value)} />
                        <input
                            type="number"
                            placeholder="Amount"
                            required
                            onChange={(e) => setTransactionAmount(e.target.value)} />
                        <input
                            type="radio"
                            id="expense"
                            value="expense"
                            checked={transactionType==="expense"}
                            onChange={(e) => setTransactionType(e.target.value)} />
                        <label htmlFor="expense">Expense</label>
                        <input
                            type="radio"
                            id="income"
                            value="income"
                            checked={transactionType==="income"}
                            onChange={(e) => setTransactionType(e.target.value)} />
                        <label htmlFor="income">Income</label>
                        <button type="submit">Add Expense</button>
                    </form>
                </div>
            </div>
            <div className="transactions">
                <h3>Transactions</h3>
            </div>
        </>
    );
};