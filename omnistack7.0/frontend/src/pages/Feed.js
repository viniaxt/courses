import React, { Component } from "react"
import api from "../services/api"

import "./Feed.css"

import more from "../assets/more.svg"
import like from "../assets/like.svg"
import comment from "../assets/comment.svg"
import send from "../assets/send.svg"
import io from "socket.io-client"

class Feed extends Component {
  state = {
    feed: [] // when it's changed, we need to render again
  }

  async componentDidMount() {
    this.registerToSocket()

    const response = await api.get("posts")
    this.setState({ feed: response.data })
  }

  registerToSocket = () => {
    const socket = io("http://localhost:3333")
  }

  handleLike = id => {
    api.post(`/posts/${id}/like`)
  }

  render() {
    return (
      <section id="post-link">
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="Mais" />
            </header>

            <img
              src={`http://localhost:3333/files/${post.image}`}
              alt="postImage"
            />

            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="" />
                </button>
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>{`${post.likes} curtidas`}</strong>

              <p>{post.description}</p>
              <span>{post.hashtags}</span>
            </footer>
          </article>
        ))}
      </section>
    )
  }
}

export default Feed
