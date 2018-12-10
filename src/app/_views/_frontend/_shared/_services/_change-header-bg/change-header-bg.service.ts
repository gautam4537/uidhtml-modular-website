import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeHeaderBgService {
  public headerBg: Subject<string> = new Subject();
  constructor() { }
}
