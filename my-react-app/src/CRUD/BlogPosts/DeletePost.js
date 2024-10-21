import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import { deletePost } from './service/BlogPostsService';

function DeletePost() {
const [deleteId, setDeleteId] = useState('');
const onButtonSubmit = useCallback(() => {
      deletePost({
          deleteId
      }).then(() => {
          setDeleteId('');
      });
  },
  [
      deletePost,
  deleteId
  ]);
    
  return (
    <div>
        <h1>Delete a blog post:</h1>
        <ClayForm.Group>
				<ClayInput
					id="deleteId"
					onChange={event => setDeleteId(event.target.value)}
					placeholder="0"
					type="text"
					value={deleteId}
				/></ClayForm.Group>
        <button className="btn btn-primary" onClick={() => onButtonSubmit()}>Delete Blog Post</button>

    </div>
  );

}

export default DeletePost;