import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { servicesTools } from '../servicesTools';
import { GenericResponse } from 'src/interface/generic.interface';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person_Request } from 'src/models/http_request/person_request.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends servicesTools {

  rpta:GenericResponse | undefined;
  endpoint:string = 'api/Person';
  
  constructor(private http: HttpClient) {
    super();
  }
  
  getAll(): Observable<GenericResponse>{
    return this.http
    .get<GenericResponse>(`${this.endpoint}`)
    .pipe(
      map((res: GenericResponse) => {
        return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  getById($id: string){
    return this.http
      .get<GenericResponse>(`${this.endpoint}/${$id}`)
      .pipe(
        map((res: GenericResponse) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  create($persona:Person_Request): Observable<GenericResponse>{
    return this.http
      .post<GenericResponse>(`${this.endpoint}`, $persona)
      .pipe(
        map((res: GenericResponse) => { return res; }),
        catchError((err) => this.handlerError(err))
      );
  }

  update($persona:Person_Request, $id:string): Observable<GenericResponse>{
    return this.http
      .put<GenericResponse>(`${this.endpoint}/${$id}`, $persona)
      .pipe(
        map((res: GenericResponse) => { return res; }),
        catchError((err) => this.handlerError(err))
      );
  }

  delete($id: string){
    return this.http
      .delete<GenericResponse>(`${this.endpoint}/${$id}`)
      .pipe(
        map((res: GenericResponse) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }
}
