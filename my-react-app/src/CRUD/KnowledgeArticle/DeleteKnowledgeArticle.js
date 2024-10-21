import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import { deleteKnowledgeArticle } from './service/KnowledgeArticleService';

function DeleteKnowledgeArticle() {
const [deleteId, setDeleteId] = useState('');
const onButtonSubmit = useCallback(() => {
      deleteKnowledgeArticle({
          deleteId
      }).then(() => {
          setDeleteId('');
      });
  },
  [
    deleteKnowledgeArticle,
  deleteId
  ]);
    
  return (
    <div>
        <h1>Delete a Knowledge Article post:</h1>
        <ClayForm.Group>
				<ClayInput
					id="deleteId"
					onChange={event => setDeleteId(event.target.value)}
					placeholder="0"
					type="text"
					value={deleteId}
				/></ClayForm.Group>
        <button className="btn btn-primary" onClick={() => onButtonSubmit()}>Delete Knowledge Article</button>

    </div>
  );

}

export default DeleteKnowledgeArticle;