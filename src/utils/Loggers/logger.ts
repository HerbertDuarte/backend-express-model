class Logger {

  log(content: any) {
    console.log(content);
  }
  alert(content: any) {
    console.warn("\x1b[33m" + content + "\x1b[0m");
  }
  error(content: any) {
    console.error("\x1b[31m" + content + "\x1b[0m");
  }
  success(content: any){
   console.log("\x1b[32m" + content + "\x1b[0m")
  }
  debug(content: any) {
    console.log("\x1b[35m" + content + "\x1b[0m");
  }
  table(content : [] | object[] | object){
   console.table(content)
  }
}
const logger = new Logger();

export default logger;
