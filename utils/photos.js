export const fetchPhotos = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
