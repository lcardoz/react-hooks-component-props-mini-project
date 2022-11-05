import React from "react";
import Article from "./Article";

const ArticleList = ({posts}) => {

    const blogPostComponents = posts.map((postObj) => {
        return (
            <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} />
        )
    })

    return (
        <main>
            {blogPostComponents}
        </main>
    )
}

export default ArticleList;