import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  myDetails!: any[];
  myRepositories!: any[];
  userRepo!: any[];
  constructor(private http: HttpClient) {}
  getMyInfo(): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/users/LeonDante-ctrl' + '?access_token=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`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }
  getMyRepos(): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/users/LeonDante-ctrl/repos' + ?access_token=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'`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          //
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }

  searchByUser(data: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/search/users?q=${data}&per_page=1000`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }
  searchByRepos(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/search/repositories?q=${query}&per_page=1000`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }
  getUserDetails(repoURL: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `${repoURL}?&per_page=1000`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }
}