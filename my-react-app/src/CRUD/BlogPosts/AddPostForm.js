import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';

import { addPost } from './service/BlogPostsService';

function AddPostForm() {
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [description, setDescription] = useState('');

	const onButtonSubmit = useCallback(() => {
		addPost({
			title,
			subtitle,
			description
		}).then(() => {
			setTitle('');
			setSubtitle('');
			setDescription('');
		});
	},
	[
		addPost,
		title,
		subtitle,
		description
	]);

	return (
		<div>
			<h1>Add Blog Form</h1>
            
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

			<button className="btn btn-primary" onClick={() => onButtonSubmit()}>Add Blog Post</button>
		</div>
	);
}

export default AddPostForm;