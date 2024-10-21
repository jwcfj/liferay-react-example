export function getKnowledgeArticles() {
    return Liferay.Util.fetch(
        '/o/headless-delivery/v1.0/sites/20117/knowledge-base-articles',
        {method: 'GET'}
    ).then(res => res.json());
}

export function addKnowledgeArticle({title,articleBody}) {

/*{
    "articleBody": "description?",
    "alternativeHeadline": "test subtitle",
    "headline": "teste title"
    }
    */ 
    const data = {
        title,
        articleBody
    };

    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    const request = {
        body: JSON.stringify(data),
        headers,
        method: 'POST'
    };

    return Liferay.Util.fetch(
        '/o/headless-delivery/v1.0/sites/20117/knowledge-base-articles',
        request
    ).then(res => res.json());
}
export function updateKnowledgeArticle({id,title,articleBody}) {

    /*{
        "articleBody": "description?",
        "alternativeHeadline": "test subtitle",
        "headline": "teste title"
        }
        */ 
        const data = {
            title,
            articleBody
        };
    
        const headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
    
        const request = {
            body: JSON.stringify(data),
            headers,
            method: 'PUT'
        };
    
        return Liferay.Util.fetch(
            `/o/headless-delivery/v1.0/knowledge-base-articles/${id}`,
            request
        ).then(res => res.json());
    }

    export function deleteKnowledgeArticle({deleteId}) {
        console.log(deleteId);

        const headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
    
        const request = {
            headers,
            method: 'DELETE'
        };
    
        return Liferay.Util.fetch(
            `/o/headless-delivery/v1.0/knowledge-base-articles/${deleteId}`,
            request
        ).then(res => res.json());
}
