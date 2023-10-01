import { Metadata } from "next";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src={
          "https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
        }
        alt="coffee"
        // width={200}
        // height={200}
        sizes="(max-width:480px)100vw, (max-width:768px) 50vw, 33vw "
        fill
        // style={{ objectFit: "cover" }}
        className="object-cover"
        // quality={75}
        // priority
      />
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "Home Page",
//   description: "Homee page",
// };

//generate metadata dynamically
// export async function genrateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: product.title,
//     description: product.description,
//   };
// }
