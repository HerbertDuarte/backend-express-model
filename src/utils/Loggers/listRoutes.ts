import { router } from "@/routes"

export default function listRoutes(){
 router.stack.map((item)=>{
   console.log((`[OK] [${item.route.stack[0].method}] ${item.route.path}`).toLocaleUpperCase())
 })
 console.log()
}

