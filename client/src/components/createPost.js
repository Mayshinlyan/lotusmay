import React, {Component} from 'react';
import axios from 'axios';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}

export default class CreatePost extends Component {
    constructor(props){
        super(props);
        const post_contentState = convertFromRaw(content);
       
        this.onChangePostTitle = this.onChangePostTitle.bind(this);
        this.onChangePostBody = this.onChangePostBody.bind(this);
        this.onChangePostCategory = this.onChangePostCategory.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            post_title: '',
            post_body: '',
            post_category: '',
            post_contentState: '',
            editorState: EditorState.createWithContent(post_contentState),
        }
    }

    componentWillUnmount() {
       
        // You can save contentState here or somewhere else.
        // this.props.onSave(convertToRaw(contentState));
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

    // onContentStateChange() {
    //     this.setState({
    //         editorState
    //     });
    // };

    onEditorStateChange (editorState){
        this.setState({
          editorState,
          //post_contentState: EditorState.convertToRaw(editorState)
        });
      };

   

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Post submitted:`);
        console.log(`Post Title: ${this.state.post_title}`);
        console.log(`Post Body: ${this.state.editorState}`);
        console.log(`Post Category: ${this.state.post_category}`);
        
        const newPost = {
            post_title: this.state.post_title,
            post_body: this.state.post_body,
            post_category: this.state.post_category,
            post_contentState: convertToRaw(this.state.editorState.getCurrentContent()),
            editorState: this.state.editorState,
        };
        
        
        axios.post('http://localhost:4000/posts/add', newPost)
            .then(res => console.log(res.data));

        this.setState({
            post_title: '',
            post_body: '',
            post_category: '',
            editorState: '',
        })

        this.props.history.push('/');
        window.location.reload(true );
    }

    // _uploadImageCallBack(file){
    //     let uploadedImages = this.state.post_uploadImages;
    //     const imageObject = {
    //       file: file,
    //       localSrc: URL.createObjectURL(file),
    //     }
    //     this.uploadedImages.push(imageObject);
    
    //     this.setState({uploadedImages: uploadedImages});
    //     return new Promise(
    //       (resolve, reject) => {
    //         resolve({ data: { link: imageObject.localSrc } });
    //       }
    //     );
    //   }

    render() {
        const { editorState } = this.state;
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Post</h3>
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
                         {/* <textarea className="form-control text-form" value={this.state.post_body} id="postBody" onChange={this.onChangePostBody}></textarea> */}
                        <Editor
                            editorState={editorState}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                            toolbar={{
                                inline: { inDropdown: true },
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                                image: {uploadEnabled: true}
                            }}
                            onEditorStateChange={this.onEditorStateChange}
                         />
                    </div>

                    <div className="form-group">
                        <label>Category: </label>
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

                    <div className="form-group">
                        <input type="submit" value="Create Post" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}