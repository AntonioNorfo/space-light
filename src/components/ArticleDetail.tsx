import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../services/api";
import { Article } from "../types/Article";

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const getArticle = async () => {
      if (id) {
        const article = await fetchArticleById(Number(id));
        setArticle(article);
      }
    };
    getArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-detail">
      <img src={article.image_url} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{new Date(article.published_at).toLocaleDateString()}</p>
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default ArticleDetail;
