const bot = require(__dirname + '/lib/virussi')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Starting Virusi - ${VERSION}`)
  try {
    await bot.init()
    //bot.logger.info('⏳ Database Syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
