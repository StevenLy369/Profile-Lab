import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userProfile:any;

  

  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile()
  }

   setProfile(updatedProfile) {
     this.profileService.updateProfile(updatedProfile);
   }


}
