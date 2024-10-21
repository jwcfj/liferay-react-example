import React, {useCallback, useEffect, useState} from 'react';
import { updateDocument } from './service/DocumentsService';
import ClayForm, {ClayInput} from '@clayui/form';


function UpdateDocument() {
const [documentValue, setDocumentValue] = useState('');
const [id, setId] = useState('');

const onButtonSubmit = useCallback(() => {
    if(documentValue){
        const formData = new FormData();
        formData.append('file', documentValue, documentValue.name);
        console.log(formData);
          updateDocument({
            id,
            formData

      }).then(() => {
          setDocumentValue('');
          setId('');
      });  
    }
      
  },
  [
      updateDocument,
      id,
      documentValue
  ]);

  function handleChange(e) {
    setDocumentValue(e.target.files[0]);
}

  return (
    <div>
        <h1>Update a document:</h1>    
        <ClayForm.Group>
				<label htmlFor="title">ID</label>

				<ClayInput
					id="id"
					onChange={event => setId(event.target.value)}
					placeholder="Insert id here"
					type="text"
					value={id}
				/>
			</ClayForm.Group>

        <ClayForm.Group>
        <label htmlFor="imageInput">Document here</label>
        <ClayInput
            id="imageInput"
            placeholder="document here"
            onChange={event => setDocumentValue(event.target.files[0])}
            type="file"
        />
        </ClayForm.Group>

        <button className="btn btn-primary" onClick={() => onButtonSubmit()}>Upload Document</button>

    </div>
  );

}

export default UpdateDocument;