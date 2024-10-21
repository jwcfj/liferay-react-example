import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';

import {addKnowledgeArticle} from './service/KnowledgeArticleService';

function AddKnowledgeArticleForm() {
	const [title, setTitle] = useState('');
	const [articleBody, setArticleBody] = useState('');

	const onButtonSubmit = useCallback(() => {
		let htmlString = articleBody
						.split('\n')
						.map(line => ` <p>${line}</p> `)
						.join('<br>');
		addKnowledgeArticle({
			title,
			articleBody:htmlString
		}).then(() => {
			setTitle('');
			setArticleBody('');
		});
	},
	[
		addKnowledgeArticle,
		title,
		articleBody
	]);

	return (
		<div>
			<h1>Add Knowledge Article Form</h1>
            
            <ClayForm.Group>
				<label htmlFor="title">Title</label>

				<ClayInput
					id="title"
					onChange={event => setTitle(event.target.value)}
					placeholder="Title example"
					type="text"
					value={title}
				/>
			</ClayForm.Group>

			<ClayForm.Group>
				<label htmlFor="basicInputText">Content</label>
				<ClayInput
					component="textarea"
					id="basicInputText"
					placeholder="Write content here"
					onChange={event => {
						setArticleBody(event.target.value)
					}}
					type="text"
				/>
			</ClayForm.Group>
			

			<button className="btn btn-primary" onClick={() => onButtonSubmit()}>Add Knowledge Article</button>
		</div>
	);
}

export default AddKnowledgeArticleForm;