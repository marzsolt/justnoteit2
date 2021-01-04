exports.handler = async function(event, context) {
    /*console.log("Event:");
    console.log(event);

    console.log("Context:");
    console.log(context);*/
    
    const { accessToken } = json(event.body);
    console.log(accessToken);

    /*await fetch(`https://graph.facebook.com/v8.0/me?access_token=${accessToken}`)
    .then(res => {
        console.log(res);
    });*/

    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello fucking World again"})
    };
}