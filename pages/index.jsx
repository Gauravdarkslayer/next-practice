import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Hello, this is a welcome page</h1>
      <ul>
        <li>
          <Link href='/blog'>
            <a>Navigate to blogs</a>
          </Link>
        </li>
        <li>
          <Link href='/product'>
            <a>Navigate to products</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Navigate to blogs</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Navigate to blogs</a>
          </Link>
        </li>
      </ul>

    </>

  )
}
