import Link from "next/link";

import Layout from "../components/layout";

export default function Error404() {
  return (
    <Layout title="Page not founded">
      <p className="error">Page not founded</p>
      <Link href={"/"} className="error-link">
        Go back to home page
      </Link>
    </Layout>
  );
}
