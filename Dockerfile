# ---- deps ----
FROM node:20-alpine AS deps
WORKDIR /app

# Для сумісності деяких пакетів (bcrypt, sharp тощо)
RUN apk add --no-cache libc6-compat

# Спочатку лише маніфести — кращий кеш
COPY package.json package-lock.json* ./

# НЕ npm ci (бо lock зараз не синхронний)
RUN npm install

# ---- builder ----
FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Якщо у тебе payload генерує типи/графкюель схему — можна лишити як є
RUN npm run build

# ---- runner ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

# копіюємо тільки те, що треба для запуску
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Next.js output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Payload може вимагати ці папки (якщо є у проекті)
# Якщо їх нема — команди не завадять, бо COPY впаде.
# Тому безпечніше явно не копіювати, або створити їх у репі.
# Якщо є такі каталоги — розкоментуй:
# COPY --from=builder /app/payload.config.* ./ 
# COPY --from=builder /app/src ./src

EXPOSE 3000
CMD ["npm", "run", "start"]
