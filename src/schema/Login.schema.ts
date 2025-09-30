import * as z from 'zod'

export const loginSchema = z.object({
    email: z.email().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, "invalid email"),
    password: z
        .string()
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "invalid password"
        ),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;