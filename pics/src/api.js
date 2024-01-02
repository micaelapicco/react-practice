import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID M9JYfC2D-3cxV8C90_hra5U0n1Xt7b-9hb559v2RzJ0",
    },
    params: { query: term },
  });

  return response.data.results;
};

export default searchImages;
