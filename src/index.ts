export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		let responseBody = JSON.stringify("hello world");

		try {
			const requestBody = await request.json();
			responseBody = JSON.stringify(requestBody);

		} catch (error) {
			console.log("Blank request!");
		}

		return new Response(responseBody, {
			headers: {
				"Content-Type": "application/json"
			}
		});
	},
};
