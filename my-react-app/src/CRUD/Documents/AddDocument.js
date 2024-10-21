import React, {useCallback, useEffect, useState} from 'react';
import { addDocument } from './service/DocumentsService';
import ClayForm, {ClayInput} from '@clayui/form';


function AddDocument() {
const [documentValue, setDocumentValue] = useState('');

const onButtonSubmit = useCallback(() => {
    if(documentValue){
        const formData = new FormData();
        console.log(documentValue.size)
        formData.append('file', documentValue);
        console.log(formData);
          addDocument({
        formData
      }).then(() => {
          setDocumentValue('');
      });  
    }
      
  },
  [
      addDocument,
      documentValue
  ]);

  function handleChange(e) {
    setDocumentValue(e.target.files[0]);
}

  return (
    <div>
        <h1>Add a document:</h1>    
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

export default AddDocument;
