import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../service/navigation/navigation.service';
import { Page } from '../../class/page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private pages : Array<any>;
  private errorMessage : String;
  private page : Page = new Page();

  constructor(private navigationService : NavigationService) { }

  ngOnInit() {
    this.navigationService.loadPages().subscribe(
      data => { this.pages = data } , error => this.errorMessage = "Unable to load Page Info"
    );
  }

}
