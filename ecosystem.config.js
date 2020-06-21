module.exports = {
  apps : [{
    name      : 'tanglinhai_home',
    script    : 'bin/www',
    instances: "1",
    instance_var: "INSTANCE_ID",
    "exec_mode": "cluster",
    error_file: '../logs/tanglinhai_home/err.log',
    out_file: '../logs/tanglinhai_home/out.log',
    log_file: '../logs/tanglinhai_home/combined.log',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    },
    watch: false
  }]
};
