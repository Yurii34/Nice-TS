


export enum UITypeDef{
    Unkown = 0,
    Page = 1,
    Window=2,
    Widget = 3,
    Loading =4
}

export class UILayerDef{

    public static Background:number = 0;
    public static Page:number = 1000;
    public static NormalWindow:number = 2000;
    public static TopWindow:number = 3000;
    public static Widget:number = 4000;
    public static Loading:number = 5000;
    public static Unkown:number = 9999;

    public static  getDefaultLayer(type:UITypeDef):number{

        switch(type){
            case UITypeDef.Loading: return this.Loading;
            case UITypeDef.Widget: return this.Widget;
            case UITypeDef.Window: return this.NormalWindow;
            case UITypeDef.Page: return this.Page;
            case UITypeDef.Unkown: return this.Unkown;
            default: return this.Unkown; 
        }
    }
}


export class UIPackages{

    public static Game:string = "game";


}


export class UIComDefs{
    public static BackBtn = "back_btn";
    public static WindowCloseBtn = "win_close_btn";
}

export class UIDefs{

    public static UILoadingPage:string = "LoadingPage";

    public static UILoginPage:string = "LoginPage";
    public static UIHomePage:string = "HomePage";
    public static UILevelage:string = "LevelPage";
    public static UIShopPage:string = "ShopPage";
    public static UISelServerWin:string = "SelServerWin";
    

}