module.exports = {
  apps: [
    {
      name: "ironbyte-site",
      cwd: ".",
      script: "npm",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
