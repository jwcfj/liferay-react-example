import React, {useEffect, useState} from 'react';
import { getKnowledgeArticles } from './service/KnowledgeArticleService';
function GetKnowledgeArticles() {
	const [knowledgeArticles, setKnowledgeArticles] = useState([]);

	useEffect(() => {
		getKnowledgeArticles().then(res => {
			setKnowledgeArticles(res.items);
		})
	}, []);
    
    
  return (
    <div >
		<h1>Knowledge Base article</h1>

		{knowledgeArticles.map(knowledgeArticle => (
			<div key={knowledgeArticle.id}>
				<h3>{knowledgeArticle.id} - {knowledgeArticle.title}</h3>
				<div dangerouslySetInnerHTML= {{__html: knowledgeArticle.articleBody}}></div>
					
			</div>
		))}
			
	</div>
  );

}

export default GetKnowledgeArticles;