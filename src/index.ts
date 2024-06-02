export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const requestBody = await request.json();
		console.log(requestBody);
		return new Response(JSON.stringify(requestBody), {
			headers: {
				"Content-Type": "application/json"
			}
		});
	},
};
