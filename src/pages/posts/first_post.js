import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>Welcome to the first post</h2>
      <h2>
        <Link href="/" >Back to home page</Link>
      </h2>
    </>
  );
}
