import axios from "axios";
import toast from "react-hot-toast";

const apiKey = "FGGRmhLXG014oRt12XzCvDfiuJBBS4oD";
const apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const RATE_LIMIT_QUOTA = 429; 

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
    if (error.response && error.response.status === RATE_LIMIT_QUOTA) {
      toast.error("Rate limit quota exceeded. Please try again later.");
    } else {
      toast.error("Error fetching articles:", error);
    }
    return [];
  }
}

export default getArticles;
