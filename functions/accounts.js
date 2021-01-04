import fetch from "node-fetch";

exports.handler = async function(event, context) {

    // Only allow POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    /*console.log("Event:");
    console.log(event);

    console.log("Context:");
    console.log(context); */
    
    const { accessToken } = JSON.parse(event.body);

    await fetch(`https://graph.facebook.com/v8.0/me?access_token=${accessToken}`)
    .then(res => {
        console.log(res);
    });

    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello fucking World again"})
    };
}