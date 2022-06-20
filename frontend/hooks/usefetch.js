export const useFetch = {
    async get(EndPoint) {
        let url = `http://localhost:5000/${EndPoint}`
        const response = await fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
                // "Authorization": `Bearer ${token}`
            },
        });
        return await response.json()
    },

    async post(EndPoint, body) {

        let url = `http://localhost:5000/${EndPoint}`
        console.log(url);
        return await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"

                // "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

    }
}