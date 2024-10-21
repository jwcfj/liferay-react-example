import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import { deleteDocument } from './service/DocumentsService';
  
function DeleteDocument() {
const [deleteId, setDeleteId] = useState('');
const onButtonSubmit = useCallback(() => {
      deleteDocument({
          deleteId
      }).then(() => {
          setDeleteId('');
      });
  },
  [
      deleteDocument,
    deleteId
  ]);
    
  return (
    <div>
        <h1>Delete a document:</h1>
        <ClayForm.Group>
				<ClayInput
					id="deleteId"
					onChange={event => setDeleteId(event.target.value)}
					placeholder="0"
					type="text"
					value={deleteId}
				/></ClayForm.Group>
        <button className="btn btn-primary" onClick={() => onButtonSubmit()}>Delete Document</button>

    </div>
  );

}

export default DeleteDocument;