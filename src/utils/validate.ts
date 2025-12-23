import { ZodType } from "zod";
import { ApiError } from "../common/errors/ApiError";

export const validate = <T>(schema: ZodType<T>, data: unknown): T => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
        throw new ApiError(400, parsed.error.issues[0].message);
    }
    return parsed.data;
};
