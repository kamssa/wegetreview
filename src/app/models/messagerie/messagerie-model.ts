import {PersonneModel} from '../personne/personne-model';
import {ExpediteurModel} from '../messagerie/expediteur-model';
import {MessageModel} from '../messagerie/message-model';

export class MessagerieModel {
  constructor(
    public id?: number,
    public version?: number,
    public personne?: PersonneModel,
    public message?: MessageModel,
    public expediteur?: ExpediteurModel,
  ) {
  }

}
