import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { from, Observable } from 'rxjs';
interface HasId {
  id?: number;
}
export class Sync<T extends HasId> {
  constructor(public rootUrl: string){}
  fetch<T>(id: number): Observable<AxiosResponse<T>> {
    return from(axios.get(`${this.rootUrl}/${id}`));
  }
  save = (data: T): Observable<AxiosResponse> => {
    const { id } = data;

    if(id) {
      return from(axios.put(`${this.rootUrl}/${id}`, data));
    } else {
      return from(axios.post(`http://localhost:3000/users`, data));
    }
  }
}