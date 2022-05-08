exports.handler = async (evnt, ctx) => {
	return {
		status: 200,
		body: JSON.stringify({message: "Hello from function"}),
	};
}
