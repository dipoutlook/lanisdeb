/**
 * PM2 Ecosystem Configuration File
 *
 * This file is used by PM2 to manage the Node.js application process.
 * It defines how the application should be started, monitored, and managed.
 * See: https://pm2.keymetrics.io/docs/usage/application-declaration/
 */
module.exports = {
  apps: [{
    name: 'lanisdeb-api',
    script: 'server/dist/index.js', // Path to the compiled server entrypoint
    instances: 'max', // Use all available CPU cores
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      // These will be injected by Ansible/CI from secrets
      // PORT: 4000,
      // DATABASE_URL: '{{ db_url_secret }}',
      // ADMIN_JWT_SECRET: '{{ jwt_secret }}'
    }
  }]
};