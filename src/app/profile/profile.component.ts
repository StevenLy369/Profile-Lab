import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

  editProfile() {
    this.router.navigate(["/edit"]);
  }

}
