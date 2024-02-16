import InvoiceList from "@/components/InvoiceList";

async function getData(url) {
  const req = await fetch(url, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  });
  const data = await req.json();

  return data;
}

export default async function Home() {
  const invoices = await getData("http://localhost:4000/data");
  return (
    <main className="max-w-5xl mx-auto">
      <InvoiceList invoices={invoices} />
    </main>
  );
}
