"client only"
export let productList=[];

export function useHandleList({ product, action }) {
  let Exists =
    productList.filter((p) => product.id == p.id).length > 0 ? true : false;
    console.log('filtered list ',productList.filter((p) => product.id == p.id).length)
  if (!Exists) {
    action == "add" && (productList=[...productList, product]);
  }
  console.log("new list:",productList);
}
