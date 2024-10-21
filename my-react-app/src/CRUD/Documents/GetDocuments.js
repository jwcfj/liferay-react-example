import React, {useEffect, useState} from 'react';
import { getDocuments } from './service/DocumentsService';
function GetDocuments() {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		getDocuments().then(res => {
			setDocs(res.items);
		})
	}, []);
    
    
  return (
    <div >
				<h1>Documents and Media:</h1>
				{docs.map(doc => (
					<div key={doc.id}>
						{doc.id} - {doc.fileName} 
					</div>
				))}
			</div>
  );

}

export default GetDocuments;