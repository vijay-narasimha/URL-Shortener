
import { useState, useEffect } from "react";

const Result = ({ input }) => {


	const [shortlink, setShortlink] = useState("link");
	const [inputstyle, setInputstyle] = useState({ display: "none" });
	const [copy, setCopy] = useState("copy");
	const handlecopy = () => {
		navigator.clipboard.writeText(shortlink);
		setCopy("copied");
	};
	const data = async () => {
		const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
			method: "POST",
			headers: {
				Authorization: "Bearer "+process.env.REACT_APP_TOKEN,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				long_url: input,
				domain: "bit.ly",
			}),
		}).then((res) => res.json());
		setShortlink(res.link);
		setInputstyle({ display: "flex" });
	};
	if(input.length) data()
	useEffect(()=>{
		setTimeout(()=>setCopy('copy'),10000)
	})
	return (
		<div className='result' style={inputstyle}>
			<p>
				<a href={shortlink} target='_blank'>{shortlink}</a>
			</p>
			<button onClick={handlecopy}>{copy}</button>
		</div>
	);
};

export default Result;
