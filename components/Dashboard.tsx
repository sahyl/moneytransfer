import React from "react";
import SameSame from "./SameSame";
import { Session } from "next-auth";
import Balance from "./Balance";
import TransferForm from "./TransferForm";

type SessionProps = {
  session: Session | null;
};

const Dashboard = ({ session }: SessionProps) => {
  if (!session || !session.user) {
    return <div className="text-white p-8">Session not found. Please sign in.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-300 to-indigo-500 p-8">
        <div className="mb-20"/>
      <h1 className="text-3xl font-bold text-white mb-6">
        Welcome, {session.user.name}!
      </h1>

      <div className="flex gap-6 items-start">
        {/* Main content */}
        <main className="flex-1">
          {/* Add actual content here */}
          <SameSame />
          <TransferForm/>
        </main>

        {/* Right sidebar */}
        <aside className="w-[280px] shrink-0">
          <Balance />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;



