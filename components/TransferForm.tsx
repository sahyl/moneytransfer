"use client";
import { useState } from "react";

const TransferForm = () => {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = async () => {
    try {
      const res = await fetch("/api/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to, amount: Number(amount) }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setMessage(data.message);
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <div className="p-4">
      <input
        type="email"
        placeholder="Recipient Email"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="p-2 border mr-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border mr-2"
      />
      <button onClick={handleTransfer} className="bg-blue-600 text-white px-4 py-2 rounded">
        Transfer
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default TransferForm;
