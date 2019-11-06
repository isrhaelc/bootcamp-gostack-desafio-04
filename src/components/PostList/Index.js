import React, { Component } from "react";

import "./PostList.css";

import PostItem from "../PostItem";

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://vignette.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest?cb=20181130033425"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://miro.medium.com/max/3150/0*d0b5ozHclpEDZ8E_.jpg"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non leo velit. Etiam rutrum nisi quis sem vehicula dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel ante quis urna aliquet viverra at ut purus. Morbi est magna, viverra sed luctus sed, tristique eu massa. Cras sagittis, neque ac auctor pretium, neque magna interdum ex, ac auctor dui massa sed quam. Mauris volutpat rhoncus tortor, ullamcorper consequat leo."
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://miro.medium.com/max/3150/0*d0b5ozHclpEDZ8E_.jpg"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non leo velit. Etiam rutrum nisi quis sem vehicula dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel ante quis urna aliquet viverra at ut purus. Morbi est magna, viverra sed luctus sed, tristique eu massa. Cras sagittis, neque ac auctor pretium, neque magna interdum ex, ac auctor dui massa sed quam. Mauris volutpat rhoncus tortor, ullamcorper consequat leo."
          },
          {
            id: 3,
            author: {
              name: "Diego Fernandes",
              avatar: "https://miro.medium.com/max/3150/0*d0b5ozHclpEDZ8E_.jpg"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non leo velit. Etiam rutrum nisi quis sem vehicula dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel ante quis urna aliquet viverra at ut purus. Morbi est magna, viverra sed luctus sed, tristique eu massa. Cras sagittis, neque ac auctor pretium, neque magna interdum ex, ac auctor dui massa sed quam. Mauris volutpat rhoncus tortor, ullamcorper consequat leo."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postlist-container">
        {this.state.posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    );
  }
}
