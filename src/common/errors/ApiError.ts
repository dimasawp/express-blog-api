export class ApiError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export const ThrowError = (status: number, message: string) => {
    throw new ApiError(status, message);
};
