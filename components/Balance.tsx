"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const Balance = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await fetch("/api/balance");
        if (!res.ok) throw new Error("Failed to fetch balance");
        const data = await res.json();
        setBalance(data.balance);
      } catch (err) {
        console.error("Error fetching balance:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="bg-gradient-to-br  from-green-600 to-green-400 text-gray-800 rounded-xl shadow-md p-4 shadow-right ">
      <h2 className="text-lg  text-black font-semibold mb-2">Balance</h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <Loader2 className="w-6 h-6 animate-spin text-black  " />
        </div>
      ) : error ? (
        <p className="text-red-500 text-sm">Unable to fetch balance</p>
      ) : (
        <p className="text-2xl font-bold text-black">₹ {balance}</p>
      )}
    </div>
  );
};

export default Balance ;
