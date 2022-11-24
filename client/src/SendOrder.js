// TODO: Send order to backend
export default function SendOrder(json) {
    // POST the order to the api
    fetch("https://ieserver.com/sendOrder", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: json,
    })
}
