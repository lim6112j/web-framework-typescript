import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { from, Observable } from 'rxjs';
interface HasId {
  id?: number;
}
export class Sync<P extends HasId> {
  constructor(public rootUrl: string){}
  fetch<P>(id: number): Observable<AxiosResponse<P>> {
    return from(axios.get(`${this.rootUrl}/${id}`));
  }
  save = (data: P): Observable<AxiosResponse> => {
    const { id } = data;

    if(id) {
      return from(axios.put(`${this.rootUrl}/${id}`, data));
    } else {
      return from(axios.post(`${this.rootUrl}`, data));
    }
  }
}