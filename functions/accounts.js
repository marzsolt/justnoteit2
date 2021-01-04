const fetch = require('node-fetch');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: "adminsdk_key.json",
    databaseURL: "https://justnoteit2021-default-rtdb.firebaseio.com"
});
let db = admin.database();

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
        //console.log(res.status);

        if (res.status == 200) console.log(res.body);
        

    });

    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello fucking World again"})
    };
}