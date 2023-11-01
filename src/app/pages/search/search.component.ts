import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:MovieApiService,
    title:Title,
    private meta:Meta
    ){
      title.setTitle('Search movies - showtime');
      this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
    }

  searchResult : any=[]

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  submitForm(){
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      this.searchResult = result.results;
    })
  }
}
