import { Article } from "../types/Article";

const API_URL = "https://api.spaceflightnewsapi.net/v4/articles";

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results;
};

export const fetchArticleById = async (id: number): Promise<Article> => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};
