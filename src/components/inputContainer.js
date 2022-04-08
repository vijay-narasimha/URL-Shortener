import { useState } from "react";
function InputContainer({ setInput }) {
	const [value, setValue] = useState("");
	const handleClick = () => {
		setInput(value);
    
		setValue("");
	};
	return (
		<div className='inputcontainer'>
			<h1>
				URL-<span>Shortener</span>
			</h1>
			<div className='inputgroup'>
				<input
					type='text'
					placeholder='place url here...'
					onChange={(e) => setValue(e.target.value)}
					autoComplete='off'
					required
					value={value}
				></input>
				<button className='btn' onClick={handleClick}>
					Shorten
				</button>
			</div>
		</div>
	);
}

export default InputContainer;
