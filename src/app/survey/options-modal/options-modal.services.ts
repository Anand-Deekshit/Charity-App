export class ModalService {
   private modalToOpen:any;
    initiateModal(modal:any){
        this.modalToOpen = modal;
    }
    modalOpen() {
        this.modalToOpen.open();
    }

    modalClose(){ 
        this.modalToOpen.close();
    }
}