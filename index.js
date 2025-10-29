export function add(a, b) {
  return a + b;
}

// If run directly, print a demo output
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(add(2, 3));
}


