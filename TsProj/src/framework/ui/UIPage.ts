import { UIPanel } from "./UIPanel";
import { UITypeDef, UIComDefs } from "./UIDefine";
import { UIManager } from "../manager/UIManager";


export abstract class UIPage extends UIPanel{

    public get uiType(): UITypeDef {    
        return UITypeDef.Page;
    }


    private m_btnGoBack:any;


    public onAwake():void{
        
        this.m_btnGoBack = this.fui.GetChild(UIComDefs.BackBtn);

        if(this.m_btnGoBack!=undefined){
            this.m_btnGoBack.onClick.Add(()=>{
                this.onBtnGoBack();
            });
        }
    }

    public onOpen(arg:any):void{
        super.onOpen(arg);

        
    
    }
    public onClose(arg:any):void{
        super.onClose(arg);

    }

    private onBtnGoBack(){
        UIManager.Instance(UIManager).goBackPage();
    }

} 