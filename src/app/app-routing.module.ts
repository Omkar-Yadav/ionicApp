import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  //{ path: "", redirectTo: "recipies", pathMatch: "full" },
  //{path : '', component:  LoginComponent},
  {
    path: "recipies",
    children: [
      {
        path: "",
        loadChildren:
          "./recipe-details/recipe-details.module#RecipeDetailsPageModule"
      },
      {
        path: ":recipeId",
        loadChildren:
          "./pages/device-page/device-page.module#DevicePagePageModule"
      }
    ]
  },
  {
    path: "devices",
    children: [
      {
        path: "",
        loadChildren:
          "./pages/devices-page/devices-page.module#DevicesPagePageModule"
      },
      {
        path: ":deviceId",
        loadChildren:
          "./pages/device-page/device-page.module#DevicePagePageModule"
      }
    ]
  },

  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: "./pages/rooms-page/rooms-page.module#RoomsPagePageModule"
      },
      {
        path: ":roomId",
        loadChildren: "./pages/room-page/room-page.module#RoomPagePageModule"
      }
    ]
  },
  {
    path: "login-page",
    loadChildren: "./pages/login-page/login-page.module#LoginPagePageModule"
  },
  {
    path: "logout-page",
    loadChildren: "./pages/logout-page/logout-page.module#LogoutPagePageModule"
  },
  {
    path: "stats-page",
    loadChildren: "./pages/stats-page/stats-page.module#StatsPagePageModule"
  },
  {
    path: "timer-page",
    loadChildren: "./pages/timer-page/timer-page.module#TimerPagePageModule"
  },
  {
    path: "mic-page",
    loadChildren: "./pages/mic-page/mic-page.module#MicPagePageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
