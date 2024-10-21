export function getDocuments() {
	return Liferay.Util.fetch(
		'/o/headless-delivery/v1.0/sites/20117/documents',
		{method: 'GET'}
	).then(res => res.json());
}

export function addDocument({formData}) {
	
	/*{
		"articleBody": "description?",
		"alternativeHeadline": "test subtitle",
		"headline": "teste title"
	  }
	 */ 
		
	
    const headers = new Headers();

    headers.append('Content-Type', 'multipart/form-data');
    console.log("formData adddocument")
    console.log(formData)
    const request = {
        body: formData,
        headers,
        method: 'POST'
    };

    return Liferay.Util.fetch(
        '/o/headless-delivery/v1.0/sites/20117/documents',
        request
    ).then(res => res.json());
}

export function updateDocument({id,formData}) {

    /*{
        "articleBody": "description?",
        "alternativeHeadline": "test subtitle",
        "headline": "teste title"
        }
        */ 
        
    
    const headers = new Headers();

    headers.append('Content-Type', 'multipart/form-data');
    console.log("formData adddocument")
    console.log(formData)
    const request = {
        body: formData,
        headers,
        method: 'PUT'
    };

    return Liferay.Util.fetch(
        `/o/headless-delivery/v1.0/documents/${id}`,
        request
    ).then(res => res.json());
}

export function deleteDocument({deleteId}) {
    console.log(deleteId);

    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    const request = {
        headers,
        method: 'DELETE'
    };

    return Liferay.Util.fetch(
        `/o/headless-delivery/v1.0/documents/${deleteId}`,
        request
    ).then(res => res.json());
}
