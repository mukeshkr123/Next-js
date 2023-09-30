"use client";

import { useRouter } from "next/navigation"; // make sure to import from necxt/navigation

const NewusersPage = () => {
  const router = useRouter();
  return (
    <div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </div>
  );
};

export default NewusersPage;
