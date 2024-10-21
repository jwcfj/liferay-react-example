export function getPosts() {
	return Liferay.Util.fetch(
		'/o/headless-delivery/v1.0/sites/20117/blog-postings',
		{method: 'GET'}
	).then(res => res.json());
}

export function addPost({title,subtitle,description}) {
	
    /*{
        "articleBody": "description?",
        "alternativeHeadline": "test subtitle",
        "headline": "teste title"
      }
     */ 
    const data = {
        articleBody: description,
        headline:title,
        alternativeHeadline:subtitle
    };

    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    const request = {
        body: JSON.stringify(data),
        headers,
        method: 'POST'
    };

    return Liferay.Util.fetch(
        '/o/headless-delivery/v1.0/sites/20117/blog-postings',
        request
    ).then(res => res.json());
}
    
export function deletePost({deleteId}) {
    

        const headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
    
        const request = {
            headers,
            method: 'DELETE'
        };
    
        return Liferay.Util.fetch(
            `/o/headless-delivery/v1.0/blog-postings/${deleteId}`,
            request
        ).then(res => res.json());
}
    
    
    
export function updatePost({id,title,subtitle,description}) {
    
    /*{
        "articleBody": "description?",
        "alternativeHeadline": "test subtitle",
        "headline": "teste title"
        }
        */ 
        const data = {
            articleBody: description,
            headline:title,
            alternativeHeadline:subtitle
        };
    
        const headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
    
        const request = {
            body: JSON.stringify(data),
            headers,
            method: 'PUT'
        };
    
        return Liferay.Util.fetch(
            `/o/headless-delivery/v1.0/blog-postings/${id}`,
            request
        ).then(res => res.json());
    }
    