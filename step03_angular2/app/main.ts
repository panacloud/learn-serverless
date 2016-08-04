import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { HTTP_PROVIDERS, Http, Headers } from '@angular/http';


@Component({
    selector: 'my-app',
   template: `
       <div>
		{{index}}
        

	`
})
class AppComponent { 
	private serviceUrl = 'https://jqxcbc4im6.execute-api.us-east-1.amazonaws.com/dev/mypost?value1=9';  // URL to service
    private response: any;

	constructor(private http: Http){
        this.post();
	}
	
    private post() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = { name: "zia" };
        this.http
             .post(this.serviceUrl, JSON.stringify(request), {headers: headers}).subscribe((res => console.log(res)));
             //.toPromise()
             //.then(res => res.json().data)
             //.catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
	
}
bootstrap(AppComponent, [HTTP_PROVIDERS]);



