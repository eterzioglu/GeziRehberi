export const fetchImages = async () => {
  const response = await fetch("https://api.unsplash.com/search/pictures?client_id=LYr1tPSalq5G7qbuxeg4b-oJdwq4x3vhD3Re4YTf5Lo");
  const images = await response.json();

  return images;
};

export const getImageFromId = (id) =>
  `https://picsum.photos/id/${id}/200`;
