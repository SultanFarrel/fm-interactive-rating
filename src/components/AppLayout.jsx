import Footer from "./Footer";

export function AppLayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen font-primary">
        <main className="w-3/4 m-auto border bg-grey-950 rounded-xl mt-10 p-5 md:w-2/5 lg:w-1/5">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
