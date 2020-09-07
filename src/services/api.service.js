import axios from "axios";

export const apiService = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://172.186.1.14/3000",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

const createArticle = (title, content, category, authorId, tags) => {
  return apiService.post("/articles", { title, category, authorId, tags });
};

export { createArticle };
