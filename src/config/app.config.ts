export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.port || 3002,
  defaultLimit: +process.env.DEFAULT_LIMIT || 7
});
