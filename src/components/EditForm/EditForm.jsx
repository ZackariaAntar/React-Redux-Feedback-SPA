import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";


function EditForm() {

    const inputStore = useSelector(store=>store.inputStore)
    const dispatch = useDispatch()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: "onBlur" });

	const onSubmit = (data) => {
		dispatch({ type: "ADD_REFLECTION", payload: { data } });
		alert(JSON.stringify(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="feeling">Feeling</label>
				<input
					placeholder={inputStore.feeling}
					{...register("feeling", {
						required: true,
						maxLength: 1,
					})}
				/>
				{errors.feeling && <p>This is required</p>}
			</div>

			<div>
				<label htmlFor="understanding">Understanding</label>
				<input
					placeholder={inputStore.understanding}
					{...register("understanding", {
						required: true,
					})}
				/>
				{errors.understanding && <p>This is required</p>}
			</div>

			<div>
				<label htmlFor="support" placeholder={inputStore.support}>
					Supported
				</label>
				<input
					{...register("support", {
						required: true,
					})}
				/>
				{errors.support && <p>This is required</p>}
			</div>

			<input type="submit" />
		</form>
	);
}

export default EditForm;
