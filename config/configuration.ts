export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: 3306
    },
    saluti: 'ciao dal config'
  });