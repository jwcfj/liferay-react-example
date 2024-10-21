import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';

import { updatePost} from './service/BlogPostsService';

function UpdatePostForm() {
	const [id, setId] = useState('');
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [description, setDescription] = useState('');

	const onButtonSubmit = useCallback(() => {
		updatePost({
			id,
			title,
			subtitle,
			description
		}).then(() => {
			setId('');
			setTitle('');
			setSubtitle('');
			setDescription('');
		});
	},
	[
		updatePost,
		id,
		title,
		subtitle,
		description
	]);

	return (
		<div>
			<h1>Update Blog Form</h1>
            
			<ClayForm.Group>
				<label htmlFor="title">ID</label>

				<ClayInput
					id="id"
					onChange={event => setId(event.target.value)}
					placeholder="Insert id here"
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
				<label htmlFor="subtitle">Subtitle</label>

				<ClayInput
					id="subtitle"
					onChange={event => setSubtitle(event.target.value)}
					placeholder="Subtitle example"
					type="text"
					value={subtitle}
				/>
			</ClayForm.Group>
			
            <ClayForm.Group>
				<label htmlFor="description">Description</label>

				<ClayInput
					id="description"
					onChange={event => setDescription(event.target.value)}
					placeholder="Description example"
					type="text"
					value={description}
				/>
			</ClayForm.Group>

			<button className="btn btn-primary" onClick={() => onButtonSubmit()}>Update Blog Post</button>
		</div>
	);
}

export default UpdatePostForm;