
import React from 'react';



import AddPostForm from './CRUD/BlogPosts/AddPostForm';
import UpdatePostForm from './CRUD/BlogPosts/UpdatePostForm';
import DeletePost from './CRUD/BlogPosts/DeletePost';


import AddDocument from './CRUD/Documents/AddDocument';
import UpdateDocument from './CRUD/Documents/UpdateDocument';
import DeleteDocument from './CRUD/Documents/DeleteDocument';

import AddKnowledgeArticleForm from './CRUD/KnowledgeArticle/AddKnowledgeArticleForm';
import UpdateKnowledgeArticleForm from './CRUD/KnowledgeArticle/UpdateKnowledgeArticle';
import DeleteKnowledgeArticle from './CRUD/KnowledgeArticle/DeleteKnowledgeArticle';
import GetPosts from './CRUD/BlogPosts/GetPosts';
import GetDocuments from './CRUD/Documents/GetDocuments';
import GetKnowledgeArticles from './CRUD/KnowledgeArticle/GetKnowledgeArticles';

function App() {
	return (
		<div className="row row-cols-4">
      <div className="col">
				<GetPosts />
			</div>
      <div className="col">
				<AddPostForm />
			</div>
      <div className="col">
				<UpdatePostForm/>
			</div>
      <div className="col">
				<DeletePost/>
			</div>

      <div className="col">
				<GetDocuments/>
			</div>
      <div className="col">
				<AddDocument/>
			</div>
      <div className="col">
				<UpdateDocument/>
			</div>
      <div className="col">
				<DeleteDocument/>
			</div>
			
      
      <div className="col">
				<GetKnowledgeArticles/>
			</div>

      <div className="col">
				<AddKnowledgeArticleForm/>
			</div>
      <div className="col">
				<UpdateKnowledgeArticleForm/>
			</div>  
      <div className="col">
			<DeleteKnowledgeArticle/>
			</div>  
      
		</div>

	);
}

export default App;
