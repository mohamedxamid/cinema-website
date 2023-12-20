async function postData(url, data) {
    return await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export { postData };