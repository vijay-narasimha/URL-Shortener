import { useState, useEffect } from "react";

const Result = ({ input }) => {
	const [shortlink, setShortlink] = useState("link");
	const [inputstyle, setInputstyle] = useState({ display: "none" });
	const [urlmessage, setUrlmessage] = useState({ display: "none" });

	const [copy, setCopy] = useState("copy");
	const handlecopy = () => {
		navigator.clipboard.writeText(shortlink);
		setCopy("copied");
		setTimeout(() => setCopy("copy"), 10000);
	};
	const data = async () => {
		const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				long_url: input,
				domain: "bit.ly",
			}),
		}).then((res) => res.json());

		if (res.link) {
			setInputstyle({ display: "flex" });
			setShortlink(res.link);
			setUrlmessage({ display: "none" });
		} else {
			setUrlmessage({ display: "flex" });
			setInputstyle({ display: "none" });
		}
	};

	useEffect(() => {
		if (input.length) data();
	}, [input]);

	return (
		<div className='result'>
			<div className='url-message' style={inputstyle}>
				<p>
					<a href={shortlink} target='_blank' rel='noopener noreferrer'>
						{shortlink}
					</a>
				</p>
				<button onClick={handlecopy}>{copy}</button>
			</div>
			<div className='error-message' >
				Invalid URL ..     Please try again  ..
			</div>
		</div>
	);
};

export default Result;
