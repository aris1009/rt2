async function logger(ctx, next) {
  const { request: r } = ctx;
  console.log(`Incoming ${r.method} ${r.originalUrl}`);
  console.time('Response time');
  await next();
  console.timeEnd('Response time')
}

module.exports = {
  logger,
}
