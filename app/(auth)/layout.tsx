export default async function AuthLayout({children}:{children:React.ReactNode}) {
    return (
      <section className="min-h-screen flex justify-center items-center dark:bg-[#161616]">
        {children}
      </section>
    );
}