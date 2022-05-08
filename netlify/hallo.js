exports.handler = async (evnt, ctx) => {
	return {
		status: 200,
		body: JSON.Stringify({message: "Hello from function"}),
	};
}
