import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: any =
 {
   name: "Grant",
   contactInfo: "Grant@Gc",
   bio: "Wow, Hi"
 };
  constructor(private router: Router) {}

  getUserProfile() {
    return this.userProfile;
  }

  setUpUserProfile(userInfo):any {
    this.userProfile = [{
      name: userInfo.name,
      contact: userInfo.contact,
      bio: userInfo.bio
    }]
    return this.userProfile;

  }

  updateProfile(updatedProfile) {
     this.userProfile = { ...updatedProfile };
     this.router.navigate(["/profile"]);
  }
}
