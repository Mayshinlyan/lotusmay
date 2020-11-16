import React, {Component} from 'react';
import axios from 'axios';

export default class EditPost extends Component {

    constructor(props) {
        super(props);

        this.onChangePostTitle = this.onChangePostTitle.bind(this);
        this.onChangePostBody = this.onChangePostBody.bind(this);
        this.onChangePostCategory = this.onChangePostCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

         this.state = {
            post_title: '',
            post_body: '',
            post_category: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/posts/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    post_title: response.data.post_title,
                    post_body: response.data.post_body,
                    post_category: response.data.post_category
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangePostTitle(e) {
        this.setState({
            post_title: e.target.value
        });
    }

    onChangePostBody(e) {
        this.setState({
            post_body: e.target.value
        });
    }

    onChangePostCategory(e) {
        this.setState({
            post_category: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            post_title: this.state.post_title,
            post_body: this.state.post_body,
            post_category: this.state.post_category
        };
        console.log(obj);
        axios.post('http://localhost:4000/posts/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
        window.location.reload(true);
    }


    render() {
        return (
            <div>
                <h3 align="center">Update Posts</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.post_title}
                                onChange={this.onChangePostTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Body: </label>
                        <textarea className="form-control text-form" value={this.state.post_body} id="postBody" onChange={this.onChangePostBody}></textarea>
                    </div>

                    <div className="form-group">
                        <select className="form-control" value={this.state.category} name="postCategory" onChange={this.onChangePostCategory}>
                                <option>Select...</option>
                                <option value="Tea">Tea</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Art">Art</option>
                                <option value="Software">Software</option>
                                <option value="Thoughts">Thoughts</option>
                                <option value="Others">Others</option>
                        </select>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Post" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    
    }
}