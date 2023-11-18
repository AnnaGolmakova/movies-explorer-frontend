class RequestError extends Error {
    constructor(message, code, body) {
        super(message);
        this.code = code;
        this.body = body;
    }
}

export default RequestError;