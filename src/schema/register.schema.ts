import * as z from 'zod'

export const registerSchema = z.object({
    name: z.string().min(4, "min length 4").max(30, "max length 30"),
    email: z.email().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, "invalid email"),
    password: z
        .string()
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "invalid password"
        ),
    rePassword: z
        .string()
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "invalid password"
        ),
    phone: z.string().regex(/^(010|011|012|015)[0-9]{8}$/, "invalid phone number"),
}).refine((object) => {
    if (object.password === object.rePassword) {
        return true;
    } else {
        return false;
    }
}, { path: ["rePassword"], error: "password do not match" });

export type RegisterSchemaType = z.infer<typeof registerSchema>