"use client";
import { useEffect, useState } from "react";

function StateButton({ status }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    switch (status) {
      case "paid":
        setColor("bg-emerald-300");
        break;
      case "pending":
        setColor("bg-orange-300");
        break;
      case "draft":
        setColor("bg-slate-300");
        break;
      default:
        setColor("");
    }
  }, [status]);

  if (status) {
    return <button className={`capitalize btn ${color}`}>{status}</button>;
  }
}

export default StateButton;
