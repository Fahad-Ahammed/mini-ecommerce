import Link from "next/link";

const Index = () => {
  return (
    <div className="flex items-center justify-center h-screen text-[#BA0018]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Oops! The page you are looking for might be in another castle.
        </p>
        <Link href="/" className="text-lg underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default Index;
