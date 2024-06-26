import { Routes } from '@angular/router';
import {SettingspageComponent} from "./components/settingspage/settingspage.component";
import {DetailpageComponent} from "./components/group-detail/detailpage.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ErrorpageComponent} from "./components/errorpage/errorpage.component";
import {ShowDronesComponent} from "./components/show-drones/show-drones.component";
import {ShowGroupsComponent} from "./components/show-groups/show-groups.component";
import {ShowZonesComponent} from "./components/show-zones/show-zones.component";
import {AddDronesComponent} from "./components/add-drones/add-drones.component";
import {AddGroupsComponent} from "./components/add-groups/add-groups.component";
import {AddZonesComponent} from "./components/add-zones/add-zones.component";
import {DetailZonesComponent} from "./components/detail-zones/detail-zones.component";
import {EditDroneComponent} from "./components/edit-drone/edit-drone.component";
import {EditGroupComponent} from "./components/edit-group/edit-group.component";

export const routes: Routes = [
  {path: "home", component: HomepageComponent},

  //showall
  {path: "showDrones", component: ShowDronesComponent},
  {path: "showGroups", component: ShowGroupsComponent},
  {path: "showZones", component: ShowZonesComponent},

  //add
  {path: "addDrones", component: AddDronesComponent},
  {path: "addGroups", component: AddGroupsComponent},
  {path: "addZones", component: AddZonesComponent},

  //edit
  {path: "detail/zones/:id", component: DetailZonesComponent},
  {path: "detail/drones/:id", component: EditDroneComponent},
  {path: "detail/groups/edit/:id", component: EditGroupComponent},

  //info
  {path: "detail/groups/:id", component: DetailpageComponent},
  {path: "settings", component: SettingspageComponent},
  {path: "", redirectTo: "home",pathMatch:"full"},
  {path: "**", component: ErrorpageComponent}
];
