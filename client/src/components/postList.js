import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utility from '../Utility';
import {EditorState } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
import axios from 'axios';



const Post = props => (
    <tr>
        <td>{props.post.post_title}</td>
        {/* <td>{props.post.post_body}</td> */}
        <td>
            {/* <textarea
                disabled
                value={convertToRaw(props.post.editorState)}
            /> */}
            {/* {EditorState.createWithContent(props.post.post_contentState)} */}
            {/* {EditorState.createWithContent(props.post.editorState.getCurrentContent())}  */}
            {console.log(props.post.post_contentState)}
        </td>
        <td>{props.post.post_category}</td>
        <td>
              {Utility.parseDate(props.post.post_createdAt).month}/
              {Utility.parseDate(props.post.post_createdAt).date}/
              {Utility.parseDate(props.post.post_createdAt).year}
        </td>
        <td>
            <Link to={"/edit/"+props.post._id}>Edit</Link>
        </td>
    </tr>
)


export default class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/posts/')
            .then(response => {
                this.setState({posts: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    postList() {
        return this.state.posts.map(function(currentPost, i){
            return <Post post={currentPost} key={i} />;
        })
    }


    render() {
        return (
            <div>
                <h3>Posts List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Category</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.postList() }
                    </tbody>
                </table>
            </div>
        )
    }
}