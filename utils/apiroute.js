export async function getSomeData() {
  try {
    const res = await fetch("/api/hello");
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
