const fauna = require('faunadb');
const q = fauna.query;
const client = new fauna.Client({
	secret: process.env.FAUNAPWD,
	domain: 'db.fauna.com',
	port: 443,
	scheme: 'https',
})

let xpr = q.Map(q.Paginate(q.Match(q.Index('all_products'))), q.Lambda('x', q.Get(q.Var('x'))));
exports.handler = async (evnt, ctx) => {
	let resp = await client.query(xpr);
	return {
		statusCode: 200,
		body: JSON.stringify({resp: "Hello from function"}),
	};
}
