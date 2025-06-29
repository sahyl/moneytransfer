"use client";
import { useState, useEffect } from "react";
import Balance from "./Balance";
import TransferForm from "./TransferForm";

const TransferUpdates = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchBalance = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/balance");
      if (!res.ok) throw new Error("Failed to fetch balance");
      const data = await res.json();
      setBalance(data.balance);
      setError(false);
    } catch (err) {
      console.error("Error fetching balance:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div className="flex gap-6 items-start">
      <main className="flex-1">
        <TransferForm onTransferSuccess={fetchBalance} />
      </main>
      <aside className="w-[280px] shrink-0">
        <Balance balance={balance} loading={loading} error={error} />
      </aside>
    </div>
  );
};

export default TransferUpdates;
