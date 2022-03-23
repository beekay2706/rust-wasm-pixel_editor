async function main(){
const lib = await import("../pkg/index.js").catch(console.error);

const image = lib.image.new();

console.log(image);
}

main();