import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-800">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="flex flex-col gap-y-6 items-center max-w-[550px]">
          <h1 className="font-geist-sans leading-[120%] text-gray-100 text-center capitalize text-6xl font-bold">
            Let&apos;s see if you&apos;ve got what it takes to win
          </h1>
          <Link href="/challenge">
            <Button className="w-auto" variant="secondary">
              Click to Play
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
