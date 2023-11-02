import axios from "axios";

const apiKey = "FGGRmhLXG014oRt12XzCvDfiuJBBS4oD";
const apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

async function getArticles(query, limit = 9) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        "api-key": apiKey,
        q: query,
        fl: "web_url,pub_date,headline,byline,snippet",
        fq: "document_type:article",
      },
    });

    if (response.data && response.data.response) {
      const articles = response.data.response.docs.slice(0, limit);
      return articles;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export default getArticles;
