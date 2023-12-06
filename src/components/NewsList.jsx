import { useState, useEffect } from "react";
import axios from "axios";
import { newsBaseUrl } from "../util/helper";

import NewsCard from "../components/NewsCard";
import { Button } from "antd";

function NewsList({ category }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const getNews = async () => {
    const options = {
      // method: "GET",
      // url: `${newsBaseUrl}/local`,
      params: {
        category: category,
        language: "en",
        country: "ng",
        sort: "top",
        page: "1",
        limit: "20",
      },
      headers: {
        "X-RapidAPI-Key": NEWS_API_KEY,
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(`${newsBaseUrl}/category`, options);
      console.log(data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  console.log(loading);
  if (loading) {
    return (
      <h1 className="flex align-middle height-100vh items-center h-screen p-100">
        Loading...
      </h1>
    );
  }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <section className=" max-w-5xl mx-auto my-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {data.map((item) => {
            return <NewsCard key={item._id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default NewsList;
