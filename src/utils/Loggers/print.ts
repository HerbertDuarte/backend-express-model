enum Colors {
  GREEN= "green",
  RED = "red",
  BLUE = "blue",
  YELLOW = "yellow",
  PURPPLE = "purple",
}
export default function print(content : String, color : string) {

  let colorCode : string;
  switch(color){
    case Colors.GREEN:
      colorCode = "\x1b[32m"
      break;
    case Colors.RED:
      colorCode = "\x1b[31m"
      break;
    case Colors.BLUE:
      colorCode = "\x1b[34m"
      break;
    case Colors.YELLOW:
      colorCode = "\x1b[33m"
      break;
    case Colors.PURPPLE:
      colorCode = "\x1b[35m"
      break;
    default:
      colorCode = "\x1b[0m"
      break
  }

  console.log(colorCode +content + "\x1b[0m");

}
