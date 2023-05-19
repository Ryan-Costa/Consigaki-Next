import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-white">ConsigAki</h1>
      <Link href="/app" className="text-white">
        app
      </Link>
    </div>
  );
}
