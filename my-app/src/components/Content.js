import React, { Component } from "react";
import css from "./css/Content.module.css";
// import savedPost from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";
import posts from "../posts.json";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: posts.savedPosts,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                savedPosts: this.state.posts,
            })
        }, 2000);
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        console.log(name)
        const filteredPosts = this.state.posts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        });

        this.setState({
            savedPosts: filteredPosts,
        })
    }

    render() {
        // const savedPost = posts.savedPosts;
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input
                            id="searchInput"
                            onChange={this.handleChange}
                            type="search"></input>
                    </form>
                    <h4>posts found:</h4>
                </div>

                <div className={css.SearchResults}>


                    {
                        this.state.isLoaded && this.state.savedPosts.length > 0
                            ? <PostItem savedPosts={this.state.savedPosts} />
                            : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content