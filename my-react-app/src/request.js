export function getPosts1() {
	return Liferay.Util.fetch(
		'/o/headless-delivery/v1.0/sites/20117/blog-postings',
		{method: 'GET'}
	).then(res =>	
		res.json()
	);
}

export function getPosts() {
	return Liferay.Util.fetch(
		'/o/headless-delivery/v1.0/sites/20117/blog-postings',
		{method: 'GET'}
	).then(res => res.json());
}

export function getUsers() {
	return Liferay.Util.fetch(
		'/o/headless-admin-user/v1.0/user-accounts',
		{method: 'GET'}
	).then(res => res.json());
}

export function addUser({emailAddress, familyName, givenName, userName}) {
	const data = {
		alternateName: userName,
		emailAddress,
		familyName,
		givenName
	};

	const headers = new Headers();

	headers.append('Content-Type', 'application/json');

	const request = {
		body: JSON.stringify(data),
		headers,
		method: 'POST'
	};

	return Liferay.Util.fetch(
		'/o/headless-admin-user/v1.0/user-accounts',
		request
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



export function getDocs() {
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
	