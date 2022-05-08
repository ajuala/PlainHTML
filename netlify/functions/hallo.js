exports.handler = async (evnt, ctx) => {
	return {
		statusCode: 200,
		body: JSON.stringify({message: "Hello from function"}),
	};
}
