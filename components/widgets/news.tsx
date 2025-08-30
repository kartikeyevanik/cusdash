"use client"

import React from "react";
import useFetchNewsData from "@/hooks/useFetchNewsData";
import { NewsWidgetProps } from "@/types/widgets";


const NewsWidget: React.FC<NewsWidgetProps> = ({ country = "US" }) => {
    const { article, isLoading, error } = useFetchNewsData(country);

    return (
        <div className="p-4 bg-white border-2 border-gray-300">
            {isLoading && <h1>Loading...</h1>}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading && !error && article && (
                <div>
                    <h2 className="text-xl font-semibold">Top News Headlines</h2>
                    <ul className="mt-4 space-y-4">
                            <li key={article.url} className="pb-4">
                                <h3 className="text-lg font-bold">{article.title}</h3>
                                <p className="text-sm text-gray-600">{article.description}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 mt-2 inline-block"
                                >
                                    Read more
                                </a>
                            </li>
                    </ul>
                </div>
            )}
            {!isLoading && !error && !article && <p>No news articles found.</p>}
        </div>
    );
};

export default NewsWidget;
