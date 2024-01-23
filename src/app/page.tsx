import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-0">
      <div className="mb-8 sm:mb-16">
        <Image className="h-12 w-auto sm:h-18" src={"/logo.png"} alt={"sharkserver.pl"} width={200} height={45} priority/>
      </div>
      
      <div>
        <h1 className="text-xl sm:text-4xl font-bold animate-pulse">Wkrótce wracamy!</h1>
      </div>
    </main>
  );
}
