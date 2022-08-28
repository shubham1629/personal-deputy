import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/modules/common/core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class TaskDBService {

  constructor(private http: HttpService) {
  }

  getTask(id: string) {
    this.http.get("www.googel.com/task/" + id);
  }
}
