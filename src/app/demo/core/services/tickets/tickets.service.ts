import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//Models//

//endpoints//
import { tickets} from 'src/app/demo/global/endpoints';
import { GetTicketsResponse } from '../../models/tickets/get-tickets-response-modules';
import { getTicketsRequest } from '../../models/tickets/get-tickets.model';




@Injectable({
  providedIn: 'root',
})
export class TicketsService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders ({
      Authorization: 'Bearer ' + token
    })
  }
 
  getTickets(data:getTicketsRequest): Observable<GetTicketsResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<GetTicketsResponse>(tickets.getTickets, data, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }

}