import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/api";
import { Article } from "./types/Article";
import ArticleCard from "./ArticleCard";

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchArticles();
      setArticles(articles);
    };
    getArticles();
  }, []);

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
