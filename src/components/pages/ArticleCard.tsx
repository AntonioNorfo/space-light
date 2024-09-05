import React from "react";
import { Article } from "../types/Article";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="article-card">
      <img src={article.image_url} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{new Date(article.published_at).toLocaleDateString()}</p>
      <p>{article.summary}</p>
      <a href={`/article/${article.id}`}>Read more</a>
    </div>
  );
};

export default ArticleCard;
