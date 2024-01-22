import { router } from "@/routes"

export default function listRoutes(){
 router.stack.map((item)=>{
   console.log((`[OK] ${item.route.path} [${item.route.stack[0].method}]`).toLocaleUpperCase())
 })
 console.log()
}

