import Product from "@/components/cards/product";

export default function Home() {
  const products = [1,2,3,4,5,]
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="mx-6">
      <div className="grid grid-cols-2 lg:grid-cols-3 flex-col md:flex-row md:flex-col-3 justify-between flex gap-4 items-start mx-4 py-12 ">

{products.map((product)=><Product key={product}></Product>)}
</div>
    </div>      
      
    // </div>
  );
}
