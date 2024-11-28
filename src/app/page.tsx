import Product from "@/components/cards/product";

export default function Home() {
  const products = [1,2,3,4,5,6,7,8,9]
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="mx-6">
      <div className="grid grid-cols-2s gap-4 ">

{products.map((product)=><Product key={product}></Product>)}
</div>
    </div>      
      
    // </div>
  );
}
