import React, { Component } from "react";
import css from "./css/Content.module.css";
import savedPost from "../posts.json";
import PostItem from "./PostItem";

export class Content extends Component {


    render() {
        return (
            <div className={css.Content}>

                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
{console.log(savedPost)}
                <div className={css.SearchResults}>
                    {
                        savedPost.map((post) => {
                            return <div className={css.SearchItem} key={post.title}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image} alt="random" />
                                <p>{post.description}</p>
                            </div>
                        })
                    }




                    <PostItem savedPosts={savedPost} />
                </div>
            </div>
        )
    }
}

export default Content