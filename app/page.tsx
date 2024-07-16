import Form from "./components/form";

export default function Home() {
  return (
    <main className="w-full justify-center py-3 flex flex-col items-center">
      <h1>home</h1>
      <section className="mt-20 p-5 max-w-[900px] w-[90vw]  bg-slate-100 rounded-xl">
        <div className="pb-8">
          <h1 className=" text-center text-2xl text-gray-900">Form:</h1>
        </div>
        <Form/>
      </section>
    </main>
  );
}
