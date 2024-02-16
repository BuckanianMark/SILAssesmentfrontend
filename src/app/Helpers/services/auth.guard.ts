import { inject } from "@angular/core"
import { AuthServiceService } from "./auth-service.service"
import { Router } from "@angular/router"

export const canActivate = () => {
    // user!:any
    const authService = inject(AuthServiceService)
    const router = inject(Router)
    authService.userObservable.subscribe((data) =>{
    const user = data
    if(user.token)
    {
        return true
    }else{
        router.navigate(['/login'])
        return false;
    }
    })
    
}