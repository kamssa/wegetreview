export class MessageModel {
    id?: number = null;
    version?: number = 0;
    sujet?: string = "";
    contenu?: string = "";
    date?: Date = null;
    statut?: boolean = null;
    typeMessage?: boolean = null;
}
