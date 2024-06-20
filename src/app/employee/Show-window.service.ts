import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class ShowWindowService{

    showWindow(message: string): void {

        alert(message);
    }
}