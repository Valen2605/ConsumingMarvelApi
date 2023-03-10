import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ImageVariant } from 'src/app/models/image.model';
import { Category, MarvelRequestOptions } from 'src/app/models/request.model';
import { MarvelService } from 'src/app/services/marvel.service';
import { Observable, Subject } from 'rxjs';
import { concatMap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

declare let bootstrap: any;

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit, AfterViewInit {
  category: Category = 'stories';
  imageVariant: ImageVariant = ImageVariant.portrait_uncanny;
  stories: any[] = [];
  story: any;
  total = 0;
  notFound = false;
  modal: any;
  options!: MarvelRequestOptions;

  searchText$ = new Subject<string>();
  scroll$ = new Subject<number>();

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.options = {
      limit: 50,
      offset: 0
    };

    this.get();
    this.search();

    this.scroll$.next(0);
  }

  ngAfterViewInit(): void {
    this.modal = new bootstrap.Modal(document.getElementById('modal'));
  }

  getImage(character: any) {
    return this.marvelService.getImage(character.thumbnail, this.imageVariant);
  }

  get() {
    this.scroll$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      concatMap(offset => {
        this.options.offset = offset;
        return this.marvelService.getData(this.category, this.options);
      })).subscribe(data => this.handleResponse(data));
  }

  search() {
    this.searchText$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(() => this.marvelService.getData(this.category, this.options))).subscribe(data => this.handleResponse(data, true));
  }

  onScroll() {
    const offset = this.options.offset + this.options.limit;
    if (offset < this.total) {
      this.scroll$.next(offset);
    }
  }

  onSearch(searchText: string) {
    if (searchText !== this.options.titleStartsWith) {
      if (searchText) {
        this.options = {
          limit: 50,
          offset: 0,
          titleStartsWith: searchText
        };
      } else {
        this.options = {
          limit: 50,
          offset: 0
        };
      }
      this.stories = [];
      this.total = 0;
      this.notFound = false;
      this.searchText$.next(searchText);
    }
  }

  onClick(character: any) {
    this.story = character;
    if (this.modal) {
      this.modal.show();
    }
  }

  handleResponse(data: any, reset: boolean = false) {
    this.stories = reset ? data.results : [...this.stories, ...data.results];
    this.total = data.total;
    this.options.offset = this.options.offset || data.offset;
    this.notFound = !!!data.results.length;
  }


}
