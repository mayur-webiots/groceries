export async function FetchAPI({url}){
let data = await fetch(url);

return data.json();

}