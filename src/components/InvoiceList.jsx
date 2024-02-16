"use client";
import Link from "next/link";
import StateButton from "./StateButton";

function InvoiceList({ invoices }) {
  return (
    <ul>
      {invoices.map((invoice) => {
        return (
          <li key={invoice.id} className="">
            <Link
              className="flex bg-slate-200 justify-between mb-3"
              href={`/aboutinvoice/${invoice.id}`}
            >
              <h2>#{invoice.id}</h2>
              <h2>Due {invoice.paymentDue}</h2>
              <h2>{invoice.clientName}</h2>
              <h2>${invoice.items[0].total.toLocaleString("en-US")}</h2>
              <StateButton status={invoice.status} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default InvoiceList;
