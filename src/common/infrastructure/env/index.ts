import { z } from 'zod'
import 'dotenv/config'
import { AppError } from '@/common/domain/errors/app-error'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3333),
  API_URL: z.string().default('http://localhost:3001'),
})

const _env = envSchema.safeParse(process.env)
if (_env.success === false) {
  throw new AppError('Invalid environment variables')
}
 
export const env = _env.data
