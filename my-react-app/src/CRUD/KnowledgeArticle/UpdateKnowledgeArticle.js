import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';

import {updateKnowledgeArticle} from './service/KnowledgeArticleService';

function UpdateKnowledgeArticleForm() {
	const [id, setId] = useState('');
	const [title, setTitle] = useState('');
	const [articleBody, setArticleBody] = useState('');

	const onButtonSubmit = useCallback(() => {
		console.log(id)
		updateKnowledgeArticle({
			id,
			title,
			articleBody
		}).then(() => {
			setId('');
			setTitle('');
			setArticleBody('');
		});
	},
	[
		updateKnowledgeArticle,
		id,
		title,
		articleBody
	]);

	return (
		<div>
			<h1>Update Knowledge Article Form</h1>
			<ClayForm.Group>
				<label htmlFor="title">ID</label>

				<ClayInput
					id="id"
					onChange={event => setId(event.target.value)}
					placeholder="0000"
					type="text"
					value={id}
				/>
			</ClayForm.Group>

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
					value={articleBody}
				/>
			</ClayForm.Group>
			

			<button className="btn btn-primary" onClick={() => onButtonSubmit()}>Update Knowledge Article</button>
		</div>
	);
}

export default UpdateKnowledgeArticleForm;