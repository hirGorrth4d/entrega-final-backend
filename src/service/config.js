import dotenv from 'dotenv';
dotenv.config();




export default {
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_URL || 'mongoSRV',
    MONGO_LOCAL_SRV: process.env.MONGO_LOCAL_SRV || 'mongoSRV',
    PORT: process.env.PORT || 5000,
    TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY || 'secret',
    GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'email@gmail.com',
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'password',
    GMAIL_NAME: process.env.GMAIL_NAME || 'GMAIL owner name',
}